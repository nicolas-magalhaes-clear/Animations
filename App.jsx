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


    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.state.LarAnimada,
            {
              toValue: 300,
              duration: 700
            }
          ),
          Animated.timing(
            this.state.AltAnimada,
            {
              toValue: 100,
              duration: 700
            }
          )
        ]),
        Animated.parallel([
          Animated.timing(
            this.state.LarAnimada,
            {
              toValue: 150,
              duration: 700
            }
          ),
          Animated.timing(
            this.state.AltAnimada,
            {
              toValue: 50,
              duration: 700
            }
          )
        ])
      ])
    ).start()

    
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
