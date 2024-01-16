"use strict";
let cl = console.log;
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.employees = [];
    }
    describe() {
    }
    hireEmp(emp) {
    }
    static getInstance(dName, dId) {
        if (Department.instanceofDepartment) {
            return this.instanceofDepartment;
        }
        else {
            this.instanceofDepartment = new Department(dName, dId);
        }
    }
}
// cl(Department.instanceofDepartment)
Department.getInstance("IT", "D-456");
cl(Department.instanceofDepartment);
//=================================================//
