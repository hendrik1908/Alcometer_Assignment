import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
      },

      scrollView: {
        marginHorizontal:20,
      },
    
      fields: {
        margin: 10,
      },

      fieldsMiddle: {
        margin: 10,
        justifyContent: 'center',
      },

      button: {
        margin: 10,
      },
    
      normal: {
        flex: 1,
        textAlign:'left',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 1,
      },
    
      result: {
        fontWeight: 'bold',
        fontSize: 25,
      },
    
      radio: {
        marginTop: 10,
        marginBottom: 10,
      },
    
      resultLow:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      },
    
      resultMiddle:{
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      },
    
      resultHigh:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      },

      header: {
        flex: 1,
        color: '#1e90ff',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        width: '100%',
        textAlign: 'center',
      },

      footer: {
        marginTop: 20,
        backgroundColor: '#1e90ff',
        flexDirection: 'row',
      },

      author: {
        color: 'white',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
      },
});