import {initialGet} from "../Utils/initialState";

export function redRegions(state = initialGet, action) {
    switch (action.type) {
        case 'GET_REGIONS':
            return {
                status : true,
                status_get : action.status_get,
                data : action.data,
                message : action.message
            }
        case 'GET_REGIONS_RESET':
            return {
                status: false,
                status_get: false,
                data: [],
                message: ""
            }
        default :
            return state;
    }
}