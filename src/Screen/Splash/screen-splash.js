import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text} from 'native-base'

function mapStateToProps(state) {
    return {};
}

class ScreenSplash extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        Splash
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenSplash);