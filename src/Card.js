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

const Card = (props) => {

    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.card,{backgroundColor:props.backgroundcolor}]}>
            <View style={styles.imageView}> 
                <Image source={props.source} style={[styles.images,props.enabled?{tintColor:'#ababab'}:null]} />
                <Text style={styles.imageText}>{props.title}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    card : {
        height : windowHeight*0.175,
        width : windowHeight*0.175,
        marginHorizontal : '5%',
        elevation :16,
        borderRadius : 4,
        marginVertical :'5%'
    },

    images : {
        height : windowHeight*0.075,
        width:windowHeight*0.075,
        marginVertical:10
    },

    imageText : {
        fontSize:24,
        color:'#fff'
    },

    imageView : {
        display :'flex',
        flexDirection:'column',
        justifyContent :'center',
        alignItems:'center',
        height :windowHeight*0.2,
    }

})