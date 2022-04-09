import axios from 'axios'
import { auth } from '@/firebase/firebaseConfig'

import { AnswerComment } from '@/models/QuestionDetail'
const apiUrl = 'answers'

export const postAnswerComment = async (answerId: number, content: string): Promise<AnswerComment> => {
  try {
    const res = await axios.post(`${apiUrl}/comments`, {
      answerId,
      userId: auth.currentUser?.uid,
      content
    })
    return res.data
  } catch (error) {
    throw error
  }
}
