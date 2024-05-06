import axios from 'axios';
import { API_KEY } from "@env";
import { Alert } from 'react-native';
import * as SecureStore from "expo-secure-store";

const onRanking = async () => {
    const result = await SecureStore.getItemAsync('token')
    const token = result && JSON.parse(result);

    try {
        const response = await axios.get(`${API_KEY}/rank`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 200) {
            console.log("랭킹 정보 가져오기에 성공하였습니다.");
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 403) {
              Alert.alert('유저를 찾을 수 없습니다.');
            } else {
              console.error(error);
              Alert.alert('랭킹 정보 가져오기 오류입니다.');
            }
        } else {
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onRanking;