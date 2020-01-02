import React from 'react';
import styled from 'styled-components/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/screens/SignIn';
import Checkins from '~/screens/Checkins';
import QuestionList from '~/screens/QuestionList';
import Question from '~/screens/Question';
import NewQuestion from '~/screens/NewQuestion';

import logoHorizontal from '~/assets/images/logo-horizontal.png';
const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 116px;
`;

export default signed => createAppContainer(
  createSwitchNavigator({
    SignIn,
    User: createBottomTabNavigator({
      Dashboard: {
        screen: createStackNavigator({
          Checkins,
        }, {
          headerLayoutPreset: 'center',
          defaultNavigationOptions: {
            headerTintColor: '#EE4E62',
            headerTitle: <Logo source={logoHorizontal} />
          }
        }),
        navigationOptions: {
          title: 'Check-ins'
        }
      },
      Answers: {
        screen: createStackNavigator({
          QuestionList,
          Question,
          NewQuestion,
        }, {
          headerLayoutPreset: 'center',
          defaultNavigationOptions: {
            headerTintColor: '#EE4E62',
            headerTitle: <Logo source={logoHorizontal} />
          }
        }),
        navigationOptions: {
          title: 'Pedir ajuda'
        }
      }
    }, {
      tabBarOptions: {
        activeTintColor: '#EE4E62',
        inactiveTintColor: '#999999',
        labelStyle: {
          fontFamily: 'Roboto-Regular',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 16,
        }
      }
    }),
  }, {
    initialRouteName: signed ? 'User' : 'SignIn'
  }),
);
