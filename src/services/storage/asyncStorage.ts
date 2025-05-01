import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageI } from "./implementation";

export const asyncStorage: StorageI = {
  getItem: async (key) => {
    const data = await AsyncStorage.getItem(key);
    if (data == null) {
      return Promise.resolve(null);
    }
    const result = JSON.parse(data);
    return result;
  },
  setItem: async (key, value) => {
    const valueString = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueString);
  },
  removeItem: async (key) => await AsyncStorage.removeItem(key),
  clear: async () => await AsyncStorage.clear(),
};
