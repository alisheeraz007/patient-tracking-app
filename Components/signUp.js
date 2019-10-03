import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Item, Input, Button } from 'native-base';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.mainDiv}>
                <View style={styles.inputDiv}>
                    <Text style={styles.head}>
                        Sign Up
                    </Text>

                    <Item regular style={{ paddingLeft: 0, borderRadius: 5, paddingLeft: 20, height: 40, borderColor: "rgb(20, 52, 156)" }}>
                        <Icon color="rgb(20, 52, 156)" style={{ width: 20, paddingBottom: 0, height: 18 }} size={18} name='user' />
                        <Input style={{ paddingBottom: 0 }} placeholder='User Name' />
                    </Item>

                    <Item regular style={{ paddingLeft: 0, borderRadius: 5, paddingLeft: 20, height: 40, marginTop: 10, borderColor: "rgb(20, 52, 156)" }}>
                        <Icon color="rgb(20, 52, 156)" style={{ width: 20, paddingBottom: 0, height: 18 }} size={18} name='user' />
                        <Input style={{ paddingBottom: 0 }} placeholder='Email' />
                    </Item>

                    <Item regular style={{ paddingLeft: 0, borderRadius: 5, paddingLeft: 20, height: 40, marginTop: 10, borderColor: "rgb(20, 52, 156)" }}>
                        <Icon
                            color="rgb(20, 52, 156)"
                            style={{ width: 20, paddingBottom: 0, height: 18 }}
                            size={18}
                            name='lock'
                        />
                        <Input
                            style={{ paddingBottom: 0 }}
                            placeholder='Password'
                        />
                    </Item>

                    <Item regular style={{ paddingLeft: 0, borderRadius: 5, paddingLeft: 20, height: 40, marginTop: 10, borderColor: "rgb(20, 52, 156)" }}>
                        <Icon
                            color="rgb(20, 52, 156)"
                            style={{ width: 20, paddingBottom: 0, height: 18 }}
                            size={18}
                            name='lock'
                        />
                        <Input
                            style={{ paddingBottom: 0 }}
                            placeholder='Confirm Password'
                        />
                    </Item>
                    <Button style={styles.button} >
                        <Text style={{ fontSize: 16, textAlign: "center", width: "100%", color: "rgb(129, 190, 240)" }}>Sign Up</Text>
                    </Button>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    mainDiv: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgb(129, 190, 240)"
    },
    inputDiv: {
        marginTop: "10%",
        width: "70%",
        alignItems: "center"
    },
    head: {
        color: "rgb(20, 52, 156)",
        fontWeight: "bold",
        marginBottom: "15%",
        fontSize: 45,
        fontFamily: "cursive",
    },
    button: {
        backgroundColor: "rgb(20, 52, 156)",
        width: "50%",
        height: 35,
        marginTop: 15,
    }
});

export default SignUp;
