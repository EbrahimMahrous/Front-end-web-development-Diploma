// Q1 

function linearSearch(list , target){
    for(var i =0 ; i <= list.length ; i++){
        if(list[i]==target){
            return i
        }
    }
    return -1 
}

console.log(linearSearch([1, 3, 5, 7, 9], 5)) //2
console.log(linearSearch([1, 3, 5, 7, 9], 6)) //-1


// Q2

function isPrime(number) {
    if (number <= 1) {
        return false
    } else if (number == 2) {
        return true
    } else if (number % 2 == 0) {
        return false
    } else {
        for (var i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                return false
            }   
            }
            return true
    }
}

function sumPrimes(array){
    var sum =0
       for(var i =0 ; i < array.length; i++){
        if(isPrime(array[i])){
            sum += array[i]
        }
       }
       return sum
}

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //17
console.log(sumPrimes([2, 3, 4, 11, 20, 50, 71])) //87
console.log(sumPrimes([]))  //0


// Q3

function isPrime(number) {
    if (number <= 1) {
        return false
    } else if (number == 2) {
        return true
    } else if (number % 2 == 0) {
        return false
    } else {
        for (var i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                return false
            }   
            }
            return true
    }
}

function primeNumbers(number){
    var count =0
    for(var i=0 ; i <= number ;i++){
        if(isPrime(i)){
           count++
        }
    }
    return count
}
console.log(primeNumbers(10)) //4
console.log(primeNumbers(20)) //8
console.log(primeNumbers(30)) //10

// Q4

var number =prompt("Enter a Number:")
for(var i=0 ; i<=number ;i++){
    if(i%2==0){
        console.log(i)
    }
}

// Q5

function weeklySalary(list){
    var totalWeeklySalary = 0;

    for(var i=0 ; i < list.length ; i++){
      if (i < 5) {
        totalWeeklySalary += Math.min(list[i], 8) * 10; 
        totalWeeklySalary += Math.max(list[i] - 8, 0) * 15; 
        } else {
            totalWeeklySalary += Math.min(list[i], 8) * 20; 
            totalWeeklySalary += Math.max(list[i] - 8, 0) * 30; 
        }
    }
    return totalWeeklySalary;
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])) //400
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])) //410
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])) //280