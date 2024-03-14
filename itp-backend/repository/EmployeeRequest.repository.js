import EmployeeRequestModel from '../models/EmployeeRequest';

module.exports.saveEmployeeRequest = async (body) => {
    const EmployeeRequestModelToSave = new EmployeeRequestModel(body)
    const saveResult = await EmployeeRequestModelToSave.save()
    if(!saveResult){
        throw new Error("Employee request not saved")
    }
    return saveResult;
}   
