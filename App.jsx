import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';

import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(1)
    };


    Animated.sequence([
      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 200,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.OpacidadeAnimada,
        {
          toValue: 0,
          duration: 2000
        }
      )

    ]).start()

    
  }


  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: this.state.LarAnimada, height: this.state.AltAnimada, opacity: this.state.OpacidadeAnimada, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFF' }}>Carregando...</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
