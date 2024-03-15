import React, { useState} from 'react'
import { View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


// Styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
import Smalltext from '../Text/SmallText';


const {primary, tertiary, secondary, lightGray, brand} = colors;

const InputField = styled.TextInput `
   
    background-color: ${primary};
    flex: 1;
    padding: 15px;
    padding-left: 40px;
    padding-right: 55px;
    border-radius: 10px;
    font-size: 16px;
    height: 47px;
    margin-top: 5px;
    margin-bottom: 30px;
    color: ${tertiary};
    border-bottom-width: 1px;
   

`

const LeftIcon = styled.View `
    position: absolute;
    left: 5px;
    top: 30px;
    z-index: 1;
    border-color: ${secondary};
    padding-right: 10px;
`
const RightIcon = styled.TouchableOpacity `
    position: absolute;
    top: 30px;
    right: 15px;
    z-index: 1;
  
`



const StyledTextInput = ({icon, label, isPassword, ...props}) => {
    const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
    const [hidePassword, setHidePassword] = useState(true);

    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(primary);
    }

    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(secondary);
    }

    
    return (<View>
        <LeftIcon>
            <MaterialIcons name={icon} size={25} color={brand}/>
        </LeftIcon>
        <Smalltext style={{left: 5}}>{label}</Smalltext>
        <InputField 
            {...props}
            placeholderTextColor={lightGray}
            style={{backgroundColor: inputBackgroundColor, ...props?.style }}
            onBlur={customOnBlur}
            OnFocus={customOnFocus}
            secureTextEntry= {isPassword && hidePassword}
        />
        {isPassword && <RightIcon onPress={() => {
            setHidePassword(!hidePassword);

        }}>
            <MaterialCommunityIcons name={hidePassword ? 'eye-off' : 'eye'} size={25} color={brand}/>
            
            </RightIcon>}

    </View>);
}


export default StyledTextInput;