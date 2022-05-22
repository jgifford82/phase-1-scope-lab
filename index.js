// Write your solution in this file!
var customerName = 'bob'

// This actually changes the value stored in the variable instead of just returning the capitalized value.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Voldemort'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob';
}

// Failed attempts to solve second test:
// function setBestCustomer() {
//     var bestCustomer = ('not bob');
//     return bestCustomer;
// }

// function setBestCustomer(bestCustomer = 'not bob') {
//     return bestCustomer;
// }



// Failed attempts to solve second test.
// function upperCaseCustomerName(customerName) {
//     return toUpperCase(customerName);
// }

// function upperCaseCustomerName(customerName) {
//     return customerName.toUpperCase();
// }

// function upperCaseCustomerName(customerName) {
//     let result = customerName.toUpperCase();
//     return result;
// }

// function upperCaseCustomerName() {
//     let result = customerName.toUpperCase();
//     return result;
// }

// function upperCaseCustomerName() {
//     customerName.toUpperCase();
// }

// function upperCaseCustomerName() {
//     return customerName.toUpperCase();
// }

// function upperCaseCustomerName() {
//     var customerName = toUpperCase();
// }

// function upperCaseCustomerName(name) {
//     var customerName = name.toUpperCase();
// }

// function upperCaseCustomerName(name) {
//     var customerName = (name.toUpperCase());
// }