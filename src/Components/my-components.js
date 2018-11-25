import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native"
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Header = ({title, subTitle}) => {

    return (
        <View style={style.header}>
            <View style={style.headerLeft}>

            </View>
            <View style={style.hederBody}>
                <Text style={style.title}>{title === undefined ? 'Body' : title}</Text>
                <Text style={style.subtitle}>{subTitle === undefined ? 'subTitle' : subTitle}</Text>
            </View>
            <View style={style.headerRight}>
                <Image
                    style={{flex: 1}}
                    width={hp('4%')}
                    source={require('../Assets/share.png')}
                    resizeMode={"contain"}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: hp('9%'),
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        flexDirection: 'row'
    },
    headerLeft: {
        flex: 1
    },
    hederBody: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerRight: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:hp('2.7%'),
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize:hp('2%'),
    }
})