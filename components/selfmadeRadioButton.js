import React, { Component, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text  } from 'react-native';
import styles from '../style/radioButtonStyle';

export default class SelfmadeRadioButton extends Component {
	state = {value: null,};
	
	
	render() {
		const { propertie } = this.props;
		const { value } = this.state;

		return (
			<View>
				{propertie.map(result => {
					return (
						<View key={result.key} style={styles.wrapper}>
							<Text style={styles.text}>{result.text}</Text>
							<TouchableOpacity
								style={styles.style}
								onPress={() => {
									this.setState({
										value: result.key,
									});
									this.props.onChange(value);
								}}>
                                  {value === result.key && <View style={styles.selected} />}
							</TouchableOpacity>
						</View>
					);
				})}	
			</View>
		);
	}
}
