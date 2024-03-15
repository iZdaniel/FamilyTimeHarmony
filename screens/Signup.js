import React, { useState } from 'react'
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { colors } from '../components/colors';
const {primary} = colors;

// Customs components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import BigText from '../components/Text/BigText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Text/MsgBox';
import RegularButton from '../components/Buttons/RegularButtons'
import PressableText from '../components/Text/PressableText';
import RowContainer from '../components/Containers/RowContainer';
import PageLogo from '../components/PageLogo';
import { InnerContainer } from '../components/style';




const Signup = () => {

    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    const handleSignup = async(creadentials, setSubmitting) => {
        try {
            setMessage(null);

            // call backend
           
            // move to next page

            setSubmitting(false);
        } catch (error) {
            setMessage('Signup failed' + error.message);
            setSubmitting(false);
        }
    }
    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpg')}/>
            </InnerContainer>
                <BigText style={{marginBottom: 25}}>Sign up</BigText>

            <Formik 
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.email == "" || values.password == "" || values.confirmPassword == "") {
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    } else if ( values.password !== values.confirmPassword) {
                        setMessage('Password do not match');
                        setSubmitting(false);
                    } else {
                       handleSignup(values, setSubmitting);
                    }
                }}
            >

                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <>
                        <StyledTextInput 
                            label="Email Address" 
                            icon="email" 
                            placeholder="Enter email here..."
                            keyboardType="email-address"
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value={values.email}
                            style={{marginBottom: 25}}
                            />
            
                        <StyledTextInput 
                            label="Password" 
                            icon="lock" 
                            placeholder="* * * * * * * *"
                            onChangeText = {handleChange('password')}
                            onBlur = {handleBlur('password')}
                            value={values.password}
                            isPassword={true}
                            style={{marginBottom: 25}}  
                           />

                        <StyledTextInput 
                            label="Confirm Password" 
                            icon="lock" 
                            placeholder="* * * * * * * *"
                            onChangeText = {handleChange('confirmPassword')}
                            onBlur = {handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            isPassword={true}
                            style={{marginBottom: 15}}  
                           />
                           
                        <MsgBox style={{marginBottom: 5}} success={isSuccessMessage}> {message || ''} </MsgBox>

                        {!isSubmitting && <RegularButton onPress={handleSubmit}>Signup</RegularButton>}
                        {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size="small" color={primary} /></RegularButton>}
                        
                        

                        <RowContainer>
                            <PressableText onPress={() => {}}>Sign in to an existing account</PressableText>
                        </RowContainer>
                    </>

                )}

            </Formik>
          
        </KeyboardAvoidingContainer>
    </MainContainer>
    );
}


export default Signup;