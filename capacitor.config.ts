import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.tajergomla.app',
  appName: 'تاجر جملة',
  webDir: 'www',
  backgroundColor: '#f8fafc',
  android: {
    allowMixedContent: true,
  },
  server: {
    cleartext: true,
  },
}

export default config
