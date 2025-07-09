import { Section } from "../../components/UI components";
import type { Feature } from "../../interface/feature.interface"

const employeeFeatures: Feature[] = [
    { featureId: "employeeManagement",
        featureName: "Employee management",
        featureDescription: "no1caneverknow",
        featurePath: "/employee/E-Manage"
    },
]

function EmployeePage(){

    return (
        <div>
            <Section currentSection="Employee" featureList={employeeFeatures}/>
        </div>
    )
}

export default EmployeePage;