import api from "../api"

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
        let response = await api.post('logout')
    }
    catch(error){
        throw new Error(error)
    }
}

export {
    register,
    login,
    logout
}