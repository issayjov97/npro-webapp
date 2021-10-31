import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = props => {
return( <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
    </View>)

};

const styles = StyleSheet.create({
header: {
    height: 90,
    paddingTop: 36,
    backgroundColor: '#788eb3',
    justifyContent: 'center',
    alignItems: 'center'
},
headerTitle: {
color: 'black',
fontSize: 18
}
});

export default Header;