const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const PORT = 4568;
const CDP_PORT = 9224;
const ROOT_DIR = path.resolve(__dirname, '..');
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqUrl = req.url.split('?')[0].split('#')[0];
      if (reqUrl === '/') reqUrl = '/index.html';
      reqUrl = decodeURIComponent(reqUrl);
      const filePath = path.join(ROOT_DIR, reqUrl);

      if (!filePath.startsWith(ROOT_DIR)) {
        res.writeHead(403);
        return res.end('Forbidden');
      }

      fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('404 Not Found: ' + reqUrl);
        }
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      });
    });

    server.listen(PORT, '127.0.0.1', () => {
      console.log(`[HTTP Server] Running at http://127.0.0.1:${PORT}`);
      resolve(server);
    });
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.callbacks = new Map();
  }

  init() {
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    try { this.ws.close(); } catch(e) {}
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const server = await startServer();
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = path.join(require('node:os').tmpdir(), 'edge-ss-' + Date.now());

  const edgeProc = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-background-networking',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--window-size=1440,900',
    'about:blank'
  ]);

  // Wait for Edge CDP port
  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await sleep(250);
    try {
      const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`);
      const tabs = await res.json();
      if (tabs.length > 0 && tabs[0].webSocketDebuggerUrl) {
        wsUrl = tabs[0].webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  if (!wsUrl) {
    console.error('Failed to get WebSocket debugger URL');
    edgeProc.kill();
    server.close();
    process.exit(1);
  }

  const client = new CDPClient(wsUrl);
  await client.init();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  const pagesToCapture = [
    { name: '01_homepage_light', url: `http://127.0.0.1:${PORT}/index.html`, theme: 'light' },
    { name: '01_homepage_dark', url: `http://127.0.0.1:${PORT}/index.html?theme=dark`, theme: 'dark' },
    { name: '02_flights_view_light', url: `http://127.0.0.1:${PORT}/pages/flights.html`, theme: 'light' },
    { name: '02_flights_schedule_dark', url: `http://127.0.0.1:${PORT}/pages/flights.html?view=schedule&theme=dark`, theme: 'dark' },
    { name: '03_booking_light', url: `http://127.0.0.1:${PORT}/pages/booking.html`, theme: 'light' },
    { name: '04_seats_light', url: `http://127.0.0.1:${PORT}/pages/seats.html`, theme: 'light' },
    { name: '05_payment_light', url: `http://127.0.0.1:${PORT}/pages/payment.html`, theme: 'light' },
    { name: '06_ticket_boarding_pass', url: `http://127.0.0.1:${PORT}/pages/ticket.html`, theme: 'light' },
    { name: '07_login_light', url: `http://127.0.0.1:${PORT}/pages/login.html`, theme: 'light' },
    { name: '08_register_light', url: `http://127.0.0.1:${PORT}/pages/register.html`, theme: 'light' },
    { name: '09_admin_dashboard_dark', url: `http://127.0.0.1:${PORT}/admin/index.html?theme=dark`, theme: 'dark' },
  ];

  console.log(`\n📸 Starting Screenshot Capture for ${pagesToCapture.length} views...`);

  for (const item of pagesToCapture) {
    console.log(`\nNavigating to: ${item.name} (${item.url})`);
    await client.send('Page.navigate', { url: item.url });
    await sleep(1500);

    await client.send('Runtime.evaluate', {
      expression: `document.documentElement.setAttribute('data-theme', '${item.theme}');`
    });
    await sleep(400);

    const ssResult = await client.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    const filePath = path.join(SCREENSHOT_DIR, `${item.name}.png`);
    fs.writeFileSync(filePath, Buffer.from(ssResult.data, 'base64'));
    console.log(`✅ Saved: ${filePath} (${(ssResult.data.length * 0.75 / 1024).toFixed(1)} KB)`);
  }

  console.log('\n🎉 ALL SCREENSHOTS CAPTURED SUCCESSFULLY!');
  client.close();
  edgeProc.kill();
  server.close();
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
