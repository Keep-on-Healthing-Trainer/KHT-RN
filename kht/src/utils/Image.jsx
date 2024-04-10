import axios from 'axios';
import { API_KEY } from "@env";

const onImage = async ( data ) => {
    const accessToken = '';

    try {
        const response = await axios.post(`${API_KEY}/user/user/modifyProfile/${data.userId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }, {
            "image" : data.image
        });
        console.log("받은 값:", response);
        console.log("이미지 업로드에 성공하였습니다.");
    } catch (error) {
        console.error("이미지 업로드 ERROR :", error);
    }
};