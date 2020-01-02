import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Button, ButtonText } from './styles';

export default function ButtonWrapper({ loading, title, onPress, ...rest }) {
  return (
    <Button onPress={onPress} {...rest}>
      {loading ? <ActivityIndicator size="small" color="#FFF" /> : <ButtonText>{title}</ButtonText>}
    </Button>
  );
}

Button.defaultProps = {
  loading: false,
}

Button.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
