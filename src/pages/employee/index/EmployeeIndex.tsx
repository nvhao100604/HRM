import type { Feature } from "../../../interface/interfaces"
import { Section } from "../../../components"

const employeeFeatures: Feature[] = [
    {
        featureId: "employeeManagement",
        featureName: "Employee management",
        featureDescription: "no1 can ever know",
        featurePath: "/employee/management"
    },
]

const EmployeeIndex = () => {
    return (
        <>
            <Section currentSection="Employee" featureList={employeeFeatures} />
        </>
    )
}

export default EmployeeIndex