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
import GoogleButtons from '../components/Buttons/GoogleButtons';

const Login = () => {

    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    const handleLogin = async(creadentials, setSubmitting) => {
        try {
            setMessage(null);

            // call backend

            // move to next page

            setSubmitting(false);
        } catch (error) {
            setMessage('Login failed' + error.message);
            setSubmitting(false);
        }
    }
    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpg')}/>
            </InnerContainer>
                <BigText style={{marginBottom: 25}}>Login</BigText>

            <Formik 
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.email == "" || values.password == "") {
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    } else {
                       handleLogin(values, setSubmitting);
                    }
                }}
            >

                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <>
                        <StyledTextInput 
                            label="Email Address" 
                            icon="email" 
                            placeholder="Enter your email here..."
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
                            style={{marginBottom: 15}}  
                           />
                           
                        <MsgBox style={{marginBottom: 5}} success={isSuccessMessage}> {message || ''} </MsgBox>

                        {!isSubmitting && <RegularButton onPress={handleSubmit}>Login</RegularButton>}
                        {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size="small" color={primary} /></RegularButton>}
                        
                        <GoogleButtons google={true} onPress={handleSubmit}>
                           
                        </GoogleButtons>

                        <RowContainer>
                            <PressableText onPress={() => {}}>Don't have an account? Signup</PressableText>
                            <PressableText onPress={() => {}}>Forgot Password</PressableText>
                        </RowContainer>
                    </>

                )}

            </Formik>
          
        </KeyboardAvoidingContainer>
    </MainContainer>
    );
};


export default Login;