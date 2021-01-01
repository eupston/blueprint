import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-juce';

import Grid from "./components/DrumSequencer/Grid";

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'ff17191f',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        flexDirection: "column"
}
};

class App extends Component {
    handleToggleStep = (line, step) => {

    };

    handleHoverOnStep = (line, step) => {

    };

    handleHoverOffStep = (line, step) => {
    };

    render() {
        return (
            <View {...styles.container} >
                <Grid rows={3} columns={4}/>
            </View>
        );
    }
}

export default App;
