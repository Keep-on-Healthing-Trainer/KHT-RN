import axios from 'axios';
import { API_KEY } from "@env";
import { Alert } from 'react-native';

const onImage = async ( file, userId ) => {
    const formData = new FormData();
    formData.append('image', file);

    try{
        const response = await axios.post(`${API_KEY}/user/modifyProfile/${userId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            transformRequest: formData => formData,
            //transformRequest: (data, headers) => {
            //    return data;
            //}
        });
        
        console.log(response.data);
        if(response.status == 201) {
            console.log("이미지 업로드에 성공했습니다.");
            return true;
        }

    } catch (error) {
        if (error.response) {
            if (error.response.status == 404) {
              Alert.alert('유저를 찾을 수 없습니다.');
            } else {
              Alert.alert('이미지 업로드 오류입니다.');
            }
        } else {
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onImage;