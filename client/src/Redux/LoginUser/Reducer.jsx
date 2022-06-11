import { LOGIN_SUCCESS , LOGIN_FAILURE , LOGOUT , ADMIN_SUCCESS, ADMIN_FAIL } from "./Action";

const initState = {
    data : [],
    isAuth : false,
    isError : false,
    isAdmin: false,
    admin:[] 
}

export const userReducer = (store = initState , {type,payload}) => {
    switch(type){
        case LOGIN_SUCCESS:
            return {...store, isAuth:true, isError:false, data:payload}
        
        case LOGIN_FAILURE:
            return{...store, isAuth:false, isError:false , data:[] , isAdmin:false, admin:[] }

        case LOGOUT:
            return{...store, isAuth:false, isError:false , data:[] , isAdmin:false, admin:[]}

        case ADMIN_SUCCESS:
            return{...store, isAuth:false, isError:false , data:[] , isAdmin:true, admin:payload } 

        case ADMIN_FAIL:
            return{...store, isAuth:false, isError:false , data:[] , isAdmin:false, admin:[] }

        default:
            return store
    }
}