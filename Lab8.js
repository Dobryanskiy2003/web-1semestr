let orgTree = {
    name: "CEO",
    employees: [
        {
            name: "CTO",
            employees: [
                { name: "Engineer1" },
                { name: "Engineer2" }
            ]
        },
        {
            name: "CFO",
            employees: [
                { name: "Accountant" }
            ]
        }
    ]
};

function searchEmployee(node, name) {
    if (node.name === name) {
        return node;
    } else if (node.employees) {
        let result = null;
        for (let i = 0; result == null && i < node.employees.length; i++) {
            result = searchEmployee(node.employees[i], name);
        }
        return result;
    }
    return null;
}

function handleInput() {
    let input = document.querySelector('#employee-input').value;
    let employee = searchEmployee(orgTree, input);
    if (employee) {
        document.querySelector('#' + employee.name).style.backgroundColor = "yellow";
    }
}
