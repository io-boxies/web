import { initializeApp } from '@firebase/app'
import { getAuth, connectAuthEmulator } from '@firebase/auth'
import { getFirestore, connectFirestoreEmulator } from '@firebase/firestore'
import { getAnalytics } from '@firebase/analytics'
import { getStorage, connectStorageEmulator } from '@firebase/storage'
import { getFunctions, connectFunctionsEmulator } from '@firebase/functions'

import { getPubEnv } from '../common/load-env'

export class IoFireApp {
  private static instance: IoFireApp
  app: ReturnType<typeof initializeApp>
  store: ReturnType<typeof getFirestore>
  storage: ReturnType<typeof getStorage>
  func: ReturnType<typeof getFunctions>
  auth: ReturnType<typeof getAuth>
  analytics?: ReturnType<typeof getAnalytics>
  isTest: boolean
  mode: string

  // new 클래스 구문 사용 제한을 목적으로 constructor() 함수 앞에 private 접근 제어자 추가
  // private constructor(config: ReturnType<typeof useRuntimeConfig>) {
  private constructor(config: ReturnType<typeof getPubEnv>) {
    this.isTest = config.isEmulate
    this.mode = config.mode

    this.app = this.getIoFirebaseApp(config)
    if (typeof window !== 'undefined') {
      this.analytics = getAnalytics(this.app)
    }
    this.auth = getAuth(this.app)
    this.store = getFirestore(this.app)
    this.storage = getStorage(this.app)
    this.func = getFunctions(this.app)
    if (this.isTest) {
      console.log('=== get firebase with emulators >< === ')
      connectFirestoreEmulator(this.store, 'localhost', 8087)
      connectStorageEmulator(this.storage, 'localhost', 9199)
      connectFunctionsEmulator(this.func, 'localhost', 5001)
      connectAuthEmulator(this.auth, 'http://localhost:9099')
      // console.log("emulators: ", this.auth, this.storage, this.store);
    }
  }
  private getIoFirebaseApp(config: ReturnType<typeof getPubEnv>) {
    const firebaseConfig = {
      apiKey: config.FB_API_KEY,
      authDomain: config.FB_AUTH_DOMAIN,
      projectId: config.FB_PROJECT_ID,
      storageBucket: config.FB_STORAGE_BUCKET,
      messagingSenderId: config.FB_MESSAGING_SENDER_ID,
      appId: config.FB_APP_ID,
      measurementId: config.FB_MEASUREMENT_ID
    }
    if (Object.values(firebaseConfig).some((v) => !v))
      throw Error('missing firebase configuration: ' + JSON.stringify(firebaseConfig, undefined, 4))
    return initializeApp(firebaseConfig)
    // else throw new IoNotSupportedEnv(`${this.env} is not supported env`);
  }

  // 오직 getInst() 스태틱 메서드를 통해서만 단 하나의 객체를 생성할 수 있습니다.
  public static getInst() {
    const pub = getPubEnv()
    if (!IoFireApp.instance) {
      IoFireApp.instance = new IoFireApp(pub)
    } else if (IoFireApp.instance.mode !== pub.mode) {
      throw new Error(`param ${pub.mode} is not matched env(${IoFireApp.instance.mode})`)
    } else if (
      this.instance.isTest &&
      (this.instance.mode !== 'test' ||
        !this.instance.auth.emulatorConfig ||
        this.instance.auth.emulatorConfig.host !== 'localhost')
    )
      throw new Error('emulator not setup')
    return IoFireApp.instance
  }
}
