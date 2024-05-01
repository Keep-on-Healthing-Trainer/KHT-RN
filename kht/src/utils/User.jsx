import axios from 'axios';
import { API_KEY } from "@env";

const onUser = async () => {
    const token = "";

    try {
        const response = await axios.get(`${API_KEY}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error("유저 정보 조회 ERROR :", error);
    }
};

export default onUser;