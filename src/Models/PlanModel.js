import React from "react";

export class PlanModel{
    constructor(planName, createDate) {
        this.planName = planName;
        this.createDate = createDate;
        this.muscleGroups = new Array();
      }
}