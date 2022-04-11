import axios from 'axios'
import { auth } from '@/firebase/firebaseConfig'

import { QuestionDetail } from '@/models/QuestionDetail'
import { Question } from '@/models/Question'
import { QuestionComment } from '@/models/QuestionDetail'
const apiUrl = 'questions'

export const getQuestionById = async (id: string): Promise<QuestionDetail> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get question')
  }
}

export const getQuestion = async (): Promise<Question[]> => {
  try {
    const res = await axios.get(`${apiUrl}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get question')
  }
}

export const searchQuestionByTags = async (what?: string, tags?: string, page?: number): Promise<Question[]> => {
  try {
    const res = await axios.get(`${apiUrl}`, {
      params: {
        what,
        tags,
        page
      }
    })
    return res.data
  } catch (error) {
    throw new Error('Failed to get question')
  }
}

export const postQuestionComment = async (questionId: number, content: string): Promise<QuestionComment> => {
  try {
    const res = await axios.post(`${apiUrl}/comments`, {
      questionId,
      userId: auth.currentUser?.uid,
      content
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const putQuestionComment = async (id: number, content: string): Promise<QuestionComment> => {
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

export const deleteQuestionComment = async (id: number) => {
  try {
    const res = await axios.delete(`${apiUrl}/comments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const postQuestion = async (title: string, content: string, tags: string[]): Promise<Question> => {
  try {
    const res = await axios.post(`${apiUrl}`, {
      userId: auth.currentUser?.uid,
      title,
      content,
      tags
    })
    return res.data
  } catch (error) {
    throw error
  }
}

