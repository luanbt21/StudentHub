import { RegisterTutorMain } from '@/models/RegisterForm'
import { auth } from '@/firebase/firebaseConfig'
import axios from 'axios'

const apiUrl = 'registerform'

export const getRegisterTutorById = async (id: string): Promise<RegisterTutorMain> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get registerform')
  }
}

export const getRegisterTutorByuserId = async (id: string): Promise<RegisterTutorMain> => {
  try {
    const res = await axios.get(`${apiUrl}/user/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get registerform')
  }
}

export const getRegisterTutors = async (): Promise<RegisterTutorMain[]> => {
  try {
    const res = await axios.get(`${apiUrl}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get registerform')
  }
}

export const postRegisterTutor = async (
  experiences: string,
  education: string,
  aboutyou: string,
  linkedin: string,
  status: string
): Promise<RegisterTutorMain> => {
  try {
    const res = await axios.post(`${apiUrl}`, {
      userId: auth.currentUser?.uid,
      experiences,
      education,
      aboutyou,
      linkedin,
      status
    })
    return res.data
  } catch (error) {
    throw error
  }
}
