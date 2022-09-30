import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Header = (props) => {

    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>FocusMusic</Text>
                <Text style={{color:'#E62C0F',fontSize:48}}>.</Text>
            </View>
        </SafeAreaView>
    )
}
export default Header;

const styles = StyleSheet.create({
    header : {
        height : windowHeight*0.1,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },

    headerView : {
        marginHorizontal :'5%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'baseline',
    },

    headerText : {
        fontSize : 24,
        fontWeight:'bold',
        color : '#fff',
    }

})