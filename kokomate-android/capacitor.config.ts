import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kokomate.app',
  appName: 'KokoMate',
  webDir: '../out',
  plugins: {
    StatusBar: {
      overlaysWebView: true,
      style: 'DEFAULT',
      backgroundColor: '#00000000'
    }
  }
};

export default config;
