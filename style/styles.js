import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      fields: {
        margin: 10,
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
      },
    
      resultMiddle:{
        color: 'orange',
        fontWeight: 'bold',
      },
    
      resultHigh:{
        color: 'red',
        fontWeight: 'bold',
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