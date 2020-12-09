import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export function Entrar ({navigation}){

    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <LinearGradient
                colors={['#8B8B7A', '#CDCDB4', '#EEEED1']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 612,
                }}
              />
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 30 }}>
          <Text style={{ fontSize:22,color:'#FFFAFA' ,fontWeight: 'bold', padding: 30}}>Entrada realizado </Text>

            
          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
          <Image source={require('../../assets/ok.png')} />
          </View>
        
          
          </View>
          
            
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
    borderRadius: 4,
    alignItems: "center",
  },
});
