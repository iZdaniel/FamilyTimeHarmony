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

const Login = () => {

    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark"/>   
            <InnerContainer >
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpg')}/>
                
                <PageTitle pageTitle={true}>
                    <SubTitle name="pageTitle">
                        Login
                    </SubTitle>
                </PageTitle> 

                <Formik 
                
                    initialValues={{email: '', password: ''}}
                    onSubmit={(Values) =>{ 
                    console.log(Values);
                }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea >
                    <MyTextInput 
                        label="Email Address or Username"
                        icon="mail"
                        placeholder="Enter your email here..."
                        plaeceholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * *"
                        plaeceholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword = {setHidePassword}
                    />
                    <MsgBox>...</MsgBox>

                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Login</ButtonText>
                    </StyledButton>

                    <Line />

                    <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25} />
                        <ButtonText google={true}>Sign in with Google</ButtonText>
                    </StyledButton>

                    <ExtraView>
                        <ExtraText>Don't have an account?</ExtraText>
                            <TextLink>
                                <TextLinkContent>Sign up.</TextLinkContent>
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


export default Login;