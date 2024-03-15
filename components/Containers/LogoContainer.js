import React from 'react'

import styled from 'styled-components/native';



const InnerContainer = styled.View `
    width: 100%;
    align-items: center;
`


const LogoContainer = (props) => {
    return <InnerContainer {...props}>{props.children}</InnerContainer>;
}


export default LogoContainer;