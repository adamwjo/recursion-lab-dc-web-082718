// Code your solution here!




function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        let newWord = string.substring(1)
        printString(newWord)
    }else {
        return true 
    }
}

function reverseString(str) {
    if (str === "") {
        return ""
    }else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}
    