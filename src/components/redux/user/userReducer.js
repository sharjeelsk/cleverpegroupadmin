const initialStateUser={
    user:null,
    userInfo:null,
    orderId:"",
    merchant:{},
    emi:""
}

const userReducer = (state=initialStateUser,action)=>{
    switch(action.type){
        case 'SET_USER':
            return {...state,user:action.payload}
        case 'STORE_USERINFO':
            return {...state,userInfo:action.payload}
        case "DELETE_USER":
            return initialStateUser
        case "STORE_ORDER_ID":
            return {...state,orderId:action.payload}
        case "STORE_MERCHANT":
            return {...state,merchant:action.payload}
        case "STORE_EMI":
            return {...state,emi:action.payload}
        default:
            return state;
    }
}

export default userReducer;