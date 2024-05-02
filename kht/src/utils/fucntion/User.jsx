import axios from 'axios';
import { API_KEY } from "@env";
import React, { useEffect, useState } from 'react';

const onUser = async () => {
    const [ token, setToken ] = useState();

    try {
        const response = await axios.get(`${API_KEY}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('성공');
    } catch (error) {
        console.error("유저 정보 조회 ERROR :", error);
    }
};

export default onUser;