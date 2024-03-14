import MemberSchema from '../models/it21833366/activityMgtSystm/member'

export const getMember = async () => {
    const member = await MemberSchema.find({})
    return member
}