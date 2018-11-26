import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, View, Text} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native'
import {Header} from "../../Components/my-components";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {actGetDetail} from "./action";
import {number} from "../../Utils/func";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
import {NavigationActions} from "react-navigation";
function mapStateToProps(state) {
    return {
        redDetailShrimp: state.redDetailShrimp
    };
}

class ScreenDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            initialDetailShrimp: true,
            loc: ''
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
        if (prevState.initialDetailShrimp === this.props.redDetailShrimp.status) {
            this.setState({
                data: this.props.redDetailShrimp.data,
                loc: this.props.redDetailShrimp.data.date_region_full_name.split('-')[3].replace(" ","")
            })
            this.props.dispatch({
                type: 'GET_DETAIL_SHRIMP_RESET'
            })
        }
        // console.log(this.props.redDetailShrimp)
    }


    render() {
        // let loc = this.state.data.date_region_full_name.split('-')
        // console.log(this.state.loc.split('-')[3].replace(" ",""))
        return (
            <Container>
                <Header onLeftPress={()=>this.props.dispatch(NavigationActions.back())} left={'-'} title={'Detail Harga Udang'}/>
                <Content>
                    <View style={styles.vwDivider}/>
                    <View style={{height: hp('10%'), justifyContent:'center',paddingLeft:15}}>
                        <Text style={{fontSize: hp('2%')}}>Species</Text>
                        <Text style={{fontSize: hp('1.9%'), color:'#1976D2'}}>{this.state.loc}</Text>
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
                        <LineChart
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                datasets: [{
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }]
                            }}
                            width={Dimensions.get('window').width} // from react-native
                            height={hp('30%')}
                            chartConfig={{
                                backgroundColor: '#FFF',
                                backgroundGradientFrom: '#FFF',
                                backgroundGradientTo: '#FFF',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`,
                            }}
                            bezier
                            style={{
                                marginVertical: 10,
                                borderRadius: 16
                            }}
                        />
                    </View>
                    <View style={styles.vwDivider}/>
                    <View style={styles.vwCatatan}>
                        <Text style={styles.textCatatan}>
                            Catatan :
                        </Text>
                        <Text style={styles.textSubCatatan}>
                            Harga diatas bisa berubah sewaktu-waktu
                        </Text>
                    </View>
                    <View style={styles.vwDivider}/>
                    <View style={styles.vwCatatan}>
                        <Text style={styles.textCatatan}>
                            Diedit pada :
                        </Text>
                        <Text style={styles.textSubCatatan}>
                            -
                        </Text>
                    </View>
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
        height: hp('40%')
    },
    vwTitleGrafik: {
        height: hp('6%'),
        paddingLeft: 15,
        justifyContent: 'center'
    },
    vwCatatan : {
        paddingLeft:15,
        height:hp('10%'),
        justifyContent:'center'
    },
    textCatatan:{
        fontSize : hp('2%'),
        color: '#E0E0E0'

    },
    textSubCatatan:{
        fontSize : hp('2%')
    }
})
export default connect(
    mapStateToProps,
)(ScreenDetail);