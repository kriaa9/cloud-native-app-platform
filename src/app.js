const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let requestCount = 0;
let errorCount = 0;

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Metrics for Prometheus
app.get('/metrics', (req, res) => {
  res.type('text/plain');
  res.send(`# HELP requests_total Total HTTP requests
# TYPE requests_total counter
requests_total ${requestCount}
# HELP errors_total Total errors
# TYPE errors_total counter
errors_total ${errorCount}`);
});

// Main page
app.get('/', (req, res) => {
  requestCount++;
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Cloud Native App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        h1 { font-size: 2.5em; margin-bottom: 20px; }
        .info { background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; }
        .status { color: #00ff00; font-weight: bold; }
      </style>
    </head>
    <body>
      <h1>🚀 100% FREE Cloud Native App</h1>
      <div class="info">
        <p>Running on <span class="status">Minikube Kubernetes</span></p>
        <p>Container: ${process.env.HOSTNAME || 'unknown'}</p>
        <p>Version: ${process.env.VERSION || '1.0.0'}</p>
        <p>Requests: ${requestCount}</p>
        <p>Status: <span class="status">✓ Healthy</span></p>
        <p style="margin-top: 30px; font-size: 0.9em;">
          100% FREE & OPENSOURCE | NO CREDIT CARD | Running Locally
        </p>
      </div>
    </body>
    </html>
  `);
});

app.get('/error', (req, res) => {
  errorCount++;
  res.status(500).json({ error: 'Test error' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`Health: http://localhost:${port}/health`);
  console.log(`Metrics: http://localhost:${port}/metrics`);
});
