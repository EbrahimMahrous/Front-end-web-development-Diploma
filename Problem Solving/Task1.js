// Q1

// 1- Ask the user to write 2 numbers and print even numbers only from sum of these 2 numbers to the Multiplying of them .

// A1

function findEvenNumbers() {
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    
  
    
    var sum = num1 + num2;
    var multiplying = num1 * num2;
    var result = console.log ("Even numbers from " + sum + " to " + multiplying + " are:" )       
    for (var i = sum; i <= multiplying; i++) {
        if (i % 2 === 0) {
            
            console.log(i);
        }
    }
}

findEvenNumbers()

// Q2

// 2- Ask the student to give you his degree in 6 Subjects and print Percentage  and (Overall rating using if condition ). (>= 85  print  excellent , >=75  print v.good , ....etc )

// A2

function calculateRating() {
    var totalMarks = 0;
    var subjects = 6;
    
    for (var i = 1; i <= subjects; i++) {
        var degree = +(prompt("Enter your degree for subject " + i + ":"));
        totalMarks += degree;
    }
    
    var percentage = (totalMarks / (subjects * 100)) * 100;
    
    console.log("Your Percentage: " + percentage.toFixed(2) + "%");
    
    if (percentage >= 85) {
        console.log("Overall Rating: Excellent");
    } else if (percentage >= 75) {
        console.log("Overall Rating: Very Good");
    } else if (percentage >= 65) {
        console.log("Overall Rating: Good");
    } else if (percentage >= 50) {
        console.log("Overall Rating: Pass");
    } else {
        console.log("Overall Rating: Fail");
    }
}

calculateRating()

// Q3

// 3- Using  prompt and   if condition  (  ask the user to enter his salary ( if it > = 17000  print "wealthy" , but from 9000 to 17000 print " rich" , else print "mashia be elsatr".

// A3

function checkSalary() {
    let salary = +((prompt("Enter your salary:")));
            
    if (salary >= 17000) {
        console.log("Wealthy");
    } else if (salary >= 9000) {
        console.log("Rich");
    } else {
        console.log("Mashia be elsatr");
    }
}
checkSalary()

// Q4

// 4- Ask the Lecturer to Give you number Of students and Name and degree of each student and print each student info in an array.

// A4

function getStudentInfo() {
    var numStudents = +((prompt("Enter the number of students:")));
    var students = [];
    
    for (var i = 0; i < numStudents; i++) {
        var name = prompt("Enter the name of student " + (i + 1) + ":");
        var degree = +((prompt("Enter the degree of " + name + ":")));
        
                    
        var student = {
            name: name,
            degree: degree
        };
        
        students.push(student);
    }
    
    console.log("Students Information:");
    console.log(students);
}

getStudentInfo()

