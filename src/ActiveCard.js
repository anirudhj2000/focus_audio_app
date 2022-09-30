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
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';

import Images from '../utils/Images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ActiveCard = (props) => {
    return(
        <View style={styles.body}>
            <TouchableHighlight onPress={props.onPress} style={styles.closePos}>
                <Image source={Images.close} style={styles.closeImg}/>
            </TouchableHighlight>
            <Image source={props.source} style={styles.activeImg}/>
        </View>
    )
}

export default ActiveCard;

const styles = StyleSheet.create({
    body : {
        height:windowHeight*0.07,
        width:windowHeight*0.07,
        borderRadius:windowHeight*0.05,
        backgroundColor:'#fff',
        marginHorizontal:2.5,
    },

    closePos : {
        position:'absolute',
        right:0,
    },

    closeImg : {
        height :16,
        width :16,
    },

    activeImg: {
        height:windowHeight*0.04,
        width:windowHeight*0.04,
        alignSelf:'center',
        marginTop:'20%'
    }
})