import React from 'react'

import styled from 'styled-components/native';
import { colors } from '../colors';
import SmallText from '../Text/RegularText';

const {brand} = colors;

const StyledPressable = styled.Pressable `
    align-self: center;
    margin-vertical: 3px;
`


const PressableText = (props) => {
    return (
    <StyledPressable onPress={props.onPress}{...props}>
        <SmallText style={{color: brand}}>{props.children}</SmallText>
    </StyledPressable>
    );
};


export default PressableText;