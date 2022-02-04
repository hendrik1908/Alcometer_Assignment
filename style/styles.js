import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      },

      scrollView: {
        marginHorizontal:20,
      },
    
      fields: {
        margin: 10,
      },

      fieldsMiddle: {
        margin: 10,
        alignItems: 'center',
      },

      button: {
        margin: 10,
        justifyContent: 'center',
      },
    
      normal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
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
      },
    
      resultMiddle:{
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
      },
    
      resultHigh:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
      },

      header: {
        flex: 1,
        color: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
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