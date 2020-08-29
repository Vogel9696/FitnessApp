import React from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { TopNavigation, Layout, TopNavigationAction, Icon, Card, Modal, Text, Input, Divider, List, ListItem } from "@ui-kitten/components";
import { Button } from "react-native-paper";

const EditIcon = (props) => (
	<Icon {...props} name='plus' />
);

const data = new Array(100).fill({
	title: 'Item',
	description: 'Description for Item',
});




const FirstScreen = () => {

	const [visible, setVisible] = React.useState(false);
	const [planName, setPlanName] = React.useState('');

	const renderBackAction = () => (
		<TopNavigationAction icon={EditIcon} onPress={() => setVisible(true)} />
	);

	const renderItem = ({ item, index }) => (
		<ListItem
			title={`${item.title} ${index + 1}`}
			description={`${item.description} ${index + 1}`}
			style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
		/>
	);

	return (
		<React.Fragment>
			<TopNavigation
				title="Plan"
				alignment="center"
				accessoryRight={renderBackAction}

			>
			</TopNavigation>

			<List
				style={styles.container}
				data={data}
				renderItem={renderItem}
			></List>

			<Modal
				visible={visible}
				backdropStyle={styles.backdrop}
				style={{ width: '80%' }}>
				<Card style={{ display: 'flex' }} disabled={true}>
					<Text>Create your plan.</Text>
					<Input
						placeholder='Name your Plan'
						value={planName}
						onChangeText={nextValue => setPlanName(nextValue)}>
					</Input>
					<Layout style={{ justifyContent: 'space-around', display: 'flex' }}>
						<Button onPress={() => setVisible(false)}>Save</Button>
						<Button onPress={() => setVisible(false)}>Cancel</Button>
					</Layout>
				</Card>
			</Modal>

		</React.Fragment>
	)
}


const styles = StyleSheet.create({
	container: {
		display: 'flex'
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FirstScreen;