import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../components/colors';
const {primary, secondary, lightGray} = colors;

// Customs components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import RegularButton from '../components/Buttons/RegularButtons';
import IconHeader from '../components/Icons/IconHeader';
import RegularText from '../components/Text/RegularText';
import StyledCodeInput from '../components/Inputs/StyledCodeInput';
import ResendTimer from '../components/Timers/ResendTimer';
import MessageModal from '../components/Modals/MessageModal';

const EmailVerification = () => {

    // code input
    const MAX_CODE_LENGTH = 4;
    const [code, setCode] = useState('');
    const [pinReady, setPinReady] = useState(false);

    const [verifying, setVerifying] = useState(false);

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

    const handleEmailVerification = async() => {
        try {


            setVerifying(true);

            // call backend

            setVerifying(false);
            return showModal('success', 'Verified!', 'Your email has been verified.', 'Proceed');

            
        } catch (error) {
            setVerifying(false);
            return showModal('failed', 'Failed!', error.mesasge, 'Close');
        }
    }
    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
            <IconHeader name="lock-open" style={{marginBottom: 30}}/>
            <RegularText style={{ textAlign: 'center'}}>Enter the 4-digit code sent to your email</RegularText>

            <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

            {!verifying && pinReady && <RegularButton onPress={handleEmailVerification}>Verify</RegularButton>}
            {!verifying && !pinReady && <RegularButton disabled={true} style={{backgroundColor: secondary}} textStyle={{color: lightGray}}>Verify</RegularButton>}

            {verifying && <RegularButton disabled={true}><ActivityIndicator size="small" color={primary} /></RegularButton>}

            <ResendTimer 
                activeResend={activeResend} 
                setActiveResend={setActiveResend} 
                resendStatus={resendStatus} 
                resendingEmail={resendingEmail} 
                resendEmail={resendEmail}
                />
               
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


export default EmailVerification;