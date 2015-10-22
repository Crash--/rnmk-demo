const React = require('react-native');
const MK = require('react-native-material-kit');
const appStyles = require('./styles');


const {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} = React;

const {
  MKButton,
  MKColor
} = MK;

const styles = Object.assign(appStyles, StyleSheet.create({
  container : {
    flex : 1,
  }
}));

const Radios = React.createClass({
	render(){

		return (
			
  			<View style={styles.container}>
        {/* Here the magic happens*/}
          <MKButton
  backgroundColor={MKColor.Teal}
  shadowRadius={2}
  shadowOffset={{width:0, height:2}}
  shadowOpacity={.7}
  shadowColor="black"
  onPress={() => {
    console.log('hi, raised button!');
  }}
  >
  <Text pointerEvents="none"
        style={{color: 'white', fontWeight: 'bold',}}>
    RAISED BUTTON
  </Text>
</MKButton>
  			</View>
			
		)
	}
})

module.exports = Radios;
