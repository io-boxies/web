const firebaseProdConfig = {
  apiKey: 'AIzaSyDiUpfgqnrqbEa5k-XP_kxBFqsk1f_sfmw',
  authDomain: 'inoutbox-production.firebaseapp.com',
  projectId: 'inoutbox-production',
  storageBucket: 'inoutbox-production.appspot.com',
  messagingSenderId: '901609672280',
  appId: '1:901609672280:web:7d68e38edbe5d29f39842d',
  measurementId: 'G-JQEHKNBSPN'
}
const firebaseDevConfig = {
  apiKey: 'AIzaSyA2e7qrXx3uA5lSld-oIjaehoVF-o4rnpQ',
  authDomain: 'inoutbox-development.firebaseapp.com',
  projectId: 'inoutbox-development',
  storageBucket: 'inoutbox-development.appspot.com',
  messagingSenderId: '387672461167',
  appId: '1:387672461167:web:d5863643f6cf4d627d229a',
  measurementId: 'G-2WV8MQCWCV'
}
export function getPubEnv() {
  const mode = import.meta.env.VITE_IO_MODE
  const isTest = mode === 'test'
  const isEmulate = import.meta.env.VITE_IS_EMULATE === 'true'
  const isProd = mode === 'production'
  return {
    isTest,
    isEmulate,
    mode,
    FB_API_KEY: isProd ? firebaseProdConfig.apiKey : firebaseDevConfig.apiKey,
    FB_AUTH_DOMAIN: isProd ? firebaseProdConfig.authDomain : firebaseDevConfig.authDomain,
    FB_PROJECT_ID: isProd ? firebaseProdConfig.projectId : firebaseDevConfig.projectId,
    FB_STORAGE_BUCKET: isProd ? firebaseProdConfig.storageBucket : firebaseDevConfig.storageBucket,
    FB_MESSAGING_SENDER_ID: isProd
      ? firebaseProdConfig.messagingSenderId
      : firebaseDevConfig.messagingSenderId,
    FB_APP_ID: isProd ? firebaseProdConfig.appId : firebaseDevConfig.appId,
    FB_MEASUREMENT_ID: isProd ? firebaseProdConfig.measurementId : firebaseDevConfig.measurementId
  }
}
