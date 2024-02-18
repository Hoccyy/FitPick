import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hoccyy.fitpick',
  appName: 'fit-pick',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
