import axios from 'axios'
import { Question } from '@/models/Question'

const apiUrl = 'questions'

export const getQuestion = async (): Promise<Question[]> => {
    try {
        const res = await axios.get(`${apiUrl}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get user')
    }
}