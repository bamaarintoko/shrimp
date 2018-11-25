import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text} from 'native-base'
import {Header} from "../../Components/my-components";

function mapStateToProps(state) {
    return {};
}

class ScreenHome extends Component {
    render() {
        return (
            <Container>
                <Header title={'Harga Udang'} subTitle={'Ukuran 100'}/>
                <Content>
                    <Text>
                        Udang
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);