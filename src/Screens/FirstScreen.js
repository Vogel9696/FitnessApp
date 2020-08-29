import React from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { TopNavigation, Layout, TopNavigationAction, Icon, Card, Modal, Text, Input, Divider, List, ListItem, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { Button } from "react-native-paper";
import moment from 'moment';
import { PlanModel } from '../Models/PlanModel'

const PlusIcon = (props) => (
	<Icon {...props} name='plus' />
);

const EditIcon = (props) => (
	<Icon {...props} name='edit' />
);

const data = new Array();


const FirstScreen = () => {

	const [visible, setVisible] = React.useState(false);
	const [planName, setPlanName] = React.useState('');
	const [selectedIndex, setSelectedIndex] = React.useState([]);

	const renderAddPlanAction = () => (
		<TopNavigationAction icon={PlusIcon} onPress={() => setVisible(true)} />
	);

	const renderEditPlanAction = () => (
		<TopNavigationAction icon={EditIcon} />
	);

	function AddnewPlan() {
		data.push(new PlanModel(planName, moment().format('DD/MM/YYYY')))

		selectedIndex.forEach(element => {
			console.log(element)
		});

		setVisible(false)
	}

	const renderItem = ({ item, index }) => (
		<ListItem
			title={`${item.planName}`}
			description={`Create date: ${item.createDate}`}
			accessoryRight={renderEditPlanAction}
			style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
		/>
	);

	return (
		<React.Fragment>
			<TopNavigation
				title="Plan"
				alignment="center"
				accessoryRight={renderAddPlanAction}

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

					<Select
						multiSelect={true}
						selectedIndex={selectedIndex}
						onSelect={index => setSelectedIndex(index)}>
						<SelectItem title='Option 1' />
						<SelectItem title='Option 2' />
						<SelectItem title='Option 3' />
					</Select>

					<Layout style={{ justifyContent: 'space-around', display: 'flex' }}>
						<Button onPress={() => AddnewPlan()}>Save</Button>
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