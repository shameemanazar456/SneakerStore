import { serverURL } from "./BaseURL";
import { commonAPI } from "./CommonAPI";

//get a userdtail with id
export const getCartDetailsApi = async (id) => {
  return await commonAPI("GET", `${serverURL}/user/${id}`, "");
};
//get All userdetails
export const getUserDetailsApi = async () => {
  return await commonAPI("GET", `${serverURL}/user`, "");
};

//delete item from cart/wishlist of a user

export const deleteCartItemApi = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/user/${id}`, reqBody);
};

//api to get products details
export const getProductsApi = async () => {
  return await commonAPI("GET", `${serverURL}/products`, "");
};
