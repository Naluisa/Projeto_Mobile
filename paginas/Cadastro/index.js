import React from 'react';

import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';

function Cadastro() {
  return(
    <KeyboardView>
      <Container>
        <Title>NOSSOCONDOMINIO</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="Nome Completo"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Nome de Usuário"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Nº do Apartamento"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
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

export default Cadastro;