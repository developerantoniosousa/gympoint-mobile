import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import isWhen from '~/helpers/isWhen';

import Button from '~/components/Button';
import { Container, List, Checkin, CheckinName, CheckinDate } from './styles';

export default function Checkins() {
  const [checkins, setCheckins] = useState([]);
  const [loadingCheckins, setLoadingCheckins] = useState(true);

  const id = useSelector(state => state.auth.id);

  async function loadCheckins() {
    const response = await api.get(`/students/${id}/checkins`)

    const data = response.data.map(checkin => ({
      ...checkin,
      formattedDate: isWhen(checkin.createdAt),
    }));

    setCheckins(data);
    setLoadingCheckins(false);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleAddChekin() {
    try {
      const response = await api.post(`/students/${id}/checkins`);

      setCheckins([
        {
          ...response.data,
          formattedDate: isWhen(response.data.createdAt)
        },
        ...checkins,
      ]);
    } catch (err) { }
  }

  return (
    <Container>
      <Button style={{ marginVertical: 20 }} title="Novo check-in" onPress={handleAddChekin} />
      {loadingCheckins ?
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
        )}
    </Container>
  );
}
