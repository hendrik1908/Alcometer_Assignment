import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SelfmadeRadioButton from './selfmadeRadioButton';
import styles from '../style/radioButtonStyle';


const selection = [
  {
		key: 'male',
		text: 'Male',
	},
	{
		key: 'female',
		text: 'Female',
	},
];


export default class RadioButtonComponent extends Component {

  render() {
    return (
      <View style={styles.wrapperComponent}>
        <SelfmadeRadioButton propertie={selection} />
      </View>
    );
  }
}
