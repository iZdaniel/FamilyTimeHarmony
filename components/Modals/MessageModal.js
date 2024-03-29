import React, {Pressable} from 'react'
import { Modal } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

//styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const {primary, black, lightGreen, red, tertiary} = colors;
import BigText from '../Text/BigText';
import RegularText from '../Text/RegularText';
import RegularButtons from '../Buttons/RegularButtons';

const ModalPressableContainer = styled.Pressable `
    flex: 1;
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
`

const ModalView = styled.View`
    background-color: ${primary};
    border-radius: 20px;
    width: 100%;
    padding: 35px;
    align-items: center;
    elevation: 5;
    shadow-color: ${black};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
 
`

const MessageModal = ({modalVisible, buttonHandler, type, headerText, message, buttonText}) => {
    
    return (
    <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <ModalPressableContainer onPress={buttonHandler}>
            <ModalView>
                <MaterialCommunityIcons 
                name={ type === 'success' ? 'check-circle' : 'close-circle'} size={100}
                color={ type === 'success' ? lightGreen : red} 
                />
                <BigText style={{fontSize: 25, color: tertiary}}>{headerText}</BigText>
                <RegularText style={{marginBottom: 20}}>{message}</RegularText>
                <RegularButtons onPress={buttonHandler}>{buttonText || 'Complete'}</RegularButtons>
            </ModalView>
            
        </ModalPressableContainer>
    </Modal>
    );
}


export default MessageModal;