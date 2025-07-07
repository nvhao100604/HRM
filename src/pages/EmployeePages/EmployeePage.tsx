import { CustomSection } from "../../components/UI components/CustomSection"
import type { Feature } from "../../interface/feature.interface"

const employeeFeatures: Feature[] = [
    { featureId: "employeeManagement",
        featureName: "Employee management",
        featureDescription: "no1caneverknow",
        featurePath: "/employee/E-Manage"
    },
]

const EmployeePage = () =>{

    return (
        <div>
            <CustomSection currentSection="Employee" featureList={employeeFeatures}/>
        </div>
    )
}

export default EmployeePage;