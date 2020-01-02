import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Checkin = styled.View`
  height: 45px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #FFF;
  padding: 15px;
`;

export const CheckinName = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444;
`;

export const CheckinDate = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;

