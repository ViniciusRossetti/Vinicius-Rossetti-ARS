import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Entrar} from './Entrar'

import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();



export function Cadastro ({ navigation }){



    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <LinearGradient
                colors={['#F40E03', '#F44803', '#F48603']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 612,
                }}
              />
          <Text style={{ fontSize:15,color:'#FFFFFF' ,fontWeight: 'bold', padding: 20}}>Vinícius Rossetti ARS </Text>

          <Text style={{ fontSize:30,color:'#FFFFFF' ,fontWeight: 'bold', padding: 30}}>Cadastre-se </Text>
          
          <Text style={styles.texto}>Informe seu Nome :</Text>
          <TextInput  
          style={styles.entrada}
          ></TextInput>

          <Text style={styles.texto}>Informe seu E-Mail :</Text>
          <TextInput  
          style={styles.entrada}
          ></TextInput>
          

          <Text style={styles.texto}>Digite uma Senha :</Text>
          <TextInput  
          style={styles.entrada}
          ></TextInput>

          <TouchableOpacity style={styles.ident1} 
            onPress={() => navigation.navigate('Entrar')}>
            <Text style={styles.texto}>Cadastro </Text>
          </TouchableOpacity>
          
          
                
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 300,
    height: 300,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#FAFAFA',
    padding: 8,
    margin: 10,
    width: 300,

  },
  ident1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 150,
    height: 60,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    margin: 10,
    
  },
  texto: {
    fontSize:20,
    fontWeight: 'bold',
    color:'#000000'
  },
});


