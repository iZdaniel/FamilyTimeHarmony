
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';


// Import Tabs Component 
import Tabs from './Tabs';

 

const TabScreen = () => {
    return(
        <NavigationContainer>
            <Tabs />    
        </NavigationContainer>
    );
}
 

export default TabScreen;