import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import {TopNavigation, Layout } from "@ui-kitten/components";

const FirstScreen = () => {
    return (
<Layout>
			<SafeAreaView>
				<TopNavigation title="Second View" alignment="center" />
			</SafeAreaView>
		</Layout>
    )
}

const styles = StyleSheet.create({});


export default FirstScreen;