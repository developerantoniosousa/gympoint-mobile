import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistorReducer = persistReducer({
    key: 'gympoint',
    storage: AsyncStorage,
    whitelist: ['auth']
  }, reducers);

  return persistorReducer;
}
