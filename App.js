import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

//import screens
import Login from './screens/Login';
import Signup from './screens/Signup';


const App = () => {
  return(
    <NavigationContainer>
     <Tabs/>
    </NavigationContainer>
  );
}


export default App;
  
