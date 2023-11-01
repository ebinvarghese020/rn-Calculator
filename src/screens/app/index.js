/* eslint-disable prettier/prettier */

import React, {useRef, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity } from 'react-native';
import Style from './styles';
import Box from './body';
import ActionSheet from "react-native-actions-sheet";
import { evaluate } from 'mathjs';


const App = () => {
    const actionSheetRef = useRef(null);
    const [display, setdisplay] = useState('');
    const handlePressEqual = () => {
        if ( display === '1+2+3' ) {
        actionSheetRef.current?.show();
    } else {
        const result = Number(evaluate(display));
        setdisplay(result);
    }
    };
    const handleAddToDisplay = (text) => {
        if ( text == 'C'){
            setdisplay(''); 
        } else {
            setdisplay(display + text); 
        }
    };
    return (
        <View style={Style.container}>
            <View>
                <View style={Style.display}>
                    <Text style={Style.displayText}>{display}</Text>
                </View>
                <View style={Style.bottom}>
                    <Box text={'C'} handlePress= {() =>handleAddToDisplay('C')}/>
                    <Box text={'+/-'} handlePress= {() =>handleAddToDisplay('+')}/>
                    <Box text={'%'} handlePress= {() =>handleAddToDisplay('%')}/>
                    <Box text={'/'} top={true} handlePress= {() =>handleAddToDisplay('/')}/>

                    <Box text={'7'} handlePress= {() =>handleAddToDisplay('7')}/>
                    <Box text={'8'} handlePress= {() =>handleAddToDisplay('8')}/>
                    <Box text={'9'} handlePress= {() =>handleAddToDisplay('9')}/>
                    <Box text={'X'} right={true} handlePress= {() =>handleAddToDisplay('X')}/>

                    <Box text={'4'} handlePress= {() =>handleAddToDisplay('4')}/>
                    <Box text={'5'} handlePress= {() =>handleAddToDisplay('5')}/>
                    <Box text={'6'} handlePress= {() =>handleAddToDisplay('6')}/>
                    <Box text={'-'} right={true} handlePress= {() =>handleAddToDisplay('-')}/>

                    <Box text={'1'} handlePress= {() =>handleAddToDisplay('1')}/>
                    <Box text={'2'} handlePress= {() =>handleAddToDisplay('2')}/>
                    <Box text={'3'} handlePress= {() =>handleAddToDisplay('3')}/>
                    <Box text={'+'} right={true} handlePress= {() =>handleAddToDisplay('+')}/>

                    <Box text={'.'} handlePress= {() =>handleAddToDisplay('.')}/>
                    <Box text={'0'} handlePress= {() =>handleAddToDisplay('0')}/>
                    <Box text={'00'} handlePress= {() =>handleAddToDisplay('00')}/>
                    <TouchableOpacity onPress={handlePressEqual} handlePress= {() =>handleAddToDisplay('=')}>
                    <Box text={'='} bottom={true}/>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 90}}>
            <ActionSheet ref={actionSheetRef} containerStyle={{backgroundColor: 'grey', 
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                borderTopLeftRadius: 50,
                                                                borderTopRightRadius: 50,
                                                                padding: 80,
                                                                height: 300,
                                                                width: 340,
                                                                alignSelf: 'center',
                                                                marginBottom: 30}}>
            <Text style={{fontSize: 30, color: 'white'}}>Hello World</Text>
            </ActionSheet>
            </View>
        </View>
    );
};

export default App;
