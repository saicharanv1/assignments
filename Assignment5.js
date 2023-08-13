//Q2. Special Index
//Given an array, arr[] of size N, the task is to find the count of array indices such that 
//removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
// let ar=[2, 1, 6, 4]
// // let ar=[1, 1, 1]
// // ar = [4,3,2,7,6,-2]
// count = 0
// for(i = 0; i < ar.length; i++)
// {
//     newar = []
//     evenar = []
//     oddar = []
//     for(j = 0; j < ar.length; j++)
//     {
//         if(j != i)
//         {
//             newar.push(ar[j])
//         }
//     }

//     sum = 0
//     for(k = 0; k < newar.length; k++)
//     {
//         if(k % 2 == 0)
//         {
//             sum += newar[k]
//             evenar.push(sum)
//         }
//         else
//         {
//             evenar.push(sum)
//         }
//     }
//     sum = 0
//     for(k = 0; k < newar.length; k++)
//     {
//         if(k % 2 != 0)
//         {
//             sum += newar[k]
//             oddar.push(sum)
//         }
//         else
//         {
//             oddar.push(sum)
//         }
//     }
//     if(evenar[evenar.length -1] == oddar[oddar.length -1])
//     {
//         count ++
//     }
// }
// console.log(count)


// Example Input
// Input 1:
// A=[2, 1, 6, 4]
// Input 2:

// A=[1, 1, 1]

// Example Output
// Output 1:
// 1
// Output 2:
// 3



//---------------------------------------------------------------------------------------------------------------------




// Q3. Pick from both sides!

// Problem Description
// You are given an integer array A of size N.
// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the B elements that were removed after the B operations.
// A = [5, -2, 3 , 1, 2]
// B = 3
// A = [ 2, 3, -1, 4, 2, 1 ]
// B = 4
// let maxsum = Number.MIN_VALUE
// for(let i= B-1, L=0; i>=0 || L<= B; i--, L++)
// {
//     sum = 0
//     for(let j=0; j<= i; j++)
//     {
//         sum += A[j]
//     }
//     for(let k= A.length - L;(k <= A.length -1) && (i != B-1) ; k++)
//     {
//         sum += A[k]
//     }
//     if(maxsum < sum)
//     {
//         maxsum = sum
//     }
// }
// console.log(maxsum)


// Example Input
// Input 1:

//  A = [5, -2, 3 , 1, 2]
//  B = 3
// Input 2:

//  A = [ 2, 3, -1, 4, 2, 1 ]
//  B = 4


// Example Output
// Output 1:

//  8
// Output 2:

//  9


//---------------------------------------------------------------------------------------------------------------------




// Q1. Special Subsequences "AG"


// Problem Description
// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

// let  A = "ABCGAG"
// // let  A = "GAB"
// count = 0
// for (let i = 0; i<A.length - 1; i++)
// {
//     if(A[i] == 'A')
//     {
//         for(let j=i+1; j< A.length; j++)
//         {
//             if(A[j] == 'G')
//             {
//                 count ++
//             }
//         }
//     }
// }
// console.log(count)



// Example Input
// Input 1:

//  A = "ABCGAG"
// Input 2:

//  A = "GAB"


// Example Output
// Output 1:

//  3
// Output 2:

//  0




//---------------------------------------------------------------------------------------------------------------------




//Q2. Closest MinMax
// Problem Description
// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
// and at least one occurrence of the minimum value of the array.
// ar =[1,2,3,1,3,6,4,5,6,4,6,3]
// ar = [2, 6, 1, 6, 9]
// ar = [1, 3, 2]
// let l = ar[0]
// let s = ar[0]
// indexar = []
// for(i = 1; i < ar.length; i++)
// {
//     if(l < ar[i])
//     {
//         l = ar[i]
//     }
//     if(s > ar[i])
//     {
//         s = ar[i]
//     }
// }
// for(i = 0; i < ar.length; i++)
// {   
//     if(ar[i] == l)
//     {
//         for(j = i + 1; j < ar.length; j++)
//         {
//             if(ar[j] == s)
//             {
//                 indexar.push((j - i)+1)
//             }
//         }
//     }
//     if(ar[i] == s)
//     {
//         for(j = i+1; j < ar.length; j++)
//         {
//             if(ar[j] == l)
//             {
//                 indexar.push((j - i)+1)
//             }
//         }
//     }
// }
// smallindex = indexar[0]
// for(i = 1; i < indexar.length; i++)
// {
//     if(indexar[i] < smallindex)
//     {
//         smallindex = indexar[i]
//     }
// }

// console.log(smallindex)



// Example Input
// Input 1:

// A = [1, 3, 2]
// Input 2:

// A = [2, 6, 1, 6, 9]


// Example Output
// Output 1:

//  2
// Output 2:

//  3


//---------------------------------------------------------------------------------------------------------------------




// Q3. Bulbs

// Problem Description
// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.
// let A = [0, 1, 0, 1]
// let count = 0
// for(i = 0; i< A.length; i++)
// {
//     if(A[i] == 0)
//     {
//         for(j = i; j< A.length; j++)
//         {
//             if(A[j]==0)
//             {
//                 A[j] = 1
//             }
//             else
//             {
//                 A[j] = 0
//             }
//         }
//         count ++
//     }
// }
// console.log(count)



// Example Input
// Input 1:

//  A = [0, 1, 0, 1]
// Input 2:

//  A = [1, 1, 1, 1]


// Example Output
// Output 1:

//  4
// Output 2:

//  0


//---------------------------------------------------------------------------------------------------------------------