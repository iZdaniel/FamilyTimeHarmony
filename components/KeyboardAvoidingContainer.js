import React from 'react';

// import Keyboard Avoiding view
import { KeyboardAvoidingView, ScrollView,  Keyboard, Platform, Pressable } from 'react-native';


const KeyboardAvoidingContainer = (props) => {
    return (
        <KeyboardAvoidingView 
            style={{flex: 1, backgroundColor: 'transparent'}}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={60}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingContainer;