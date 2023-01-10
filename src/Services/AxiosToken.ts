import  axios  from 'axios';
import store from '../Redux/Store';
const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(req => {
    const token = store.getState().userReducer.user.token;
    req.headers = { 'authorization': token }

    return req;
})


export default tokenAxios;