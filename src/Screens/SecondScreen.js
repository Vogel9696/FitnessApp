import React from "react";
import { StyleSheet, SafeAreaView ,Text} from "react-native";
import moment from 'moment';
import { TopNavigation, IndexPath, Layout, Select, SelectItem, TopNavigationAction, Icon } from "@ui-kitten/components";
import { PlanModel } from '../Models/PlanModel'
import { MuscleGroupModel } from '../Models/MuscleGroupModel'

const PlusIcon = (props) => (
	<Icon {...props} name='plus' />
);

const MockMuscleGroups = [
	new MuscleGroupModel(1, 'Chest'),
	new MuscleGroupModel(2, 'Back'),
	new MuscleGroupModel(3, 'Legs'),
	new MuscleGroupModel(4, 'Bizeps'),
	new MuscleGroupModel(5, 'Trizeps'),
];

const MockDatas = [
	new PlanModel('Plan 1', moment().format('DD/MM/YYYY'), MockMuscleGroups),
	new PlanModel('Plan 2', moment().format('DD/MM/YYYY'), MockMuscleGroups),
	new PlanModel('Plan 3', moment().format('DD/MM/YYYY'), MockMuscleGroups),
	new PlanModel('Plan 4', moment().format('DD/MM/YYYY'), MockMuscleGroups)
]

const SecondScreen = () => {

	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(1));
	const displayValue = MockDatas[selectedIndex.row].planName;

	const renderOption = (title) => (
		<SelectItem title={title.planName}/>
	  );

	const renderSelectPlan = () => (
		<React.Fragment>
			<Select
				style={{width: 150}}
				placeholder='Default'
				value={displayValue}
				selectedIndex={selectedIndex}
				onSelect={index => setSelectedIndex(index)}>
					 {MockDatas.map(renderOption)}
			</Select>
		</React.Fragment>

	);

	return (
		<React.Fragment>
			<TopNavigation
				title="Tracking"
				alignment='start'
				accessoryRight={renderSelectPlan}
			/>
			<Text>{MockDatas[selectedIndex.row].muscleGroups.length}</Text>
		</React.Fragment>
	)
}

const styles = StyleSheet.create({});


export default SecondScreen;