import React from 'react'

import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Text/RegularText';
import { Fontisto } from '@expo/vector-icons';


const {primary, brand, lightGreen} = colors;

const GoogleButton = styled.TouchableOpacity `
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 10px;
    height: 50px;

    ${(props) => props.google == true &&`  
        background-color: ${lightGreen};
        flex-direction: row;
        justify-content: center;
    `}
`;

const GoogleButtons = (props) => {
    return (
        <GoogleButton onPress={props.onPress} google={props.google}>
            <Fontisto name="google" style={{color: primary, paddingRight: 20}} size={20} />
            <RegularText style={[{ color: primary}, { ...(props?.textStyle || {}) }]}>Sign in with Google
                {props.children}
            </RegularText>
            
        </GoogleButton>
    );
};



export default GoogleButtons;