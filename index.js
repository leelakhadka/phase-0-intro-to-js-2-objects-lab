function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee = { name: 'Sam' }
    employee[key] = value;
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee };
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}