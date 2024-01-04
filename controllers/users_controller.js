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
    if (request.body.firstName === undefined && request.body.lastName === undefined) {
        response.status(400).json({
            status: 400,
            details: "No datas were provided for the user creation"
        });
    } else {
        addUser(request.body.firstName, request.body.lastName);
        response.status(201).json({
            status: 201,
            details: "The user has been added successfully"
        });
    }
}

exports.updateUser = (request, response) => {
    console.log(`PUT request received for /users/${request.params.id}/update`);
    if (!getUsers().map((user) => user.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    } else if (request.body.firstName === undefined && request.body.lastName === undefined) {
        response.status(304).json({
            status: 304,
            details: "No datas were provided for the user datas update"
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