import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const QuestionContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  background: #FFF;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const QuestionStatus = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.answer ? '#42CB59' : '#999'};
`;

export const QuestionDate = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #666;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3
})`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: #666;
`;


