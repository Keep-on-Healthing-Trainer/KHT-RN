import EncryptedStorage from 'react-native-encrypted-storage';
    
export const getStorage = async (key) => {
    const result = await EncryptedStorage.getItem(key);
    return result && JSON.parse(result);
  };
  
  export const setStorage = async (key, value) => {
    return await EncryptedStorage.setItem(key, JSON.stringify(value));
  };
  
  export const removeStorage = async (key) => {
    return await EncryptedStorage.removeItem(key);
  };