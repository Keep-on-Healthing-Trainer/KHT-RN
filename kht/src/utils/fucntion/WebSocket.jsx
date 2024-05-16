import axios from 'axios';
import { SOCKET_KEY } from "@env";
import { Alert } from 'react-native';

const onWeb = async ( sessionId, id ) => {
    const webSocket = new WebSocket(`${SOCKET_KEY}`);
    const message = {
        messageType: "ENTER",
        sessionId: sessionId,
        senderId: id
    };

    webSocket.onopen = () => {
        console.log("WebSocket is open");
        webSocket.send(JSON.stringify(message));
    };

    webSocket.onmessage = () => {
        webSocket.close();
        console.log('정상적으로 작동했습니다.');
    }

    webSocket.onerror = (error) => {
        webSocket.close();
        console.log(error);
    };
};

export default onWeb;