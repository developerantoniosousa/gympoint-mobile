import React from 'react';

import { Container, Card, Row, Label, Date, Text } from './styles';

export default function Question({ navigation }) {
  const question = navigation.getParam('question');

  return (
    <Container>
      <Card>
        <Row>
          <Label>PERGUNTA</Label>
          <Date>{question.formattedDate}</Date>
        </Row>
        <Text>{question.question}</Text>
        <Label>RESPOSTA</Label>
        <Text>{question.answer}</Text>
      </Card>
    </Container>
  );
}
