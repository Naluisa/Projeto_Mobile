import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

  const [email,setEmail] = useState(null)
  const [senha,setSenha] = useState(null)
  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text>Login</Text>
      <Input 
      placeholder="Email"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={Value => setEmail(Value)}
      keyboardType="email-address"
      />
      <Input 
      placeholder="Senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={Value => setSenha(Value)}
      secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
          title="Entrar"
          onPress={() => entrar()}
          />    
          </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer:{
    backgroundColor: "white"
  }
})

