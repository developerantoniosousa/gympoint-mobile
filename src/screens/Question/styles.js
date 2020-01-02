import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Card = styled.View`
  background: #FFF;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
  color: #444;
`;

export const Date = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #666;
`;

export const Text = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 20px;
  color: #666;
`;

