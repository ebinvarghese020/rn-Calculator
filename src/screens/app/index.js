/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text } from 'react-native';
import Style from './styles';
import Box from './body';

const App = () => {
    return (
        <View style={Style.container}>
            <View>
                <View style={Style.display}>
                    <Text style={Style.displayText}>1</Text>
                </View>
                <View style={Style.bottom}>
                    <Box text={'C'}/>
                    <Box text={'+/-'}/>
                    <Box text={'%'}/>
                    <Box text={'/'} top={true}/>

                    <Box text={'7'}/>
                    <Box text={'8'}/>
                    <Box text={'9'}/>
                    <Box text={'X'} right={true}/>

                    <Box text={'4'}/>
                    <Box text={'5'}/>
                    <Box text={'6'}/>
                    <Box text={'-'} right={true}/>

                    <Box text={'1'}/>
                    <Box text={'2'}/>
                    <Box text={'3'}/>
                    <Box text={'+'} right={true}/>

                    <Box text={'.'}/>
                    <Box text={'0'}/>
                    <Box text={'00'}/>
                    <Box text={'='} bottom={true}/>

                </View>

            </View>
        </View>
    );
};

export default App;
