import InternSchema from '../models/IT21833298/Survey/intern'

export const getsurveyM = async () => {
    const survey = await InternSchema.find({})
    return survey
}