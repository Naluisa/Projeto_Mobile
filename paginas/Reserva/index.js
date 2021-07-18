import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

function Reserva(){
return(
    <ScrollView>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }} defaultValue="You can type in me"/>
     </ScrollView>
    
)
}

export default Reserva;