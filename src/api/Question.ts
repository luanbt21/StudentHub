import axios from 'axios'
import { Answer, AnswerComment, AnswerVoter, Question, QuestionComment, QuestionVoter, Tag, User } from '@/model/prisma'

const apiUrl = 'questions'

export type QuestionDetail = Question & {
  User: User
  Answer: (Answer & {
    AnswerComment: AnswerComment[]
    AnswerVoter: AnswerVoter[]
  })[]
  QuestionComment: QuestionComment[]
  QuestionVoter: QuestionVoter[]
  TagsOnQuestions: { Tag: Tag }[]
}

export const getQuestionById = async (id: string): Promise<QuestionDetail> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to get question')
  }
}
