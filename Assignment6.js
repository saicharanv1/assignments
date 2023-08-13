// Q1. Amazing Subarrays

// You are given a string S, and you have to find all the amazing substrings of S.

// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
// let S = "ABEC"
// let count = 0
// for(let i=0; i< S.length; i++)
// {
//     if(S[i] == "A" || S[i] == "E" || S[i] == "I" || S[i] == "O" || S[i] == "U" 
//     || S[i] == "a" || S[i] == "e" || S[i] == "i" || S[i] == "o" || S[i] == "u")
//     {
//         for(let k=S.length-1; k >= i; k--)
//         {
//             count ++
//         }
//     }
// }
// console.log(count)


// Example

// Input
//     ABEC

// Output
//     6



//---------------------------------------------------------------------------------------------------------------------




// Q2. Even Subarrays
// Problem Description
// You are given an integer array A.
// Decide whether it is possible to divide the array into one or more subarrays of even length
//  such that the first and last element of all subarrays will be even.

// Return "YES" if it is possible; otherwise, return "NO" (without quotes).
// let A = [2, 4, 8, 2]
// let A = [2, 4, 8, 7, 6]
// let A = [2,4,6,4,5,8,2,3]
// let output = 1
// if(A.length % 2 == 0)
// {
//     for(let i=0; i<A.length; i=i+2)
//     {
//         for(let j=i; j<= i+1; j++)
//         {
//             if(A[j] % 2 != 0)
//             {
//                 output = 0
//             }
//         }
//     }
// }
// else
// {
//     output = 0
// }
// if(output == 1)
// {
//     console.log("Yes")
// }
// else
// {
//     console.log("No")
// }


// Example Input
// Input 1:

//  A = [2, 4, 8, 6]
// Input 2:

//  A = [2, 4, 8, 7, 6]


// Example Output
// Output 1:

//  "YES"
// Output 2:

//  "NO"



//---------------------------------------------------------------------------------------------------------------------


// Q3. Leaders in an array



// Problem Description
// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. 
// An element is a leader if it is strictly greater than all the elements to its right side.

// NOTE: The rightmost element is always a leader.
// let ar = [16, 17, 4, 3, 5, 2]
// let ar = [5,4]
// max = ar[ar.length -1]
// console.log(max)
// for(i = ar.length -2; i >= 0; i--)
// {
//     if(ar[i] > max)
//     {
//         max = ar[i]
//         console.log(max)
//     }
// }


// Example Input
// Input 1:
//  A = [16, 17, 4, 3, 5, 2]
// Input 2:
//  A = [5, 4]


// Example Output
// Output 1:
// [17, 2, 5]
// Output 2:
// [5, 4]



//---------------------------------------------------------------------------------------------------------------------