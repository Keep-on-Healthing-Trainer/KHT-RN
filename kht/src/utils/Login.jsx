import axios from 'axios';
import { API_KEY } from "@env";

const onLogin = async ( data ) => {
    try {
        const response = await axios.post(`${API_KEY}/user/login`, {
            userId: data.userId,
            password: data.password
        });
        console.log("받은 값:", response);
        console.log("로그인에 성공하였습니다.");
    } catch (error) {
        console.error("로그인 ERROR :", error);
    }
};