import axios from 'axios';
import { API_KEY } from "@env";

const onChart = async ( data ) => {
    const accessToken = '';

    try {
        const response = await axios.get(`${API_KEY}/exercise/user?page=${data.page}&size=${data.size}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("받은 값:", response);
        console.log("그래프에 성공하였습니다.");
    } catch (error) {
        console.error("그래프 ERROR :", error);
    }
};