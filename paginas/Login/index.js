import { styles } from 'ansi-colors';
import React, { useState } from 'react';
import Principal from '../Principal/Principal';

import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';


function Login() {

  const[email, setEmail] = useState(null)
  const[senha, setSenha] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }

  return(
    <KeyboardView>
      <Container>
        <Title>NOSSOCONDOMINIO</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="@        analuisa@teste.com.br"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="*****"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>
            LOGIN
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
    
  )
}

export default Login;