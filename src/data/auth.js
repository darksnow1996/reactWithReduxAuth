import api from "../api"
import store from "../redux/store"

async function register(data){
    try{
        let response = await api.post("register",{
            ...data
        });
      // console.log(response)
        return response.data;
    }
    catch(error){
      //  return error.response.data.message
        throw new Error(error.response.data.message)
    }
 
}


async function login(data){
    try{
        let response = await api.post('login', {
            ...data
        });
        return response.data
    }
    catch(error){
      // console.log(error.response.data)
        throw new Error(error.response.data.message)
    }
}

async function logout(){
    try{
        let response = await api.post('logout',null, setTokenConfig())
    }
    catch(error){
        throw new Error(error)
    }
}

async function checkStatus(){
    try{
       
        let response = await api.get('auth/status',setTokenConfig())
        return response.data
    }
    catch(error){
        //console.log(store.getState().auth.token)
        throw new Error(error.response.data.message)    
    }
}

function setTokenConfig(){
    const {token} = store.getState().auth
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

        return config
    }



export {
    register,
    login,
    logout,
    checkStatus, 
}