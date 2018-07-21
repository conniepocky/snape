import React from 'react';
import { StyleSheet, Text, View , Button, Alert, Image, TouchableOpacity } from 'react-native';

const AppText = props => {
  return <Text style={styles.mainText}>{props.children}</Text>
}

//BOBBIN Image
//https://trinket-user-assets-thumbnails.trinket.io/thumb-ecc4bdc52ecab50ecbf6095fffbca957839223b5-5b1ba359a8602ad92689827f.png

//Snape Image
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38qQcCjw5EFSXHGG4D7UQtniFlqJXymK229WeqfqFMen_I0AkXQ

//Button
//  <Button title="Click me!" onPress={this._handlePress}/>

//I like waffles :D

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppText style={styles.mainText}>I like waffles and Snape :D </AppText>
        <TouchableOpacity onPress={this._bobbinPress}>
          <Image
            style={styles.mainImage}
            source={{
              uri:
              "https://trinket-user-assets-thumbnails.trinket.io/thumb-ecc4bdc52ecab50ecbf6095fffbca957839223b5-5b1ba359a8602ad92689827f.png"
            }}
          />
        </TouchableOpacity>

      </View>
    );
  }

  _handlePress = () => {
    Alert.alert("I love waffles!")
  }

  _bobbinPress = () => {
    Alert.alert("I am Bobbin! Meow!!!")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99AAE5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  mainImage: {
    borderColor: "#6171A7",
    borderWidth: 10,
    width: 350,
    height: 350
  },

  mainText: {
    fontSize: 30,
    color: "#6171A7"
  }
});
