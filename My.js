import React from 'react';
import {Text, View, FlatList} from 'react-native';
export default class My extends React.Component {
  state = {
    text: 'loadingname',
    text1: 'loadingusername',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((data2) => {
        console.log(data2);
        this.setState({
          text: data2[0].name,
          text1: data2[0].username,
        });
      });
  }
  render() {
    return (
      <View>
        <Text>name:{this.state.text}</Text>
        <Text>username:{this.state.text1}</Text>
      </View>
    );
  }
}
