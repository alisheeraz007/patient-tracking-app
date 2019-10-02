import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import img from './1200px-React-icon.svg.png'

class Loader extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <View style={styles.loader}>
                    <Image
                        style={styles.stretch}
                        source={img}
                        style={styles.img}
                    />
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    loader: {
        backgroundColor: "black",
        height: "100%",
        alignItems: "center"
    },
    img:{
        width: 150,
        height: 150,
        marginTop: "50%"
    }
});

export default Loader;
