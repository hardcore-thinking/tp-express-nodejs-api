let users = [
    {
        id: 0,
        firstName: "admin",
        lastName: "admin"
    },
    {
        id: 1,
        firstName: "Ynov",
        lastName: "Campus"
    },
    {
        id: 2,
        firstName: "Alexy",
        lastName: "MANSUY"
    },
    {
        id: 3,
        firstName: "Jeanmi",
        lastName: "Dutraiz"
    },
    {
        id: 4,
        firstName: "Philippe",
        lastName: "Dutronc"
    }
]

exports.getUsers = () => {
    return users;
}

exports.getUserById = (id) => {
    return users.find((user) => user.id === id);
}

exports.addUser = (firstName, lastName) => {
    users.push({
        id: users.length,
        firstName: firstName !== undefined ? firstName : null,
        lastName: lastName !== undefined ? lastName : null
    });
}

exports.updateUser = (id, firstName, lastName) => {
    console.log(users.findIndex((user) => user.id === id))
    if (firstName !== undefined) {
        users[users.findIndex((user) => user.id === id)]['firstName'] = firstName;
    }

    if (lastName !== undefined) {
        users[users.findIndex((user) => user.id === id)]['lastName'] = lastName;
    }
}

exports.deleteUserById = (id) => {
    users.splice(users.findIndex((user) => user.id === id), 1);
}