import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

import Button from '~/components/Button';
import { Container, Logo, Input } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState(null);

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    if (!id) return;

    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <Input
        placeholder="Informe seu ID de cadastro"
        keyboardType="numeric"
        returnKeyType="send"
        onEndSubmitEditing={handleSubmit}
        value={id}
        onChangeText={setId}
      />
      <Button loading={loading} title="Entrar no sistema" onPress={handleSubmit} />
    </Container>
  );
}
