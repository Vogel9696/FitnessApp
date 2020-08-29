import React from "react";
import { StyleSheet, SafeAreaView, Dimensions, View } from "react-native";
import { TopNavigation, Layout, TopNavigationAction, Icon, Card, Modal, Text, Input, Divider, List, ListItem, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { Button } from "react-native-paper";
import moment from 'moment';
import { PlanModel } from '../Models/PlanModel'
import { MuscleGroupModel } from '../Models/MuscleGroupModel'

const PlusIcon = (props) => (
	<Icon {...props} name='plus' />
);

const EditIcon = (props) => (
	<Icon {...props} name='edit' />
);

const data = new Array();

const dmus = [
	new MuscleGroupModel(1, 'Chest'),
	new MuscleGroupModel(2, 'Back'),
	new MuscleGroupModel(3, 'Legs'),
	new MuscleGroupModel(4, 'Bizeps'),
	new MuscleGroupModel(5, 'Trizeps'),
];

const FirstScreen = () => {

	const [visible, setVisible] = React.useState(false);
	const [planName, setPlanName] = React.useState('');

	const [selectedIndex, setSelectedIndex] = React.useState([]);


	const displayValue = selectedIndex.map(index => {
		return dmus[index.row].muscleGroupName;
	});

	const getMuscleGroupsFromSelectedMuscles = selectedIndex.map(index => {
		return dmus[index.row];
	});


	const renderOption = (title) => (
		<SelectItem title={title.muscleGroupName} />
	);

	const renderAddPlanAction = () => (
		<TopNavigationAction icon={PlusIcon} onPress={() => setVisible(true)} />
	);

	const renderEditPlanAction = () => (
		<TopNavigationAction icon={EditIcon} />
	);

	function AddnewPlan() {
		data.push(new PlanModel(planName, moment().format('DD/MM/YYYY'), getMuscleGroupsFromSelectedMuscles))
		setVisible(false)
	}

	const renderPlanAsCard = ({ item, index }) => (

		<Card
		disabled={true}
			status='primary'
			style={styles?.card}
			header={(props) => <View {...props}><Text category='h6'>{item?.planName}</Text></View>}
			footer={(props) => <View {...props}><Text category='s1'>Created at: {item?.createDate}</Text></View>}
		>
			<List
			 contentContainerStyle={styles.contentContainer}
				data={item?.muscleGroups}
				renderItem={renderItem}
			>
			</List>
		</Card>
	);

	const renderItem = ({ item, index }) => (
		<ListItem disabled={true} title={`${item.muscleGroupName}`}></ListItem>
	  );

	return (
		<React.Fragment>

			<TopNavigation
				title="Plan"
				alignment="center"
				accessoryRight={renderAddPlanAction}

			></TopNavigation>

			<List
				style={styles.container}
				data={data}
				renderItem={renderPlanAsCard}
			>
			</List>

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
						style={styles.select}
						placeholder='Default'
						multiSelect='true'
						value={displayValue.join(', ')}
						selectedIndex={selectedIndex}
						onSelect={index => setSelectedIndex(index)}>
						{dmus.map(renderOption)}
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
	card: {
		flex: 1,
		margin: 10,
	},
	contentContainer: {
		paddingHorizontal: 8,
		paddingVertical: 4,
	  },
});

export default FirstScreen;