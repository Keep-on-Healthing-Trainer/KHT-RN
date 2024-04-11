import axios from 'axios';
import { API_KEY } from "@env";

const onSignup = async ( data ) => {
    console.log(data);
    // try {
    //     const response = await axios.post(`${API_KEY}/user/signup`, {
    //         "userId" : data.userId,
    //         "password" : data.password,
    //         "userName" : data.userName,
    //         "phoneNumber" : data.phoneNumber
    //     });
    //     console.log("받은 값:", response);
    //     console.log("회원가입에 성공하였습니다.");
    // } catch (error) {
    //     console.error("회원가입 ERROR :", error);
    // }
};

export default onSignup;