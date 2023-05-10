import axios from 'axios'
import mock from "../../services/mocks";


export const fetchListData = (page) => {
    return async function (dispatch, getState){
        try{
            const response = await axios.get(`/data/${page}`);
            if(response.data && response.data?.page){
                dispatch({type : 'setTitle', value : response?.data?.page.title})
                dispatch({type : 'setContentList', value : response?.data?.page['content-items']?.content})
            }
        }catch(err){
        }
    }
}