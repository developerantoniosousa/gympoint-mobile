import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top'
})`
  height: 300px;
  background: #FFF;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
`;
