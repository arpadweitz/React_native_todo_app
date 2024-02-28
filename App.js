import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addToList = () => {
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
    todos.map((todo, idx) => {
      let bgc;
      return <View
        key={idx}
        style={{
          backgroundColor: bgc, width: '80%', maxHeight:'80%',  borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '80%'
        }}>
        <View style={styles.box}>
          <Text
            numberOfLines={1}
            style={styles.text} >{todo}
          </Text>
          <Button
            onPress={() => removeTodo(idx)}
            title="X"
            color="orange"
          />
        </View>
      </View>
    })
  )
  return (
    <SafeAreaView style={styles.container}>

      <View><Text style={styles.text2}>Shopping List</Text></View>

      <Image
        style={{
          width: 110,
          height: 110,
          marginBottom: 40,
        }}
        source={require('./assets/grocery2.png')

        }
      />

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <View style={styles.button}>
          <TouchableOpacity>
            <Button
              onPress={addToList}
              title="+"
              color='blue'
            />
          </TouchableOpacity>
        </View>
      </View>
      
      
      <ScrollView style={{ width: '80%', marginTop: 20, }}>
        {showTodos()}
      </ScrollView>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    width: '80%',
    borderWidth: 1,
    color: "white",
  },
  text: {
    fontSize: 18,
    color: 'white',
    width: '80%'
  },

  text2: {
    fontSize: 40,
    fontWeight: "100",
    color: 'white',
    width: '80%',
    marginVertical: 50
  },

  button: {
    borderColor: 'white',
    borderWidth: 3,
    width: '20%',
  },
  box: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
  }
});