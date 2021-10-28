import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Audio} from 'expo-av'
class PhonicSoundsButton extends React.Component{
  playSound = async(soundChunk)=>{
    var soundLink = "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/"+soundChunk+".mp3"
    await Audio.Sound.createAsync({
      uri:soundLink,
    },
    {shouldPlay:true})
  }
  render(){
    return(
      <TouchableOpacity onPress={()=>{
       this.playSound(this.props.soundChunk)
     }}>
     <Text>{this.props.wordChunk}</Text>
     </TouchableOpacity>
    )
  }
}
export default PhonicSoundsButton;