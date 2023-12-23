import {db} from '@lib/db'
import {error} from './error'
import {PaymentResponse} from '@resource/payment'
import {FirebaseAppError} from "firebase-admin/lib/utils/error";
import {collection, doc, updateDoc, setDoc} from 'firebase/firestore'

export const update = async (data: PaymentResponse, id: string) => {
    const Err = (err: FirebaseAppError) => {
        error(err)
    }
    const Ok = (response: any) => {
        return response
    }

    if (data) {
        const docRef = doc(db, 'customers', id)
        const invoiceCollection = collection(docRef, 'invoice')
        const invoiceRef = doc(invoiceCollection, data.external_id)

        await updateDoc(docRef, {
            updated_at: new Date().getTime()
        })

        await setDoc(invoiceRef, {
            ...data,
            created_at: new Date().getTime(),
            updated_at: new Date().getTime(),
        }).then(Ok, Err)

        console.log('Payment link created with invoice_id: ', invoiceRef.id)
    }
}
