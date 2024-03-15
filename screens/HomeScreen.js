import React from 'react'

import styled from 'styled-components/native';
import { StatusBarHeight } from '../components/shared';
import { colors } from '../components/colors';
import { View } from 'react-native';
import RegularText from '../components/Text/RegularText';
const {primary} = colors;



const StyledView = styled.View `
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`


const HomeScreen = (props) => {
    return (
    <StyledView {...props}>
        <View>
            <RegularText style={{textAlign: 'center'}}>Welcome Sa Home Page Ko Tarantado!</RegularText>
        </View>
    </StyledView>
    );
}


export default HomeScreen;