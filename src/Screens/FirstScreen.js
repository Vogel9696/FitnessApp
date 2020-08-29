import React from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import { TopNavigation, Layout, TopNavigationAction, Icon, Card, Modal, Text, Input } from "@ui-kitten/components";
import { Button } from "react-native-paper";

const EditIcon = (props) => (
	<Icon {...props} name='plus' />
);

const FirstScreen = () => {

	const renderBackAction = () => (
		<TopNavigationAction icon={EditIcon} onPress={() => setVisible(true)} />
	);

	const [visible, setVisible] = React.useState(false);
	const [planName, setPlanName] = React.useState('');


	return (
		<Layout>
			<SafeAreaView>
				<TopNavigation
					title="Plan"
					alignment="center"
					accessoryRight={renderBackAction}

				>
				</TopNavigation>

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

			</SafeAreaView>
		</Layout>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
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