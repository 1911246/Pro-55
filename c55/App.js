import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton1 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Samba.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={{
         marginLeft:50,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         witdh: 50,
         height: 50,
         borderRadius: 100,
         marginTop:100,
         marginRight:50,
         backgroundColor:'orange'
        }}
        onPress={this.playSound}>
        <Text
          style={{
             fontWeight:'bold',
             fontSize:20
          }}>
          Sound1
        </Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton2 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.davesdrumworld.com/audio/Drumloops2/151_rome_proofmp3.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={{
         marginLeft:50,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         witdh: 50,
         height: 50,
         borderRadius: 100,
         marginTop:100,
         marginRight:50,
         backgroundColor:'lightgreen'
        }}
        onPress={this.playSound}>
        <Text
          style={{
         fontWeight:'bold',
         fontSize:20
          }}>
          Sound2
        </Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton3 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Fill-in%2016%20Beat(3).mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={{
         marginLeft:50,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         witdh: 50,
         height: 50,
         borderRadius: 100,
         marginTop:100,
         marginRight:50,
         backgroundColor:'lightblue'
        }}
        onPress={this.playSound}>
        <Text
          style={{
         fontWeight:'bold',
         fontSize:20
          }}>
          Sound3
        </Text>
      </TouchableOpacity>
    );
  }
}

class StopButton extends React.Component{
  render() {
    return (
      <TouchableOpacity
        style={{
         marginLeft:50,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         witdh: 50,
         height: 50,
         borderRadius: 100,
         marginTop:100,
         marginRight:50,
         backgroundColor:'red'
        }}
        onPress={()=>this.Audio.setIsEnabledAsync(false)}>
        <Text
          style={{
         fontWeight:'bold',
         fontSize:20
          }}>
          Stop
        </Text>
      </TouchableOpacity>
    );
  }
}
  



export default class App extends React.Component {
  render() {
    return (
      <View>
        
        <SoundButton1 />
        <SoundButton2 />
        <SoundButton3 />
        <StopButton/>
        
      </View>
    );
  }
}
