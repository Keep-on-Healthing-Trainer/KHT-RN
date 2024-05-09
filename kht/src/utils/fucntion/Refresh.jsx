import axios from 'axios';
import { API_KEY } from "@env";
import * as SecureStore from "expo-secure-store";

const onRefresh = async () => {
  const result = await SecureStore.getItemAsync('token');
  const token = result && JSON.parse(result);

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