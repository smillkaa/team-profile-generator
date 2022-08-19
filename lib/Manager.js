const Employee = require('./Employee')

class Manager extends Employee {
    constructor(managerName, id, email, officeNum) {
        super(id, email)
        this.managerName = managerName
        this.officeNum = officeNum
    }

    getManagerName() {
        return this.managerName
    }

    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager