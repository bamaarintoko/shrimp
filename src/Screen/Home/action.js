import Api from "../../Utils/Api";

export function actGetShrimp(params) {
    return dispatch =>{
        Api.GET('shrimp_prices',params)
            .then((resp)=>{
                dispatch({
                    type :'GET_SHRIMP',
                    status_get : true,
                    data : resp.data,
                    message : 'success'
                })
                // console.log(resp)
            }).catch((err)=>{
                dispatch({
                    type: 'GET_SHRIMP',
                    status_get: false,
                    data: [],
                    message: err.message
                })
                // console.log(err.message)
        })
    }
}