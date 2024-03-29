import React, {useState, useEffect} from 'react'

import styled from 'styled-components/native';
import { colors } from '../colors';
const {brand, red, green} = colors;

import SmallText from '../Text/SmallText';
import PressableText from '../Text/PressableText';
import RowContainer from '../Containers/RowContainer';

const StyledView = styled.View `
    align-items: center;
`

const ResendText = styled(SmallText)`
    color: ${brand};
    ${(props) => {
        const {resendStatus} = props;
        if (resendStatus == 'Failed!') {
            return `color: ${red}`;
        } else if (resendStatus == 'Sent!') {
            return `color: ${green}`;
        }
    }}

`


const ResendTimer = ({activeResend, setActiveResend, targetTimeInSeconds, resendEmail, resendStatus, ...props}) => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    
    let resendTimerInterval;

    const triggerTimer = (targetTimeInSeconds = 30) => {
        setTargetTime(targetTimeInSeconds);
        setActiveResend(false);

        const finalTime = +new Date() + targetTimeInSeconds * 1000;
        resendTimerInterval = setInterval(() => calculateTimeLeft(finalTime), 1000);
    }

    const calculateTimeLeft = (finalTime) => {
        const difference = finalTime - +new Date();
        if (difference >= 0) {
            setTimeLeft(Math.round(difference / 1000))
        } else {
            clearInterval(resendTimerInterval);
            setActiveResend(true);
            setTimeLeft(null);
        }
    }

    useEffect(() => {
        triggerTimer(targetTimeInSeconds)
        
        return () => {
            clearInterval(resendTimerInterval);
        }
    }, []);

    return (
        <StyledView {...props}>
            <RowContainer  >
                <SmallText>Didn't receive the email?</SmallText>
                <PressableText 
                    onPress={() => resendEmail(triggerTimer)} 
                    disabled={!activeResend} 
                    style={{opacity: !activeResend ? 0.65 : 1}} 
                >
                    <ResendText resendStatus={resendStatus}>{ resendStatus }</ResendText>
                </PressableText>
            </RowContainer>

            {!activeResend && (
                <SmallText>
                    in <SmallText style={{fontWeight: 'bold'}}>{timeLeft || targetTime}</SmallText> second(s)
                </SmallText>
            )}
        </StyledView>
    );
};


export default ResendTimer;