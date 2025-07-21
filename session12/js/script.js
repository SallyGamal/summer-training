var count = prompt("Enter number of users:");
var users = [];
var num = Number(count);

function addUser(num) {
    for (var i = 0; i < num; i++) {
        var name = String(prompt("Enter name:"));
        var id = String(prompt("Enter ID:"));
        var balance = String(prompt("Enter balance:"));
        users.push({ Name: name, Id: id, Balance: balance });
    }
    console.table(users);
}

addUser(num);

var d = String(prompt("Enter ID to edit balance:"));
var b = String(prompt("Enter the new balance:"));

function editUserBalance(idToEdit, newBalance) {
    if (!idToEdit || !newBalance) {
        console.log("Missing data for edit.");
        return;
    }

    var user = users.find((item) => item.Id === idToEdit);
    if (user) {
        user.Balance = newBalance;
        console.log("Balance updated:");
    } else {
        console.log("User not found for editing.");
    }
    console.table(users);
}

editUserBalance(d, b);

var deleteId = String(prompt("Enter ID to delete:"));

function deleteUser(idToDelete) {
    if (!idToDelete) {
        console.log("No ID entered for deletion.");
        return;
    }

    var index = users.findIndex((item) => item.Id === idToDelete);
    if (index !== -1) {
        users.splice(index, 1);
        console.log("User deleted:");
    } else {
        console.log("User not found for deletion.");
    }
    console.table(users);
}

deleteUser(deleteId);