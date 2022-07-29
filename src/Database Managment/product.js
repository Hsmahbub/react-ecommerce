import { publicRequest } from "../requestMethod";
export const getProduct = async (callback) => {
    const { data } = await publicRequest.get('/products')
    callback(data)
}
