const getEmployerRole = (employeeName, employees) => {
    const employee = employees.filter(employee => employee.name === employeeName);

    return employee.length === 1 ? employee[0].role : `There is no employee called ${employeeName}`;
};

module.exports = getEmployerRole;
