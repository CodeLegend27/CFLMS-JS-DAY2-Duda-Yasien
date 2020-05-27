/* BASIC 1
Write a function named crystalGazer() that takes four arguments: number of children, partner's 
name, geographic
 location and job title.
 Once the user passes the four arguments the program should output the following message on screen:

You will be a job_title in location and married to partners_name with number_childrens.

function crystalGazer(number_of_children, partners_name, location, job_title) {
    document.write("You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_of_children + "children <br>")

}
crystalGazer(100, "Frau Holle&Snoopy", "Buxdehude", "Anschaffer")


function Age_Calculator(birth_year, current_year){
    var age = current_year-birth_year;
    document.write("You are either " + age + " or " + (age-1) + " years old<br>");
}
Age_Calculator(1875, 2020);

function Enhanced_Age_Calculator(birth_year){
    var current_date = new Date();
    var age = current_date.getFullYear() - birth_year;    
    document.write("You are either " + age + " or " + (age-1) + " years old<br>");

}
Enhanced_Age_Calculator(1873);

function Enhanced_Age_Calculator(birth_year){
    var current_date = new Date();
    var age = current_date.getFullYear() - birth_year;    
    return(age);

}
var faked_age = Enhanced_Age_Calculator(2000) + 75;
document.write(faked_age);
*/


/*
Basic 2 | Age Calculator
Write a function called ageCalculator() that takes two arguments birth year and current year. 
Calculate 2 possible ages based on those
 years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28 */




/*
Basic 3 | Age Calculator-improved
Enhance your previous exercise in terms of how to get the current year in JavaScript instead of
 passing it in. 
Provide the same results just 
through passing one argument.

You should get the following results:

You are either 29 or 28*/

/*
Basic 4 | Degree-Radian Conversion
Create a JavaScript function that converts degrees to radians. The function accepts one argument,
 the degrees,
 and outputs the radians based on
 them. The formula for converting degrees to radians is: "degrees * (pi/180)"

E.g. If user passes 90 degrees it should get the result of 1.57079 radians



function Degree_Radian_Conversion(degrees){
   return(degrees * (Math.PI/180));
}
document.write(Degree_Radian_Conversion(90));*/


/*
Basic 5 | Area and Volume of a box
Create a function that calculates the area and volume of a box.

Formulas:

area = width x height

volume = width x height x depth

Pass three different numbers as arguments and get calculated results using the return statement.

You should get the following results:

The area of the box is: 14

The volume of the box is: 70


function Area_Volume(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    var result = [area, volume];
    return(result);
 }
 document.write("Area= " +  Area_Volume(5, 7)[0]);
 document.write("<br>Volume= " +  Area_Volume(5, 7, 10)[1]);
 */
/*
function Product_Array(arr) {
    var result = 1;
    document.write(arr.length);
    for (i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return (result);
}
my_arr = [1, 3, 7, 10, 2, 10];
document.write("<br>Product of Array= " + Product_Array(my_arr));
*/

/*
1 Intermediate | Capitalize
Write an anonymous JavaScript function to capitalize only the first letter of a string. 
The function accepts only one string argument.

E.g. If we pass the following string 'i am a web developer' we should get the message 
'I am a web developer'

Hint: Check JavaScript String charAt() Method
*/


var alf = (function() {

    var text = "am a web developer"

    var text2 = "i"

    text2 = text2.toUpperCase()

    return text2 + text
}())


document.write(alf)


/*

Basic 6 | Product
Create a JavaScript function to calculate the product of the values in an array. You can have 
as many values in an array as you want.

E.g. If we pass the following values 1, 3, 7, 10, 2 we should get the number 420 printed on the
 screen.*/
/*
 1 Intermediate | Capitalize
Write an anonymous JavaScript function to capitalize
 only the first letter of a string. The function accepts only one string argument.

E.g. If we pass the following string 'i am a web developer' we should
 get the message 'I am a web developer'

Hint: Check JavaScript String charAt() Method*/