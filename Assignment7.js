// Q1. Max Sum Contiguous Subarray
// Problem Description
// Find the maximum sum of contiguous non-empty subarray within an array A of length N.
// let A = [1, 2, 3, 4, -10] 
// A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
// max = 0
// for(let i=0; i< A.length; i++)
// {
//     let sum = 0
//     for(let j=i; j<A.length; j++)
//     {
//         sum += A[j]
//         if(sum > max)
//         {
//             max = sum
//         }        
//     }
// }
// console.log(max)


// Example Input
// Input 1:

//  A = [1, 2, 3, 4, -10] 
// Input 2:

//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


// Example Output
// Output 1:

//  10 
// Output 2:

//  6 


//---------------------------------------------------------------------------------------------------------------------

// Q2. Sum of All Subarrays

// Problem Description
// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.

// let A = [1, 2, 3]
// let A = [2, 1, 3]
// let sum = 0
// for(let i=0; i<A.length; i++)
// {
//     sum += A[i]
//     for(let j=i; j<A.length;j++)
//     {
//         sum += A[j]
//     }
// }
// console.log(sum)


// Example Input
// Input 1:
// A = [1, 2, 3]
// Input 2:

// A = [2, 1, 3]


// Example Output
// Output 1:
// 20
// Output 2:

// 19

//---------------------------------------------------------------------------------------------------------------------

// Q3. Subarray with least average
// Problem Description
// Given an array of size N, find the subarray of size K with the least average.
// let A=[3, 7, 90, 20, 10, 50, 40]
// A=[3, 7, 5, 20, -10, 0, 12]
// let B = 2
// let indexleastavg
// let leastavg = Number.MAX_VALUE
// for(let i=0; i<= A.length - B; i++)
// {
//     sum = 0
//     for(let j=i; j< i+B; j++)
//     {
//         sum += A[j]
//     }
//     if(leastavg > (sum/B))
//     {
//         leastavg = (sum/B)
//         indexleastavg = i
//     }
// }
// console.log(indexleastavg)

// Example Input
// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3
// Input 2:

// A=[3, 7, 5, 20, -10, 0, 12]
// B=2


// Example Output
// Output 1:
// 3
// Output 2:

// 4


//---------------------------------------------------------------------------------------------------------------------


// Q4. Maximum Subarray Easy
// Problem Description
// You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
// But the sum must not exceed B.
// let A = 5
// let B = 12
// let C = [2, 1, 3, 4, 5]
// A = 3
// B = 1
// C = [2, 2, 2]
// let presum = 0
// for(let i=0; i<A; i++)
// {
//     sum = 0
//     for(let j=i; j<A; j++)
//     {
//         sum += C[j]
//     }
//     if(sum > presum && sum <= B)
//     {
//         presum = sum
//     }
// }
// console.log(presum)


// Example Input
// Input 1:
// A = 5
// B = 12
// C = [2, 1, 3, 4, 5]
// Input 2:

// A = 3
// B = 1
// C = [2, 2, 2]


// Example Output
// Output 1:
// 12
// Output 2:

// 0



//---------------------------------------------------------------------------------------------------------------------



// Q1. Counting Subarrays Easy

// Problem Description
// Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.
// let A = [2, 5, 6]
// A = [1, 11, 2, 3, 15]
// let B = 10
// let count = 0
// for(let i=0; i<A.length; i++)
// {
//     let sum = 0
//     for(let j=i; j<A.length; j++)
//     {
//         sum += A[j]
//         if(sum < B)
//         {
//             count++
//         }
//     }
// }
// console.log(count)


// Example Input
// Input 1:

//  A = [2, 5, 6]
//  B = 10
// Input 2:

//  A = [1, 11, 2, 3, 15]
//  B = 10


// Example Output
// Output 1:

//  4
// Output 2:

//  4




//---------------------------------------------------------------------------------------------------------------------




// Q2. Good Subarrays Easy

// Problem Description
// Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
// 1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
// 2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
// Your task is to find the count of good subarrays in A.

// let A = [1, 2, 3, 4, 5]
// let B = 4
// A = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
// B = 65
// let count = 0
// for(let i=0; i<A.length; i++)
// {
//     let sum = 0
//     for(let j=i; j<A.length; j++)
//     {
//         sum += A[j]
//         if((((j-i)+1) % 2 == 0 && sum < B) || (((j-i)+1) % 2 != 0 && sum > B))
//         {
//             count ++
//         }
//     }
// }
// console.log(count)


// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = 4
// Input 2:

// A = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
// B = 65


// Example Output
// Output 1:
// 6
// Output 2:

// 36


//---------------------------------------------------------------------------------------------------------------------


// Q3. Alternating Subarrays Easy

// problem Description
// You are given an integer array A of length N comprising of 0's & 1's, and an integer B.

// You have to tell all the indices of array A that can act as a center of 2 * B + 1 length 0-1 alternating subarray.

// A 0-1 alternating array is an array containing only 0's & 1's, and having no adjacent 0's or 1's. 
// For e.g. arrays [0, 1, 0, 1], [1, 0] and [1] are 0-1 alternating, while [1, 1] and [0, 1, 0, 0, 1] are not.
// let  A = [1,0,1,0,1]
// let B = 1
// let flag = 1
// let outarr = []
// A = [0, 1, 0, 1, 0, 1, 0]
// B = 0
// A = [0, 0, 0, 1, 1, 0, 1]
// B = 1
// let A = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
// let B = 2
// let N = (2 * B)+1
// for(let i=0; i<A.length-(N-1); i++)
// {
//     let preelement = A[i]
//     for(let j=i+1; j<= (i+N)-1; j++)
//     {
//         if(preelement == A[j])
//         {
//             flag = 0
//         }
//         preelement = A[j]
//     }
//     if(flag != 0)
//     {
//         outarr.push(i+B)
//     }
//     flag = 1
// }
// console.log(outarr)



// Example Input
// Input 1:

//  A = [1, 0, 1, 0, 1]
//  B = 1 
// Input 2:

//  A = [0, 0, 0, 1, 1, 0, 1]
//  B = 0 


// Example Output
// Output 1:

//  [1, 2, 3]
// Output 2:

//  [0, 1, 2, 3, 4, 5, 6]



//---------------------------------------------------------------------------------------------------------------------