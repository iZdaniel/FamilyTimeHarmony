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

const ForgotPassword = () => {

    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    const handleOnSubmit = async(creadentials, setSubmitting) => {
        try {
            setMessage(null);

            // call backend

            // move to next page

            setSubmitting(false);
        } catch (error) {
            setMessage('Request failed' + error.message);
            setSubmitting(false);
        }
    }
    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
           
            <IconHeader name={'key'} style={{marginBottom: 30}} />
            
            <RegularText>Provide the details below to begin the process</RegularText>
            
            <Formik 
                initialValues={{ email: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.email == 's') {
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    } else {
                       handleOnSubmit(values, setSubmitting);
                    }
                }}
            >

                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <>
                        <StyledTextInput 
                            label="Email Address" 
                            icon="email" 
                            placeholder="famtimeharmony@gmail.com"
                            keyboardType="email-address"
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value={values.email}
                            style={{marginBottom: 25}}
                            />
            
                        
                           
                        <MsgBox style={{marginBottom: 5}} success={isSuccessMessage}> {message || ''} </MsgBox>

                        {!isSubmitting && <RegularButton onPress={handleSubmit}>Submit</RegularButton>}
                        {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size="small" color={primary} /></RegularButton>}

                       
                    </>

                )}

            </Formik>
          
        </KeyboardAvoidingContainer>
    </MainContainer>
    );
}


export default ForgotPassword;