import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { TopNavigation, Layout,TopNavigationAction, Icon } from "@ui-kitten/components";
import { Button } from "react-native-paper";

const EditIcon = (props) => (
	<Icon {...props} name='edit'/>
  );

  const FirstScreen = () => {

	const renderBackAction = () => (
		<TopNavigationAction style={{backgroundColor: 'white', width: 15, height:15}} Icon={EditIcon} onPress={() => console.log("Hallo")} />
	  );


	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={{ backgroundColor: '#1b1b1b' }}>

				<TopNavigation 
				style={{ backgroundColor: '#1b1b1b' }} 
				title="Plan"
				 alignment="center"
				 accessoryRight={renderBackAction}
				 subtitle="test"
				 >
				</TopNavigation>
				
			</SafeAreaView>
		</Layout>
	)
}


const styles = StyleSheet.create({
	container: {
	  minHeight: 128,
	},
  });

  export default FirstScreen;