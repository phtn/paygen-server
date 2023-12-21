import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@lib/db'
import { formatMobile } from '@utils'
import { AccountResponseResource } from '@resource/account'

export const CustomerChecker = async (
	collectionPath: string,
	mobile_number: string
) => {
	if (mobile_number) {
		const q = query(
			collection(db, collectionPath),
			where('mobile_number', '==', formatMobile(mobile_number))
		)
		const querySnapshot = await getDocs(q)

		let documents: AccountResponseResource[] = []
		querySnapshot.forEach((doc) => {
			const data = doc.data() as AccountResponseResource
			documents.push(data)
		})
		return documents
	}
}
