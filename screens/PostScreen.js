import React from 'react'

import styled from 'styled-components/native';
import { StatusBarHeight } from '../components/shared';
import { colors } from '../components/colors';

const {primary} = colors;

const StyledView = styled.View `
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`


const PostScreen = (props) => {
    return <StyledView {...props}>{props.children}</StyledView>;
}


export default PostScreen;