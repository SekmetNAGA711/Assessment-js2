///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

// //CODE HERE

const summedPrice = cart.reduce((acc, item)=>(acc + item.price),0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const cartTotal = cart.reduce(function(acc,curr){
     return acc + curr.price
},0)


function calcFinalPrice(total, tax, couponValue) {
    return (total * tax) + total - couponValue
     
}

console.log(calcFinalPrice(cartTotal, 0.06, 5))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Making an online order from a resturant

1. customers name (first and last): (String)
 This will be a string so we can take in a customer name.

2. customer email: (String) 
This will be a string so we can send the customer a confirmation of their order. Customer email is also helpful for matching the customer's name with the email and order, ensuring we have the right person.

3. customer address: (String) 
Customer address will be a string to take in the customer's address so we know where to send their order.

4. payment card type: (tag array)
The payment card type will be a tag array. The customer will select Mastercard, Visa, Discover, or American Express so that we can match the card number for processing.

5. card Number: (Number)
Card Number will be a number to take in the customer's credit card number.

6. delivery zip code: (array of numbers)
Delivery zip code will be an array of numbers of zip codes that are within our delivery scope. The customer will enter their zip code. If their zip matches our delivery scope, we can deliver.
*/ 

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let onlineDelivery = {
    firstandLastName: "Emma Peterson",
    customerEmail: "bena.ao310@gmail.com",
    customerAddress: "24787 spring mill dr",
    paymentCardTypeTags: ['Mastercard', 'Visa', 'Discover', 'American express' ],
    cardNumber: 98084837567645,
    deliveryZipcode: [22033, 20105, 20177, 22038,]
}
