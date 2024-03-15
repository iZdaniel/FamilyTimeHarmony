import React from 'react'

import styled from 'styled-components/native';


const StyledView = styled.View `
    justifyContent: space-between;
    align-items: center;
    margin-top: 10px;
`


const RowContainer = (props, children) => {
    return <StyledView {...props}>{props.children}</StyledView>;
}


export default RowContainer;