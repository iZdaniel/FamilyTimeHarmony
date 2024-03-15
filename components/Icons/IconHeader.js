import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


import styled from 'styled-components/native';
import { ScreenHeight } from '../shared';
import { colors } from '../colors';

const {secondary, brand} = colors;

const IconBg = styled.View `
    background-color: ${secondary};
    width: ${ScreenHeight * 0.15}px;
    height: ${ScreenHeight * 0.15}px;
    border-radius: ${ScreenHeight * 0.2}px;
    justify-content: center;
    align-items: center;
    align-self: center;
`


const IconHeader = ({name, size, color, ...props}) => {
    return (
    <IconBg style={{...props.style}}>
        <MaterialCommunityIcons name={name} size={ScreenHeight * 0.08} color={color ? color : brand}/>
    </IconBg>
    );
};


export default IconHeader;