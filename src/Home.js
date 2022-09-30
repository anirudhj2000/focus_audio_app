import React from 'react';
import { useEffect,useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';

import Header from './Header';
import Card from './Card';
import Images from '../utils/Images';
import Items from './utils/Items';
import LinearGradient from 'react-native-linear-gradient';
import ActiveCard  from './ActiveCard';
import Audio from '../utils/Audio';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {

    const [click,onClicked] = useState(false);
    const [index,setIndex] = useState(0);
    const [activeAudio, setActiveAudio] = useState([]);

    var player = new Player("../assets/Audio/bird.mp3");

    player.prepare();

    const handleCardClick = (index, visible) =>{
        Items.map((item) => {
            if(item.Id == index){
                Items[index].visible = !Items[index].visible;
                if(Items[index].visible){
                    setActiveAudio([...activeAudio,Items[index].Id]);
                    player.play();
                }
                else{
                    removeDisabledAudio(Items[index].Id);
                }
            }
            onClicked(!visible);
        })

        console.log("active Audio" + JSON.stringify(activeAudio));
        console.log("visible=="+Items[index].visible);
        // console.log("index===="+index);
    }

    const removeDisabledAudio = (Id) => {
        let tempAudio = activeAudio;
        player.stop();
        setActiveAudio([]);
        console.log("TempAudio" + JSON.stringify(tempAudio)+"Id" + Id)
        for(var i=0;i<tempAudio.length;i++){
            if(Id!=tempAudio[i]){
                setActiveAudio([...activeAudio,tempAudio[i]]);
            }
        }

        
    }

    const CardRender = () => {
        console.log("CardRender");

        return(
            <FlatList
                data={Items}
                numColumns={2}
                style={{marginHorizontal:'5%'}}
                renderItem={({item,index}) => {
                    return(
                        <Card
                        // onPress={() => handleCardClick(index,item.visible)}
                        onPress={() => {handleCardClick(index,click)}}
                        backgroundColor = "#fff"
                        title={item.name}
                        source={item.Image}
                        enabled={item.visible}
                        backgroundcolor={item.visible?"#fff":"#000"}
                    />
                    )
                }}
            />
        )
    }

    const ActiveCardRender = () => {
        return(
            <View style={{display:'flex',flexDirection:'row',marginHorizontal:'2.5%'}}>
                {
                    activeAudio.length>0 && activeAudio.map((item) => {
                        return(
                            <ActiveCard source={item.Image} />
                        )
                    })
                    
                }
            </View>
        )
    }

    useEffect(() => {
        // console.log("click===="+click)
        CardRender();
    },[click])

    useEffect(() => {
        ActiveCardRender();
    },[activeAudio])
    
    return(
        <SafeAreaView style={styles.landing}>
            {/* #141e30 → #243b55 */}
            <LinearGradient colors={['#141e30','#242b55']} style={styles.linearGradient}>
            <Header/>
            {/* s */}
            <CardRender/>
            <View style={styles.controlIsland}>
                <TouchableOpacity style={styles.playImage} onPress={() => {}}>
                    <Image style={styles.controlImg} source={Images.play} />
                </TouchableOpacity>
                {
                    activeAudio.length>0 ?
                    <ActiveCard/> :
                    <View style={styles.placeholder}>
                        <Text style={{paddingHorizontal:10,color:'#fff'}}>No Audio palying!</Text>
                    </View>
                }
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    landing : {
        height : '100%',
        width : '100%',
        backgroundColor : '#89B7DC',
    },

    controlIsland : {
        backgroundColor:'rgba(255,255,255,0.7)',
        alignSelf:'center',
        width:'auto',
        height:windowHeight*0.075,
        borderRadius : windowHeight*0.075,
        position:'absolute',
        bottom:0,
        marginVertical:'2.5%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },

    playImage : {
        width:'auto',
        marginHorizontal:'2.5%'
    },  
    controlImg : {
        height:windowHeight*0.075,
        width: windowHeight*0.075,
        tintColor:'#2b5876',
        marginHorizontal:5,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height:'100%',
        width:'100%',
    },

    placeholder :{
        backgroundColor:'rgba(0,0,0,0.7)',
        height:windowHeight*0.045,
        borderRadius:windowHeight*0.05,
        justifyContent:'center',
        alignItems:'center',
    }

});

export default Home;