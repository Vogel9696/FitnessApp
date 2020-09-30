import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { TopNavigation, Layout, TopNavigationAction, Icon, Card, Modal, Text, Input, Divider, List, ListItem, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import nextId from "react-id-generator";
import { Button } from "react-native-paper";

const TrainingsCard = (planData, props) => {

    const [visible, setVisible] = React.useState(false);

    console.log(planData.planData.listOfMuscleGroups);

    const EditIcon = (props) => (
        <Icon {...props} name='edit' />
    );


    const renderFlatListGymnastics = ({ item, index }) => (
        <ListItem

            title={() => <Text category='s2'>    - {item.gymnasticName}</Text>}
        ></ListItem>
    )

    const renderFlatListMuscleGroups = ({ item, index }) => (
        <>
            <ListItem
                title={() => <Text category='h6'>{item.muscleGroupName}</Text>}
                accessoryRight={() =>   <TopNavigationAction onPress={() => setVisible(true)}  icon={EditIcon}></TopNavigationAction>}
            >
            </ListItem>
            <FlatList
                data={item?.listOfGymnastics}
                renderItem={renderFlatListGymnastics}
                keyExtractor={item => nextId()}
            />
        </>
    )



    return (
        <Card
            disabled={true}
            style={styles?.card}
            keyExtractor={planData.planData.planName}
            header={(props) => <View {...props}><Text category='h6'>{planData.planData.planName}</Text></View>}
            footer={(props) => <View {...props}><Text category='c1'>Created at: {planData.planData.createDate}</Text></View>}
        >

            <FlatList
                style={styles.card}
                data={planData.planData.listOfMuscleGroups}
                renderItem={renderFlatListMuscleGroups}
                keyExtractor={item => nextId()}
            />

        </Card>        
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10
    },
});

export default TrainingsCard;