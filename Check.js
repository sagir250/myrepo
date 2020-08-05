import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
const Check = () => {
  const [data, sedate] = useState('sagier');
  return (
    <View>
      <Text>{data}</Text>
      <TextInput
        placeholder="Enter the data"
        onChangeText={(val) => sedate(val)}
      />
    </View>
  );
};
export default Check;
