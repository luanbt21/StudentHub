import axios from 'axios'
import { auth } from '@/firebase/firebaseConfig'

import { Answer, AnswerComment } from '@/models/QuestionDetail'
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

export const putAnswerComment = async (id: number, content: string): Promise<AnswerComment> => {
  try {
    const res = await axios.put(`${apiUrl}/comments/${id}`, {
      userId: auth.currentUser?.uid,
      content
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteAnswerComment = async (id: number) => {
  try {
    const res = await axios.delete(`${apiUrl}/comments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const postAnswer = async (questionId: number, content: string): Promise<Answer> => {
  try {
    const res = await axios.post(apiUrl, {
      questionId,
      userId: auth.currentUser?.uid,
      content
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteAnswer = async (id: number) => {
  try {
    const res = await axios.delete(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
