import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"


// api for register user 
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/userRegisterDetails`,reqBody)
}
export const getAllUserApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/userRegisterDetails`,'')
}