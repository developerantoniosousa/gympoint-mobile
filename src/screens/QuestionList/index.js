import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import isWhen from '~/helpers/isWhen';

import Button from '~/components/Button';
import {
  Container,
  List,
  QuestionContainer,
  QuestionHeader,
  QuestionStatus,
  QuestionDate,
  Question,
} from './styles';

function QuestionList({ navigation, isFocused }) {
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const id = useSelector(state => state.auth.id);

  async function loadQuestions() {
    const response = await api.get(`/students/${id}/help-orders`)

    const data = response.data.map(question => ({
      ...question,
      formattedDate: isWhen(question.createdAt),
    }));

    setQuestions(data);
    setLoadingQuestions(false);
  }

  useEffect(() => {
    loadQuestions();
  }, [isFocused]);

  return (
    <Container>
      <Button style={{ marginVertical: 20 }} title="Novo pedido de auxílio" onPress={() => navigation.navigate('NewQuestion')} />
      {loadingQuestions ?
        <ActivityIndicator size="small" color="#333" /> : (
          <List
            data={questions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: question }) => (
              <QuestionContainer onPress={() => { }}>
                <QuestionHeader>
                  <QuestionStatus answer={question.answer}>{question.answer ? 'Respondido' : 'Sem resposta'}</QuestionStatus>
                  <QuestionDate>{question.formattedDate}</QuestionDate>
                </QuestionHeader>
                <Question>{question.question}</Question>
              </QuestionContainer>
            )}
          />
        )}
    </Container>
  );
}

export default withNavigationFocus(QuestionList);
