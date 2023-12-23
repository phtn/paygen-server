//import {initializeApp, cert} from 'firebase-admin/app'
import {initializeApp as init} from 'firebase/app'
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const config = {
    apiKey: process.env.F_API_KEY,
    authDomain: process.env.F_AUTH_DOMAIN,
    projectId: process.env.F_PROJECT_ID,
    storageBucket: process.env.F_STORAGE,
    messagingSenderId: process.env.F_MESSAGING,
    appId: process.env.F_APP_ID,
    measurementId: process.env.F_COCK_LENGTH,
}

const SA = `${process.env.SA}`

//const app = initializeApp({
//    credential: cert(JSON.parse(SA)),
//    projectId: `${process.env.F_PROJECT_ID}`,
//})

const app = init(config)

export const db = getFirestore(app)

export const auth = getAuth(app)
//export const db = getFirestore(app)
//export const storageBucket = getStorage(app)
