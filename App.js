import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addToList = () =>{
      const temp = [...todos] 
      temp.push(text)
      setTodos([...temp])
      setText('')
  }

  const removeTodo = (idx) => {
      const temp = [...todos]
      temp.splice(idx, 1)
      setTodos([...temp])
  }

  const showTodos = () => (
      todos.map((todo, idx)=>{
        let bgc;
        // idx % 2 !=0 ? bgc = "#ddd" : bgc = 'transparent'
        return <View 
                  key={idx} 
                  style={{backgroundColor:bgc,width:'80%',borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      width:'80%'}}>
                <View style={styles.box}>
                    <Text
                      numberOfLines={1} 
                      style={styles.text} >{todo}
                    </Text>
                    <Button
                        onPress={( ) => removeTodo(idx)}
                        title="X"
                        color="pink"
                    />
                 </View>
              </View>
        })
  )
  return (
        <SafeAreaView style={styles.container}>
            <View style= {styles.box}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setText(text)}
                    value={text}
                />
                <View style ={styles.button}>
                    <Button
                        onPress={addToList}
                        title="Add"
                        color='#2196F3'  
                        touchSoundDisabled='false'              />
                </View>
            </View>
              {showTodos()}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 30,
    // width:'100%', 
    borderColor: 'white', 
    width:'80%',
    borderWidth: 1,  
    color:"white",
  
  },
  text:{
    fontSize:20,
    color:'white',
    width:'80%'
  },
  button:{
    borderColor:'white',
    borderWidth:1,
    width:'20%',
    
  },
  box:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',
    alignItems:'center'
  }
});