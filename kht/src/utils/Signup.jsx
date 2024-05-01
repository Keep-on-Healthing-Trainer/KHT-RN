import axios from 'axios';
import { API_KEY } from "@env";

const onSignup = async ( data ) => {
    try {
        const response = await axios.post(`${API_KEY}/user/signup`, {
            "userId" : data.userId,
            "name" : data.name,
            "phoneNumber" : data.phoneNumber,
            "password" : data.password
        });
        if(response.status == 201) {
            console.log("회원가입에 성공하였습니다.");
        }
    } catch (error) {
        console.error("회원가입 ERROR :", error);
    }
};

export default onSignup;