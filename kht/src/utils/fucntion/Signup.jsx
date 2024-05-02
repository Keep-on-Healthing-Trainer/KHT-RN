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
        if(error.response.status == 400) {
            Alert.alert('비밀번호가 일치하지 않습니다.');
        } else if(error.response.status == 404) {
            Alert.alert('아이디를 찾을 수 없습니다.');
        } else {
            Alert.alert('로그인 오류입니다.');
        }
    }
};

export default onSignup;