//import {AccountResponseResource} from '@resource/account'
import {formatMobile} from '@utils'
import {db} from "@lib/db"
import {collection, getDocs, query, where} from 'firebase/firestore'

const CustomerChecker = async (
    collectionPath: string,
    mobile_number: string
) => {
    if (mobile_number) {
        const q = query(collection(db, collectionPath), where('mobile_number', '==', formatMobile((mobile_number))))

        const qSnap = await getDocs(q)

        return qSnap.docs.map(doc => doc.data())

    }
    return null
}


export default CustomerChecker
