import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Button from '~/components/Button'
import { Container, TextArea } from './styles';

export default function NewQuestion({ navigation }) {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = useSelector(state => state.auth.id);

  async function handleSubmit() {
    setLoading(true);
    await api.post(`/students/${id}/help-orders`, { question });

    navigation.goBack();
  }

  return (
    <Container>
      <TextArea placeholder="Inclua seu pedido de auxílio" value={question} onChangeText={setQuestion} />
      <Button loading={loading} style={{ marginVertical: 20 }} title="Enviar pedido" onPress={handleSubmit} />
    </Container>
  );
}
