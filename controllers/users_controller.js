const { getUsers, getUserById, addUser, updateUser, deleteUserById } = require("../services/users_services");


exports.getUsers = (request, response) => {
    console.log("GET request received for /users");
    response.status(200).json({
        status: 200,
        users: getUsers()
    });
}

exports.getUserById = (request, response) => {
    console.log(`GET request received for /users/${request.params.id}`);
    if (!getUsers().map((user) => user.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    }
    else {
        response.status(200).json({
            status: 200,
            book: getUserById(parseInt(request.params.id))
        });
    }
}

exports.addUser = (request, response) => {
    console.log(`POST request received for /users`);
    addUser(request.body.firstName !== undefined ? request.body.firstName : null,
            request.body.lastName !== undefined ? request.body.lastName : null);
    response.status(201).json({
        status: 201,
        details: "The user has been added successfully"
    });
}

exports.updateUser = (request, response) => {
    console.log(`PUT request received for /users/${request.params.id}/update`);
    if (!getUsers().map((user) => user.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    } else {
        updateUser(parseInt(request.params.id), request.body.firstName, request.body.lastName);
        response.status(200).json({
            status: 200,
            details: "The user has been updated successfully"
        });          
    }
}

exports.deleteUserById = (request, response) => {
    console.log(`DELETE request received for /users/${request.params.id}/delete`);
    if (!getUsers().map((user) => user.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    }
    else {
        deleteUserById(parseInt(request.params.id));
        response.status(200).json({
            status: 200,
            details: "The user has been deleted successfully"
        });
    }
}