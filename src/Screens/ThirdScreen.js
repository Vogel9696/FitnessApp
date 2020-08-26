import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import {TopNavigation, Layout } from "@ui-kitten/components";

const FirstScreen = () => {
    return (
<Layout style={{ flex: 1 }}>
			<SafeAreaView style={{ backgroundColor: '#1b1b1b' }}>
			<TopNavigation style={{ backgroundColor: '#1b1b1b' }} title="Third View" alignment="center" />
			</SafeAreaView>
		</Layout>
    )
}

const styles = StyleSheet.create({});


export default FirstScreen;