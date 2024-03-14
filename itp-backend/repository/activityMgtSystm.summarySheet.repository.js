import SummarySheetSchema from '../models/it21833366/activityMgtSystm/summarySheet'

export const getSummary = async () => {
    const summarySheet = await SummarySheetSchema.find({})
    return summarySheet
}