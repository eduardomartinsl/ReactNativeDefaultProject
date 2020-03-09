import AsyncStorage from '@react-native-community/async-storage'

//recupera informações
(async () => {
    try{
        getData = async () => {
          try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if(value !== null) {
              // value previously stored
            }
          } catch(e) {
            // error reading value
          }
        }
      } catch(e){
      
      }finally{
      
      }
})();


//Guarda informações
//Stored Value pode ser utilizado com JSON.stringify
storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'stored value')
    } catch (e) {
      // saving error
    }
  }

