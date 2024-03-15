import React from 'react'
import { Image, View } from 'react-native';

import styled from 'styled-components/native';



const StyledView = styled.Image `
    width: 170px;
    height: 140px;
    margin-bottom: 30px;
`


const PageLogo = (props) => {
    return (
        <StyledView {...props}>{props.children}</StyledView>
    );
}


export default PageLogo;