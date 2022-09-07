import axios from 'axios'


export const setUser = (user)=>{
    return {
        type:"SET_USER",
        payload:user
    }
}
export const storeUserInfo = (info)=>{
    return {
        type:"STORE_USERINFO",
        payload:info
    }
}

export const getUserInfo = (token)=>{
    return async (dispatch)=>{
        return  await axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/user/single`,{headers:{token}})
        .then(res=>{
            dispatch(storeUserInfo(res.data.result))
        })
        .catch(err=>{
        })
    }
}

export const storeMerchant = (merchant)=>{
    return {
        type:"STORE_MERCHANT",
        payload:merchant
    }
}


export const deleteUser =()=>{
    return {
        type:"DELETE_USER"
    }
}

export const storeOrderId = (id)=>{
    return {
        type:"STORE_ORDER_ID",
        payload:id
    }
}

export const storeEmi = (emi)=>{
    return {
        type:"STORE_EMI",
        payload:emi
    }
}

