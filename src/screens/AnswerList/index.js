import React from 'react';
import { View } from 'react-native';

import api from '~/services/api';
import isWhen from '~/helpers/isWhen';

import Button from '~/components/Button';
import { Container } from './styles';

export default function AnswerList({ navigation }) {
  return (
    <Container>
      <Button style={{ marginVertical: 20 }} title="Novo pedido de auxílio" onPress={() => navigation.navigate('NewQuestion')} />
      {/* {loadingCheckins ?
        <ActivityIndicator size="small" color="#333" /> : (
          <List
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: checkin }) => (
              <Checkin>
                <CheckinName>{`Check-in #${checkin.id}`}</CheckinName>
                <CheckinDate>{checkin.formattedDate}</CheckinDate>
              </Checkin>
            )}
          />
        )} */}
    </Container>
  );
}
