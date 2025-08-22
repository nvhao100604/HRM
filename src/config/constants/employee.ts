import type { RadioItems } from "../../interface/interfaces";

///Employee status enum
const EMPLOYEE_ACTIVE_STATUS = "ACTIVE";
const EMPLOYEE_INACTIVE_STATUS = "INACTIVE";
const EMPLOYEE_PROBATION_STATUS = "PROBATION";
const EMPLOYEE_SUSPENDED_STATUS = "SUSPENDED";
const EMPLOYEE_TERMINATED_STATUS = "TERMINATED";
///Employee gender
const MALE = "Male";
const FEMALE = "Female";
const OTHER = "Other";


const genderOption: RadioItems[] = [
    { id: MALE, label: MALE },
    { id: FEMALE, label: FEMALE },
    { id: OTHER, label: OTHER }
]

export {
    EMPLOYEE_ACTIVE_STATUS,
    EMPLOYEE_INACTIVE_STATUS,
    EMPLOYEE_PROBATION_STATUS,
    EMPLOYEE_SUSPENDED_STATUS,
    EMPLOYEE_TERMINATED_STATUS,
    genderOption,
    MALE,
    FEMALE,
    OTHER
}