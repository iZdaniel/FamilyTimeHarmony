import React from 'react'

import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Text/RegularText';



const {primary, brand, green} = colors;

const ButtonView = styled.TouchableOpacity `
    padding: 15px;
    background-color: ${brand};
    width: 100%;
    justifyContent: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
    
`

const RegularButtons = (props) => {
    return (
    <ButtonView onPress={props.onPress}{...props}>
        <RegularText style={[{color: primary}, {...props?.textStyle}]}>{props.children}</RegularText>
    </ButtonView>
    );
};


export default RegularButtons;