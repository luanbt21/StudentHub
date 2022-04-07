import axios from 'axios'
import { QuestionDetail } from '@/models/QuestionDetail'
const apiUrl = 'questions'

export const getQuestionById = async (id: string): Promise<QuestionDetail> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get question')
  }
}
