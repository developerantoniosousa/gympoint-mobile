import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  width: 100%;
  height: 45px;
  background: #EE4E62;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #FFF;
`;
