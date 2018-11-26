import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text, View} from 'native-base'
import {CardView, Divider, Footer, Header} from "../../Components/my-components";
import {actGetShrimp} from "./action";
import {number} from "../../Utils/func";


function mapStateToProps(state) {
    return {
        redShrimp: state.redShrimp
    };
}

class ScreenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            initialRedShrimp: true,
            isLoading: true
        }
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
        // console.log(this.props.redShrimp)
    }

    componentDidMount() {
        let params = {
            search: '',
            with: 'creator,species,region',
            sort: 'size_100|creator.name,desc',
            region_id: 34
        };
        this.props.dispatch(actGetShrimp(params))
    }

    render() {
        console.log(this.state.data)
        return (
            <Container>
                <Header title={'Harga Udang'} subTitle={'Ukuran 100'}/>
                {
                    this.state.isLoading
                        ?
                        <View>
                            <Text>Please wait...</Text>
                        </View>
                        :
                        <Content>
                            <Divider title={'Harga udang di kota anda'}/>
                            <CardView/>
                            <Divider title={'Harga udang di kota terdekat'}/>
                            {
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
                            }
                        </Content>
                }
                {
                    !this.state.isLoading
                    &&
                    <Footer/>
                }
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);