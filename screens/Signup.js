import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

// formik
import {Formik} from 'formik';
// Icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    Colors,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/style';


// Colors
const {brand, darkLight, primary} = Colors;

const Signup = () => {

    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark"/>   
            <InnerContainer >
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpg')}/>
                
                <PageTitle pageTitle={true}>
                    <SubTitle name="pageTitle">
                        Sign up
                    </SubTitle>
                </PageTitle> 

                <Formik 
                    
                    initialValues={{email: '', createPassword: '', confirmPassowrd: ''}}
                    onSubmit={(Values) =>{ 
                    console.log(Values);
                }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    
                <StyledFormArea iconn={true}>

                    <MyTextInput name="Icn"
                        label="Email Address or Username"
                        icon="mail"
                        placeholder="Enter your email"
                        plaeceholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <MyTextInput name="Icn"
                        label="Create Password"
                        icon="lock"
                        placeholder="Enter your password"
                        plaeceholderTextColor={darkLight}
                        onChangeText={handleChange('createPassword')}
                        onBlur={handleBlur('createPassword')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword = {setHidePassword}
                    />

                    <MyTextInput 
                        label="Confirm Password"
                        icon="lock"
                        placeholder="Confirm your password"
                        plaeceholderTextColor={darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword = {setHidePassword}
                    />

                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Sign up</ButtonText>
                    </StyledButton>

                    <Line />

                    

                    <ExtraView>
                        <ExtraText>Already have an account?</ExtraText>
                            <TextLink>
                                <TextLinkContent>  Login.</TextLinkContent>
                            </TextLink>
                    </ExtraView>

                </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={25} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={20} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
} 


export default Signup;