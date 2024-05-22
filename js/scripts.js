
function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }
    return true;
}

function validateRegistrationForm() {
    var username = document.getElementById("reg-username").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;
    var userType = document.getElementById("userType").value;
    
    if (username === "" || email === "" || password === "") {
        alert("All fields are required.");
        return false;
    }

    var usernamePattern = /^[a-zA-Z0-9]{5,12}$/;
    if (!usernamePattern.test(username)) {
        alert("Username must be 5-12 characters long and contain only letters and numbers.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters including at least one lowercase letter, one uppercase letter, one digit, and one special character.");
        return false;
    }

    alert("Registration successful!");
    window.location.href = "../html/login.html";
    return false;
}

var products = [
    { name: "Camera", price: 1000.00, image: "../images/camera.jpeg" },
    { name: "Drone", price: 2000.00, image: "../images/drone.webp" },
    { name: "iPhone", price: 300.00, image: "../images/iphone.webp" }
];

function displayProducts() {
    var productTable = document.querySelector("table");
    for (var i = 0; i < products.length; i++) {
        var row = productTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = products[i].name;
        cell2.innerHTML = "<img src='" + products[i].image + "' width='100'>";
        cell3.innerHTML = "$" + products[i].price.toFixed(2);
    }
}

window.onload = function() {
    displayProducts();
}
