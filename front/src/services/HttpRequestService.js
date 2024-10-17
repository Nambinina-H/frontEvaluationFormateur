import axios from 'axios';

const BASE_URL = "http://192.168.1.137:8000/";


export const postRequest = (url, data) => {
    let options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    return axios.post(
        `${BASE_URL}${url}`,
        data,
        options
    );
}


export const getRequest = (url) => {
    let options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    return axios.get(
        `${BASE_URL}${url}`,
        options
    );
}

export const deleteRequest = (url, param1, param2) => {
    let options = {
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return axios.delete(
        `${BASE_URI}${url}/${param1}/${param2}`, 
        options
    );
}



export const getOneRequest = (url,id) => {
    let options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    return axios.get(
        `${BASE_URI}${url}/${id}`,
        options
    );
}

export const getOneVehicle = (url,id, Owner_Id) => {
    let options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    return axios.get(
        `${BASE_URI}${url}/${id}/${Owner_Id}`,
        // `${BASE_URI}Get_One_Vehicle/65158b8d1002865d7221e4bb/650d480053fc3825cc3151a5`,
        options
    );
}

export const putRequest = (url, data) => {
    let options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios.put(
        `${BASE_URI}${url}`,
        data,
        options
    );
}

export const getCarType = (url) => {
    let options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    return axios.get(
        `${BASE_URI}${url}`,
        options
    );
}

// const httpRequest = (url, data, isAuth, isFile = false) => {
//     let options = {
//         headers: {
//             'Content-Type' : !isFile ? 'application/json' : 'multipart/form-data'
//         }
//     };
//     if(isAuth) {
//         const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//         options.headers['Authorization'] = `Bearer ${userDetails.token}`
//     }
//     return axios.post(
//         `${BASE_URL}${url}`,
//         data,s
//         options
//     );
// }

// export const httpGetRequest = (url, isAuth) => {
//     let options = {
//         headers: {
//             'Content-Type' : 'application/json'
//         }
//     };
//     if(isAuth){
//         const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//         options.headers['Authorization'] = `Bearer ${userDetails.token}`
//     }
//     return axios.get(
//         `${BASE_URL}${url}`,
//         options
//     );
// }

export default httpRequest;