import { CurrentRenderContext } from '@react-navigation/native';
import * as React from 'react';
import{ View, Text } from 'react-native';

export default function HomeScreen({navigation}) {
    retur(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Home Screen 
            </Text>
        </View>
    );
}