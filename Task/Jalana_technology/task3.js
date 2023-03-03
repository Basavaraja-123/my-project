// Given an input string, write a function that returns the Run Length Encoded string for the input string.
// For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6”


function printRLE(str){
    let n = str.length;
     for (let i = 0; i < n; i++) {

        // Count occurrences of current character
        let count = 1;
        while (i < n - 1 && str[i] == str[i+1]) {
            count++;
            i++;
        }
         
        // Print character and its count
        console.log(str[i]);
        console.log(count);
    }
}
 
let str = "wwwwaaadexxxxxxywww";
printRLE(str);