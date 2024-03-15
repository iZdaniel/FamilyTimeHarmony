import React from 'react'

import styled from 'styled-components/native';

import { colors } from '../colors';

const {tertiary} = colors;

const StyledText = styled.Text `
    font-size: 35px;
    color: ${tertiary};
    text-align: left;
    margin-bottom: 20px;
`


const BigText = (props) => {
    return (
    <StyledText style={{fontWeight: 'bold', ...props}}>{props.children}</StyledText>
    );
}


export default BigText;