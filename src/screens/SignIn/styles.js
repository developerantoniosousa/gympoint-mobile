import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 80px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  font-family: 'Roboto-Regular';
  height: 45px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  margin: 20px 0 15px;
  padding: 0 10px;
`;
