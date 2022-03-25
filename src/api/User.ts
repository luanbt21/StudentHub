import axios from 'axios'
import { User } from '@/models/User'

const apiUrl = 'users'

export const getUserByUid = async (uid: string): Promise<User> => {
    try {
        const res = await axios.get(`${apiUrl}/${uid}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get user')
    }
}