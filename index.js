// Write your solution in this file!
const employee = {
    name: 'Trent',
    streetAddress: '6811 Quander Rd',
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
        ...employee,
        [key]: value,
}
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value,) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key,) {
    const newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee
};