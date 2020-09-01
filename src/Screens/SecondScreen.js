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
	return (
		<React.Fragment>
			<TopNavigation
				title="Tracking"
				alignment='start'
			/>
		</React.Fragment>
	)
}

const styles = StyleSheet.create({});


export default SecondScreen;