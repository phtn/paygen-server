import {error} from './error'
import {CreateAccountResource} from '@resource/account'
import {FirebaseAppError} from "firebase-admin/lib/utils/error";
import {db} from "@lib/db";
import {doc, setDoc} from 'firebase/firestore'


export const createFirebaseAccount = async (
    customer: CreateAccountResource,
    id: string
) => {
    const Err = (err: FirebaseAppError) => {
        error(err)
    }
    const Ok = (response: any) => {
        return response
    }

    if (typeof customer !== 'object') {
        throw new Error('customer must be an object')
    }

    if (customer) {
        await setDoc(doc(db, 'customers', id), {
            ...customer,
            is_active: true,
            created_by: 'admin',
            created_at: new Date().getTime(),
            updated_at: new Date().getTime(),
        }).then(Ok, Err)

        console.log('Account created with ID: ', id)
    }
}
