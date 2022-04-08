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

export type QuestionBase = Question & {
    TagsOnQuestions: {
        Tag: {
            name: string;
        };
    }[]
    _count: {
        Answer: number;
    }
    User: {
        uid: string;
        displayName: string;
        photoURL: string;
    }

}

export const getQuestionById = async (id: string): Promise<QuestionDetail> => {
    try {
        const res = await axios.get(`${apiUrl}/${id}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get question')
    }
}

export const getQuestion = async (): Promise<QuestionBase[]> => {
    try {
        const res = await axios.get(`${apiUrl}`)
        return res.data
    } catch (error) {
        throw new Error('Failed to get question')
    }
}

export const searchQuestionByTags = async (what?: string, tags?: string, page?: number): Promise<QuestionBase[]> => {
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
