import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { REACTOTRON_IP } from 'react-native-dotenv';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'Gympoint', host: REACTOTRON_IP })
    .use(networking())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
