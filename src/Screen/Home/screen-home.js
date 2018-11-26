import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Item, Text, View, Input} from 'native-base'
import {Image, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native'
import Modal from "react-native-modal";
import {CardView, Divider, Footer, Header} from "../../Components/my-components";
import {actGetRegions, actGetShrimp} from "./action";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {number} from "../../Utils/func";
import Api from "../../Utils/Api";


function mapStateToProps(state) {
    return {
        redShrimp: state.redShrimp,
        redRegions: state.redRegions
    };
}

class ScreenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            initialRedShrimp: true,
            initialRedRegions: true,
            isLoading: true,
            isFilterVisible: false,
            data_regions: []
        }
        this.showModalFilter = this.showModalFilter.bind(this)
        this.onFilterChange = this.onFilterChange.bind(this)
        this.onFilter = this.onFilter.bind(this)
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedShrimp === this.props.redShrimp.status) {
            this.setState({
                data: this.props.redShrimp.data,
                isLoading: false
            })
            this.props.dispatch({
                type: 'GET_SHRIMP_RESET'
            })
        }

        if (prevState.initialRedRegions === this.props.redRegions.status) {
            this.setState({
                data_regions: this.props.redRegions.data
            })
            this.props.dispatch({
                type: 'GET_REGIONS_RESET'
            })
        }
        console.log("===>", this.props.redRegions)
    }

    componentDidMount() {
        this.getShrimpPrice()
    }

    getShrimpPrice(val = 34) {
        // return () => {


            let params = {
                search: '',
                with: 'creator,species,region',
                sort: 'size_100|creator.name,desc',
                region_id: val
            };
            this.props.dispatch(actGetShrimp(params))
        // }
    }

    showModalFilter() {
        this.setState({
            isFilterVisible: !this.state.isFilterVisible,
            data_regions:[]
        })
    }

    onFilterChange(e) {
        console.log(e)
        let params = {
            search: e
        }
        this.props.dispatch(actGetRegions(params))
    }

    onFilter(val) {
        return () => {
            this.setState({
                isFilterVisible: !this.state.isFilterVisible
            })
            this.getShrimpPrice(val.id)
            console.log(val.id)
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <Container>
                <Header title={'Harga Udang'} subTitle={'Ukuran 100'}/>
                {
                    this.state.isLoading
                        ?
                        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                            <Text>Please wait...</Text>
                        </View>
                        :
                        <Content>
                            <Divider title={'Harga udang di kota anda'}/>
                            <CardView/>
                            <Divider title={'Harga udang di kota terdekat'}/>
                            {
                                this.state.data.data.length >0
                                ?
                                this.state.data.data.map((x, y) => {
                                    return (
                                        <CardView
                                            date={x.creator.created_at}
                                            createby={x.creator.name}
                                            location={x.region.full_name}
                                            price={number(x.size_100)}
                                            key={y}/>

                                    )
                                })
                                    :
                                    <View style={{flex:1, justifyContent:'center',alignItems:'center', height:hp('20%')}}>
                                        <Text>Tidak ada data</Text>
                                    </View>
                            }
                        </Content>
                }
                {
                    !this.state.isLoading
                    &&
                    <Footer onFilter={this.showModalFilter}/>
                }
                <Modal
                    onBackdropPress={this.showModalFilter} onBackButtonPress={this.showModalFilter}
                    isVisible={this.state.isFilterVisible}
                    style={styles.bottomModal}
                >
                    <View style={styles.modalContent}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 4}}>
                                <Item regular>
                                    <Input onChangeText={this.onFilterChange} style={{height: hp('6%')}}
                                           placeholder='Masukan nama kota'/>
                                </Item>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{
                                    height: hp('6.25%'),
                                    backgroundColor: '#1976D2',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        style={{flex: 1}}
                                        width={hp('4%')}
                                        source={require('../../Assets/musica-searcher.png')}
                                        resizeMode={"contain"}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{paddingBottom: 10}}>
                            <ScrollView>
                                {
                                    this.state.data_regions.length > 0
                                        ?
                                        this.state.data_regions.map((x, y) => {
                                            return (
                                                <TouchableOpacity key={y} onPress={this.onFilter(x)}>
                                                    <View style={{height: hp('5%'), justifyContent: 'center'}}>
                                                        <Text style={{fontSize: hp('1.9%')}}>{x.full_name}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                        :
                                        <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
                                        <Text style={{fontSize:hp('2%')}}>Silahkan masukkan nama daerah</Text>
                                        </View>
                                }
                            </ScrollView>
                        </View>
                    </View>

                </Modal>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: "white",
        padding: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: hp('40%'),
        flexDirection: 'column'
    }, bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
})

export default connect(
    mapStateToProps,
)(ScreenHome);