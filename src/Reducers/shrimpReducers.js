import {initialGet} from "../Utils/initialState";

export function redShrimp(state = initialGet, action) {
    switch (action.type) {
        case 'GET_SHRIMP':
            return {
                status: true,
                status_get: action.status_get,
                data: action.data,
                message: action.message
            }
        case 'GET_SHRIMP_RESET':
            return {
                status: false,
                status_get: false,
                data: [],
                message: ''
            }
        default :
            return state
    }
}

export function redDetailShrimp(state = initialGet, action) {
    switch (action.type) {
        case 'GET_DETAIL_SHRIMP':
            return {
                status: true,
                status_get: action.status_get,
                data: action.data,
                message: action.message
            }
        case 'GET_DETAIL_SHRIMP_RESET':
            return {
                status: false,
                status_get: false,
                data : [],
                message : action.message
            }
        default :
            return state
    }
}