import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/screens/SignIn';
import Checkins from '~/screens/Checkins';
import AnswerList from '~/screens/AnswerList';
import Answer from '~/screens/Answer';
import Question from '~/screens/Question';

export default signed => createAppContainer(
  createSwitchNavigator({
    SignIn,
    User: createBottomTabNavigator({
      Checkins,
      Answers: createStackNavigator({
        AnswerList,
        Answer,
        Question,
      }),
    }),
  }, {
    initialRouteName: signed ? 'User' : 'SignIn'
  }),
);
