import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './style/styles';
import Footer from './components/Footer';
import Header from './components/Header';
import SelfmadeRadioButton from './components/selfmadeRadioButton';
import stylesR from './style/radioButtonStyle';


export default function App() {

  const[bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
  const[weight, setWeight] = useState(''); 
  const[bottles, setBottles] = useState(1);
  const[time, setTime] = useState(1);
  const[gender, setGender] = useState('male');

  const checkWeightInput = () => {
    if (weight == '' || weight == 0) {
      alert('Please enter weight!');
      return;
    } else {
      setWeight(weight);
    }
  }

  const amount=Array();
  amount.push({label: '1 bottle', value: 1});
  amount.push({label: '2 bottles', value: 2});
  amount.push({label: '3 bottles', value: 3});
  amount.push({label: '4 bottles', value: 4});
  amount.push({label: '5 bottles', value: 5});
  amount.push({label: '6 bottles', value: 6});
  amount.push({label: '7 bottles', value: 7});
  amount.push({label: '8 bottles', value: 8});
  amount.push({label: '9 bottles', value: 9});
  amount.push({label: '10 bottles', value: 10});

  const hours=Array();
  hours.push({label: '1 hour', value: 1});
  hours.push({label: '2 hours', value: 2});
  hours.push({label: '3 hours', value: 3});
  hours.push({label: '4 hours', value: 4});
  hours.push({label: '5 hours', value: 5});
  hours.push({label: '6 hours', value: 6});
  hours.push({label: '7 hours', value: 7});
  hours.push({label: '8 hours', value: 8});
  hours.push({label: '9 hours', value: 9});
  hours.push({label: '10 hours', value: 10});

  const genders=Array();
  genders.push({label: 'Male', value: 'male'});
  genders.push({label: 'Female', value: 'female'});

  function calculate(){
    checkWeightInput();

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight.replace(',','.') / 10;
    const restGrams = grams - burning * time;

    let result = 0;
    if(gender === 'male'){
      result = restGrams / (weight.replace(',','.') * 0.7);
    }
    else {
      result = restGrams / (weight.replace(',','.') * 0.6);
    }

    if(result > 0){
      setBloodAlcoholLevel(result);
    } 
    else{
      let negativeResult = 0;
      setBloodAlcoholLevel(negativeResult);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.fields}>
            <Text style={styles.normal}>Weight</Text>
            <TextInput style={styles.textInput} value={weight} onChangeText={text => setWeight(text)} placeholder='in kilograms' keyboardType='decimal-pad'></TextInput>
          </View>
          <View style={styles.fields}>
            <Text style={styles.normal}>Bottles</Text>
            <Picker
              onValueChange={(itemValue) => setBottles(itemValue)}
              selectedValue={bottles}>
                {amount.map((amount, index) => (
                    <Picker.Item key={index} label={amount.label} value={amount.value} />
                  ))
                }
            </Picker>
          </View>
          <View style={styles.fields}>
            <Text style={styles.normal}>Time</Text>
            <Picker
              onValueChange={(itemValue) => setTime(itemValue)}
              selectedValue={time}>
                {hours.map((hours, index) => (
                    <Picker.Item key={index} label={hours.label} value={hours.value} />
                  ))
                }
            </Picker>
          </View>
          <View style={styles.fields}>
            <Text style={styles.normal}>Gender</Text>
            <View style={stylesR.wrapperComponent}>
              <SelfmadeRadioButton propertie={genders} onChange={setGender}/>
            </View>
          </View>
          <View style={styles.fields}>    
            <Text style={ [bloodAlcoholLevel < 0.20 ? styles.resultLow : bloodAlcoholLevel < 0.50 ? styles.resultMiddle : styles.resultHigh]}>
                {bloodAlcoholLevel.toFixed(2)}
            </Text>
            <Button style={styles.button} onPress={calculate} title="CALCULATE" />
          </View>
          <Footer />
          <StatusBar style="auto" /> 
      </ScrollView>
    </View>
  );
}
