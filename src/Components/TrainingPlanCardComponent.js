import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Modal, Text } from "@ui-kitten/components";


const TrainingsCard = (planData, props) => {
    return (
        <Card
            disabled={true}
            status='primary'
            style={styles?.card}
            header={(props) => <View {...props}><Text category='h6'>{planData.planData.planName}</Text></View>}
            footer={(props) => <View {...props}><Text category='c1'>Created at: {planData.planData.createDate}</Text></View>}
        >
        </Card>
    )
}

const styles = StyleSheet.create();

export default TrainingsCard;