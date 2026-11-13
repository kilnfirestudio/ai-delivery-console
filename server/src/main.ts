import { buildApp } from './app.js';
import { loadConfig } from './config.js';

try {
  const config = loadConfig();
  const { app } = buildApp(config);
  await app.listen({ host: config.host, port: config.port });
  console.info('Delivery gateway started');
  for (const signal of ['SIGINT', 'SIGTERM'] as const) {
    process.once(signal, () => { void app.close().then(() => { process.exitCode = 0; }); });
  }
} catch {
  console.error('Gateway startup failed; check configuration and port availability');
  process.exitCode = 1;
}
