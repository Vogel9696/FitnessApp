import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SecondScreen from "./src/Screens/SecondScreen";
import FirstScreen from "./src/Screens/FirstScreen";
import ThirdScreen from "./src/Screens/ThirdScreen";
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, BottomNavigation, BottomNavigationTab, Icon ,TopNavigationAction,TopNavigation} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const PlanIcon = (props) => (
  <Icon {...props} name='map-outline' />
);

const BellIcon = (props) => (
  <Icon {...props} name='copy-outline' />
);

const AnalyticsIcon = (props) => (
  <Icon {...props} name='activity-outline' />
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

function StartView() {

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Plan' icon={PlanIcon} />
      <BottomNavigationTab title='Tracking' icon={BellIcon} />
      <BottomNavigationTab title='Analytics' icon={AnalyticsIcon} />
    </BottomNavigation>
  );

  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Plan' component={FirstScreen} />
      <Screen name='Tracking' component={SecondScreen} />
      <Screen name='Analytics' component={ThirdScreen} />
    </Navigator>
  );
  return (
    <TabNavigator />
  );
}


function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#212121' }}>
        <ApplicationProvider  {...eva} theme={{ ...eva.dark }}>
          <NavigationContainer >
            <StartView ></StartView>
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavigation: {
    marginVertical: 8,
  },
});
