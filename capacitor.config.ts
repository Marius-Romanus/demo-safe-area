import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'demo-safe-area',
  webDir: 'www',
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
    },
  },
};

export default config;
