import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, View, Text} from 'native-base';
import {StyleSheet} from 'react-native'
import {Header} from "../../Components/my-components";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {actGetDetail} from "./action";
import {number} from "../../Utils/func";

function mapStateToProps(state) {
    return {
        redDetailShrimp: state.redDetailShrimp
    };
}

class ScreenDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            initialDetailShrimp : true
        }
    }

    componentDidMount() {
        let id = 'shrimp_prices/' + this.props.navigation.getParam('id')
        this.props.dispatch(actGetDetail(id))
        // Api.GET(id)
        //     .then((response)=>{
        //         console.log(response)
        //     }).catch((err)=>{
        //         console.log(err.message)
        // })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialDetailShrimp === this.props.redDetailShrimp.status){
            this.setState({
                data : this.props.redDetailShrimp.data
            })
            this.props.dispatch({
                type :'GET_DETAIL_SHRIMP_RESET'
            })
        }
        console.log(this.props.redDetailShrimp)
    }


    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <View style={styles.vwDivider}/>
                    <View style={{height: hp('12%'), padding: 15}}>
                        <Text>Species</Text>
                        <Text style={{fontSize:hp('1.9%')}}>{this.state.data.date_region_full_name}</Text>
                    </View>
                    <View style={styles.vwDivider}/>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 100</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_100)}</Text>
                        </View>
                    </View>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 90</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_90)}</Text>
                        </View>

                    </View>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 80</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_80)}</Text>
                        </View>

                    </View>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 70</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_70)}</Text>
                        </View>

                    </View>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 60</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_60)}</Text>
                        </View>

                    </View>
                    <View style={styles.listPrice}>
                        <View style={styles.vwTextSize}>
                            <Text style={styles.textSize}>Harga ukuran 50</Text>
                        </View>
                        <View style={styles.vwTextPrice}>
                            <Text style={styles.textSize}>Rp {number(this.state.data.size_50)}</Text>
                        </View>

                    </View>
                    <View style={styles.vwDivider}/>
                    <View style={styles.vwGrafik}>
                        <View style={styles.vwTitleGrafik}>
                            <Text style={{fontSize: hp('2%')}}>Perkembangan harga (ukuran 100)</Text>
                        </View>
                    </View>
                    <View style={styles.vwDivider}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    listPrice: {
        height: hp('6%'),
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 15
    },
    vwTextSize: {
        justifyContent: 'center',
        flex: 3
    },
    vwTextPrice: {
        justifyContent: 'center',
        flex: 1
    },
    textSize: {
        fontSize: hp('2%')
    },
    vwDivider: {
        backgroundColor: '#E0E0E0', height: hp('1.6%')
    },
    vwGrafik: {
        height: hp('30%')
    },
    vwTitleGrafik: {
        height: hp('6%'),
        paddingLeft:15,
        justifyContent:'center'
    }
})
export default connect(
    mapStateToProps,
)(ScreenDetail);