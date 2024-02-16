import styled from "styled-components";
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.StatusBarHeight;

// colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#2a5d9c",
    green: "#188981",
    red: "#EF4444",
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;


// This is for the LOGO
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
    margin-top: 70px;
`

export const InnerContainer = styled.View`
    width: 100%;
    align-items: center;
    
`;

export const PageLogo = styled.Image`
    width: 170px;
    height: 140px;
    
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: black;
    padding: 10px;
   
    ${(props) => props.pageTitle == true &&`  
    width: 100%;
    text-align: left;
    right: 1.5%;
    font-weight: bold;
    margin-bottom: 10px;
    `}
    
`;



export const SubTitle = styled.Text`
    font-size: 36px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: ${tertiary};
`;

//THIS IS FORM
export const StyledFormArea = styled.View`
    width: 95%;
   
`;

export const StyledTextInput = styled.TextInput`
    
    padding: 15px;
    padding-left: 45px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-top: 10px;
    margin-bottom: 18px;
    color: ${tertiary};
    border-bottom-width: 1px;
    font-style: italic;
    
`;
//THIS IS FOR THE LABEL OF INPUT FIELD
export const StyledInputLabel = styled.Text`
    color: black;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 5px;
    top: 40px;
    position: absolute;
    z-index: 1;
`;

//FOR THE EYE ICON ON THE RIGHT SIDE
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;
// THIS FOR THE BUTTON
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true &&`  
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;
//THIS IS FOR THE TEXT INSIDE THE BUTTON
export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true &&`  
        padding-left: 20px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;


export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;