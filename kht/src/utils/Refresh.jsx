import axios from 'axios';
import { API_KEY } from "@env";

const onRefresh = async () => {
    
    // const refreshToken = "";

    // try {
    //     const response = await axios.post(`${API_KEY}/user/refresh`, {
    //         headers: {
    //             Authorization: `Bearer ${refreshToken}`
    //         }
    //     });
    //     console.log("받은 값:", response);
    //     console.log("재발급에 성공하였습니다.");
    // } catch (error) {
    //     console.error("재발급 ERROR :", error);
    // }
};

export default onRefresh;