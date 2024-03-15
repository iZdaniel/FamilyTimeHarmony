
import React, { useState } from 'react'
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { colors } from '../components/colors';
const {primary} = colors;


// Customs components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Text/MsgBox';
import RegularButton from '../components/Buttons/RegularButtons';
import IconHeader from '../components/Icons/IconHeader';
import RegularText from '../components/Text/RegularText';
import StyledCodeInput from '../components/Inputs/StyledCodeInput';
import ResendTimer from '../components/Timers/ResendTimer';
import MessageModal from '../components/Modals/MessageModal';

import styled from 'styled-components/native';
const FormWrapper = styled.View`
    ${(props) => {
        return props.pinReady ? 'opacity: 1' : 'opacity: 0.3';
    }}
`

const ResetPassword = () => {

    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    // code input
    const MAX_CODE_LENGTH = 4;
    const [code, setCode] = useState('');
    const [pinReady, setPinReady] = useState(false);

    // resending email
    const [activeResend, setActiveResend] = useState(false);
    const [resendStatus, setResendStatus] = useState('Resend');
    const [resendingEmail, setResendingEmail] = useState(false);

    //modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessageType, setModalMessageType] = useState(' ');
    const [headerText, setHeaderText] = useState(' ');
    const [modalMessage, setModalMessage] = useState(' ');
    const [buttonText, setButtonText] = useState(' ');

    const buttonHandler = () => {
        if (modalMessage === 'success'){
            // do something, like going to the dashboard
        }

        setModalVisible(false);
    }

    const showModal = (type, headerText, message, buttonText) => {
        setModalMessageType(type);
        setHeaderText(headerText);
        setModalMessage(message);
        setButtonText(buttonText);
        setModalVisible(true);
    }


    const handleOnSubmit = async(creadentials, setSubmitting) => {
        try {
            setMessage(null);

            // call backend

            // move to next page

            setSubmitting(false);
            return showModal('success', 'All Good!', 'Your password has been reset.', 'Proceed');
        } catch (error) {
            setSubmitting(false);
            return showModal('failed', 'Failed!', error.mesasge, 'Close');
        }
    }


    const resendEmail = async (triggerTimer) => {
        try {
            setResendingEmail(true);

            // make request to the backend
            // update setResendStatus() to 'Failed!' or 'Sent!'

            setResendingEmail(false);

            // hold on a bit
            setTimeout(() => {
                setResendStatus('Resend');
                setActiveResend(false);
                triggerTimer();
            }, 5000);
        } catch (error) {
            setResendingEmail(false);
            setResendStatus('Failed!');
            alert("Email Resend Failed: " + error.message);
        }
    }

    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
           
            <RegularText style={{ textAlign: 'center'}}>Enter the 4-digit code sent to your email</RegularText>
            <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

            <ResendTimer 
                            activeResend={activeResend} 
                            setActiveResend={setActiveResend} 
                            resendStatus={resendStatus} 
                            resendingEmail={resendingEmail} 
                            resendEmail={resendEmail}
                            style={{marginBottom: 25}}
                        />
            
            <Formik 
                initialValues={{ newPassword: '', confirmNewPassword: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.newPassword == '' || values.confirmNewPassword == '') {
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    } else if ( values.newPassword !== values.confirmNewPassword) {
                        setMessage('Password do not match');
                        setSubmitting(false);
                    } else {
                       handleOnSubmit(values, setSubmitting);
                    }
                }}
            >

                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <FormWrapper pinReady={pinReady}>
    
                        <StyledTextInput 
                            label="New Password" 
                            icon="lock-open" 
                            placeholder="* * * * * * * *"
                            onChangeText = {handleChange('newPassword')}
                            onBlur = {handleBlur('newPassword')}
                            value={values.newPassword}
                            isPassword={true}
                            style={{marginBottom: 15}}  
                            editable={pinReady}
                           />

                        <StyledTextInput 
                            label="Confirm New Password" 
                            icon="lock-open" 
                            placeholder="* * * * * * * *"
                            onChangeText = {handleChange('confirmNewPassword')}
                            onBlur = {handleBlur('confirmNewPassword')}
                            value={values.confirmNewPassword}
                            isPassword={true}
                            style={{marginBottom: 15}}  
                            editable={pinReady}
                           />
                        
                           
                        <MsgBox style={{marginBottom: 5}} success={isSuccessMessage}> {message || ''} </MsgBox>

                        {!isSubmitting && <RegularButton disabled={!pinReady} onPress={handleSubmit}>Submit</RegularButton>}
                        {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size="small" color={primary} /></RegularButton>}
  
                    </FormWrapper>
                )}
            </Formik>

            <MessageModal 
                modalVisible={modalVisible}
                buttonHandler={buttonHandler}
                type={modalMessageType}
                headerText={headerText}
                message={modalMessage}
                buttonText={buttonText}
            />
          
        </KeyboardAvoidingContainer>
    </MainContainer>
    );
}


export default ResetPassword;