import * as React from 'react';
import {View,Button} from 'react-native'
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Sign Up')}
          title="Go to notifications"
        />
      </View>
    );
  }
export default HomeScreen;