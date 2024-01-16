let cl=console.log;


class Department{
    employees:Array<string>=[];
    static instanceofDepartment:Department;
    private constructor(public dName:string, private readonly dId:string){

    }
    public describe(){

    }
    hireEmp(emp:string){

    }
    static getInstance(dName:string, dId:string){
        if (Department.instanceofDepartment){
            return this.instanceofDepartment
        }else{
            this.instanceofDepartment=new Department(dName,dId)
        }
    }


}

// cl(Department.instanceofDepartment)

Department.getInstance("IT","D-456");
cl(Department.instanceofDepartment)

//=================================================//




