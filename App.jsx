import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';

import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0)
    };

    this.carregarGrafico = this.carregarGrafico.bind(this)




  }

  carregarGrafico() {
    Animated.sequence([
      Animated.timing(
        this.state.OpacidadeAnimada,
        {
          toValue: 1,
          duration: 500
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 300,
          duration: 1000
        }
      )
    ]).start()
  }


  render() {
    return (
      <View style={{ flex: 1, marginTop: 35 }}>

        <View style={{ height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#4169E1' }}>
          <TouchableOpacity onPress={this.carregarGrafico()}>
            <Text>Gerar gráfico</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Text>Vendas</Text>
          <Animated.View style={{ width: this.state.LarAnimada, height: this.state.AltAnimada, opacity: this.state.OpacidadeAnimada, backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFF' }}>R$ 150,00</Text>
          </Animated.View>

        </View>





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
