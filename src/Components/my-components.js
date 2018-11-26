import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native"
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Header = ({onLeftPress, left, title, subTitle}) => {

    return (
        <View style={style.header}>
            <View style={style.headerLeft}>
                {
                    left === undefined
                        ?

                        <Text>{''}</Text>
                        :
                        <TouchableOpacity onPress={onLeftPress}>
                            <Image
                                style={{flex: 1}}
                                width={hp('4%')}
                                source={require('../Assets/left-arrow.png')}
                                resizeMode={"contain"}
                            />
                        </TouchableOpacity>
                }
            </View>
            <View style={style.hederBody}>
                <Text style={style.title}>{title === undefined ? 'Body' : title}</Text>
                {
                    subTitle !== undefined
                    &&
                    <Text style={style.subtitle}>{subTitle === undefined ? 'subTitle' : subTitle}</Text>
                }
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

export const Footer = ({onFilter, onSort}) => {
    return (
        <View style={style.footer}>
            <TouchableOpacity onPress={onFilter} style={style.footerLeft}>
                <View style={style.footerLeft}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={{flex: 1}}
                            width={hp('3%')}
                            source={require('../Assets/filter-results-button.png')}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={style.textFooter}>Filter Lokasi</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSort} style={style.footerRight}>
                <View style={style.footerRight}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={{flex: 1}}
                            width={hp('3%')}
                            source={require('../Assets/sort-down.png')}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={style.textFooter}>Urutkan</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const CardView = ({price, location, date, createby, detail}) => {
    return (
        <View style={style.card}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flex: 6}}>
                    <Text style={style.cardTextHarga}>Rp {price === undefined ? '00,000' : price}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Image
                        style={{flex: 1}}
                        width={hp('4%')}
                        source={require('../Assets/share.png')}
                        resizeMode={"contain"}
                    />
                </View>
            </View>
            <View style={{flex: 1, paddingTop: 10}}>
                <Text style={style.cardTextCity}>{location === undefined ? 'location' : location}</Text>

            </View>
            <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
                <View style={{flex: 2}}>
                    <Text
                        style={{fontSize: hp('1.8%')}}>{date === undefined ? 'date' : date} oleh {createby === undefined ? 'xxx' : createby}</Text>
                </View>
                <TouchableOpacity style={{flex: 1}} onPress={detail}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: hp('1.8%')}}>Harga lengkap ></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export const Divider = ({title}) => {
    return (
        <View style={style.divider}>
            <Text style={style.titleDivider}>{title === undefined ? 'Title' : title}</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hederBody: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: hp('2.7%'),
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: hp('2%'),
    },
    footer: {
        height: hp('9%'),
        flexDirection: 'row',
    },
    footerLeft: {
        flex: 1,
        backgroundColor: '#0D47A1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    footerRight: {
        flex: 1,
        backgroundColor: '#1976D2',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textFooter: {
        color: '#FFF',
        fontSize: hp('2.7%'),
        fontWeight: 'bold'
    },
    divider: {
        height: hp('6%'),
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        padding: 10
    },
    titleDivider: {
        fontSize: hp('2%'),
        color: '#757575'
    },
    card: {
        height: hp('17%'),
        padding: 10,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 0.5,
        flexDirection: 'column'
    },
    cardTextHarga: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },
    cardTextCity: {
        fontSize: hp('1.8%'),
        color: '#1976D2',
    }
})