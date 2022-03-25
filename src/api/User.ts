import axios from 'axios'
import { User } from '@/models/User'

const apiUrl = 'users'

export const getUserById = async (email: string): Promise<User> => {
    try {
        const res = await axios.get(`${apiUrl}/${email}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get user')
    }
}