/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Linking,
  Alert,
  Picker,
  StatusBar,
  Modal,
  Button,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  Header,
  Tile,
  Text,
  ListItem,
  Badge,
  Image,
  Input,
  CheckBox,
  Card,
} from 'react-native-elements';
import My from './My.js';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import {Sae, Fumi, Kaede, Hideo} from 'react-native-textinput-effects';
const App = () => {
  const [val, setval] = useState(' ');
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const [date, setdate] = useState('2016-05-15');
  const [stat, sestet] = useState(false);
  const [me, setae] = useState('abc');
  function change() {
    Alert.alert('value changed');
  }
  return (
    <View>
      <ScrollView>
        <Header
          leftComponent={<Icon name="menu" size={30} />}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={<Icon name="home-sharp" size={24} />}
        />
        <Tile imageSrc={require('./image/my/face1.png')} />
        <Text style={{paddingLeft: 10, fontSize: 20, fontWeight: 'bold'}}>
          What is Facebook? Facebook is a social networking site that makes it
          easy for you to connect and share with family and friends online.
          Originally designed for college students, Facebook was created in 2004
          by Mark Zuckerberg while he was enrolled at Harvard University. By
          2006, anyone over the age of 13 with a valid email address could join
          Facebook. Today, Facebook is the world's largest social network, with
          more than 1 billion users worldwide.
        </Text>
        <Modal animationType={'fade'} transparent={false} visible={isVisible}>
          <View style={styles.modal}>
            <Text style={styles.text}>you have +99 notification</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => setVisible(false)}
            />
          </View>
        </Modal>
        <View>
          <ListItem
            rightIcon={
              <Icon.Button
                name="logo-facebook"
                size={10}
                backgroundColor="#3b5998"
                onPress={() => {
                  Linking.openURL('https://www.facebook.com');
                }}
              />
            }
            leftAvatar={{
              showEditButton: true,
              showAccessory: true,
              size: 'large',
              source: require('./image/my/mark.jpg'),
            }}
            title={'Sagir Khan'}
            subtitle={'Vice President'}
            bottomDivider
          />
          <Badge
            value="+99"
            status="success"
            onPress={() => setVisible(true)}
            containerStyle={{position: 'absolute', top: 10, right: 320}}
          />
          <Card title="CARD WITH DIVIDER">
            {
              <View>
                <ListItem
                  rightIcon={
                    <Icon.Button
                      name="logo-facebook"
                      size={10}
                      backgroundColor="#3b5998"
                      onPress={() => {
                        Linking.openURL('https://www.facebook.com');
                      }}
                    />
                  }
                  leftAvatar={{
                    showEditButton: true,
                    showAccessory: true,
                    size: 'large',
                    source: require('./image/my/mark.jpg'),
                  }}
                  title={'Sagir Khan'}
                  subtitle={'Vice President'}
                  bottomDivider
                />
                <Badge
                  value="+99"
                  status="success"
                  onPress={() => setVisible(true)}
                  containerStyle={{position: 'absolute', top: 10, right: 320}}
                />
              </View>
            }
          </Card>
          <Text>
            <My />
          </Text>
          <Picker
            style={{borderWidth: 2, borderColor: 'blue'}}
            selectedValue={val}
            onValueChange={(val) => setval(val)}>
            <Picker.Item label="select" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="React Native" value="rn" />
          </Picker>
          <StatusBar
            backgroundColor="#b3e6ff"
            barStyle="dark-content"
            hidden={false}
            translucent={true}
          />
        </View>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Registration Form
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 25,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Firstname
            </Text>
            <Input
              placeholder="Enter the first name"
              leftIcon={<Icon name="person-circle" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Middlename
            </Text>
            <Input
              placeholder="Enter the first name"
              leftIcon={<Icon name="person-circle" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Lastname
            </Text>
            <Input
              placeholder="Enter the first name"
              leftIcon={<Icon name="person-circle" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              PhoneNumber
            </Text>
            <Input
              placeholder="Enter the first name"
              leftIcon={<Icon name="call" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Email
            </Text>
            <Input
              placeholder="Enter the first name"
              leftIcon={<Icon name="mail" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Age
            </Text>
            <Input
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderBottomColor: 'blue',
              }}
              placeholder="Enter the first name"
              leftIcon={<Icon name="contrast-outline" size={30} />}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Date-of-birth
            </Text>

            <DatePicker
              style={{width: 570, marginTop: 10, borderWidth: 1}}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2017-11-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(val) => setdate(val)}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 30,
              marginTop: 15,
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Gender
            </Text>
            <CheckBox
              title="male"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="red"
              checkedColor="yellow"
              checked={stat}
              onPress={() => sestet(!stat)}
            />

            <CheckBox
              iconleft
              title="Click Here"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="red"
              checkedColor="yellow"
              checked={stat}
              onPress={() => sestet(!stat)}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 150,
              marginTop: 10,
            }}>
            <TouchableHighlight
              onPress={() => setVisible1(true)}
              underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableHighlight>
            <Modal
              animationType={'fade'}
              transparent={false}
              visible={isVisible1}>
              <View style={styles.modal}>
                <Text style={styles.text}>Your form is submitted</Text>
                <Button title="close" onPress={() => setVisible1(false)} />
              </View>
            </Modal>
          </View>
          <View>
            <Sae
              label={'Email Address'}
              iconClass={Icon}
              iconName={'person'}
              iconColor={'white'}
              inputPadding={16}
              labelHeight={24}
              // active border height
              borderHeight={2}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <Fumi
              label={'name'}
              iconClass={FontAwesomeIcon}
              iconName={'university'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
            />
            <Kaede label={'Website'} inputPadding={16} />
            <Text>{me}</Text>
            <Hideo
              iconClass={FontAwesomeIcon}
              iconName={'envelope'}
              iconColor={'white'}
              // this is used as backgroundColor of icon container view.
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{color: '#464949'}}
              value={me}
              onChangeText={(value) => setae(value)}
            />
            <TextInput
              style={{height: 40, borderColor: 'blue', borderWidth: 5}}
              placeholder="Enter the name"
              onChangeText={(val) => setae(val)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#5ead97',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 18,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
