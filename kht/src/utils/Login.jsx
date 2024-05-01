import axios from 'axios';
import { API_KEY } from "@env";

const onLogin = async ( data, state ) => {
    try {
        const response = await axios.post(`${API_KEY}/user/login`, {
            userId: data.userId,
            password: data.password
        });
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
    } catch (error) {
        console.error(error);
    }
};

export default onLogin;