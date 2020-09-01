import React from "react";

export class PlanModel{
    constructor(planName, createDate, listOfMuscleGroups) {
        this.planName = planName;
        this.createDate = createDate;
        this.listOfMuscleGroups = listOfMuscleGroups;
    }
}