import axios from 'axios';
import { API_KEY } from "@env";

const onRefresh = async () => {
    
    const token = "";

    try {
        const response = await axios.post(`${API_KEY}/user/refresh`, "", {
            headers: {
              "Refresh-Token": `${token}`,
            }, 
          })
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
    } catch (error) {
        console.error(error);
    }
};

export default onRefresh;