import {db} from '@lib/db'
import {FirebaseAppError} from "firebase-admin/lib/utils/error";
import {addDoc, collection} from 'firebase/firestore'

export const error = async (error: unknown) => {
    const Err = (error: FirebaseAppError) => {
        throw new Error(error.message)
    }
    const Ok = (value: any) => {
        console.log(value)
    }

    if (error) {
        return await addDoc(collection(db, 'errors'), {
            error,
            created_at: new Date().getTime(),
        }).then(Ok, Err)
    }
}
