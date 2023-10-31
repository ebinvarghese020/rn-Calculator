/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import Style from './styles';

const Box = (props) => {
    return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={[props.right ? 
                    Style.rightbox
                    : props.top 
                    ? Style.topBox 
                    : props.bottom
                    ? Style.bottomBox
                    : Style.bodybox ]}>
                    <View style={[props.bottom? Style.equal : null ]}>
                        <Text style ={[props.bottom? Style.equalText : {fontSize: 32} ]} >
                            {props.text}
                        </Text>
                    </View>
                </View>
            </View>
    )};

export default Box;
