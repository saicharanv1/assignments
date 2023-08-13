// Q1. Add the matrices
// You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.
// Note: Matrices are of same size means the number of rows and number of columns of both matrices are equal.
// let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
// let B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
// let C = []
// let newar = []
// for(let row = 0; row < A.length; row++)
// {
//     newar = []
//     for(let col=0; col < A[0].length; col++)
//     {
//         newar.push(A[row][col] + B[row][col])
//     }
//     C.push(newar)
// }
// console.log(C)


// Input 1:
// A = [[1, 2, 3],   
//      [4, 5, 6],   
//      [7, 8, 9]]  

// B = [[9, 8, 7],   
//      [6, 5, 4],   
//      [3, 2, 1]]
 
// Input 2:
// A = [[1, 2, 3],   
//      [4, 1, 2],   
//      [7, 8, 9]]  

// B = [[9, 9, 7],   
//      [1, 2, 4],   
//      [4, 6, 3]]
 
// Example Output

// Output 1:
// [[10, 10, 10],   
//  [10, 10, 10],   
//  [10, 10, 10]]
// Output 2:
// [[10, 11, 10],   
//  [5,   3,  6],   
//  [11, 14, 12]]



//---------------------------------------------------------------------------------------------------------------------



// Q2. Anti Diagonals
// Given a N * N square matrix A, return an array of its anti-diagonals.
// let ar = [[1, 2, 3],   
//           [4, 5, 6],   
//           [7, 8, 9]] 
// ar=[[5,6,7,9],
//     [0,-1,7,10],
//     [1,2,3,4],
//     [7,-1,0,-3]]
// let outar = []
// for(let i=0; i<ar.length; i++)
// {
//         let newar = []
//         for(let j=0, k=i; j <= i && k >= 0; j++, k--)
//         {
//                 newar.push(ar[j][k])
//         }
//         outar.push(newar)
// }
// for(let i=1; i < ar.length; i++)
// {
//         let newar = []
//         for(let j=ar.length-1, k=i; j >= i && k <= ar.length-1; j--,k++)
//         {
//                 newar.push(ar[k][j])
//         }
//         outar.push(newar)
// }
// for(let i=0; i<outar.length; i++)
// {
//         for(let j=0; j < ar.length; j++)
//         {
//                 if(outar[i][j] == null)
//                 {
//                         outar[i][j] = 0
//                 }
//         }
// }
// console.log(outar)



// Example Input
// Input 1:
// ar = [[1, 2, 3],   
//       [4, 5, 6],   
//       [7, 8, 9]] 

// Input 2:
// ar=[[5,6,7,9],
//     [0,-1,7,10],
//     [1,2,3,4],
//     [7,-1,0,-3]]

// Output 1:
// [ [ 1, 0, 0 ], [ 2, 4, 0 ], [ 3, 5, 7 ], [ 6, 8, 0 ], [ 9, 0, 0 ] ]

// Output 2:
// [
//         [ 5, 0, 0, 0 ],
//         [ 6, 0, 0, 0 ],
//         [ 7, -1, 1, 0 ],
//         [ 9, 7, 2, 7 ],
//         [ 10, 3, -1, 0 ],
//         [ 4, 0, 0, 0 ],
//         [ -3, 0, 0, 0 ]
//       ]


//---------------------------------------------------------------------------------------------------------------------


// Q3. Column Sum
// You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.
// ar = [[1,-1,4,3],[2,6,-1,-2],[6,-1,0,3]]
// ar = [[1,2,3,4], [5,6,7,8], [9,2,3,4]]
// sumar = []
// for(let i = 0;i<ar[0].length; i++)
// {
//     sum = 0
//     for(let j = 0;j<ar.length;j++)
//     {
//         sum += ar[j][i]
//     }
//     sumar.push(sum)
// }
// console.log(sumar)


// Example Input
// Input 1:

// [1,2,3,4]
// [5,6,7,8]
// [9,2,3,4]


// Example Output
// Output 1:

// [15,10,13,16]



//---------------------------------------------------------------------------------------------------------------------



// Q4. Matrix Multiplication
// You are given two integer matrices A(having M X N size) and B(having N X P). 
// You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).
// let A = [[1, 2],
//          [3, 4]]
// let B = [[5, 6],
//          [7, 8]]
// A = [[1, 1]]
// B = [[2],
//      [3]]

// function matrixmultiply(x,y)
// {
//     let C = [], newar = []
//     for(let j=0; j< A.length; j++)
//     {
//         newar = []
//         for(let p=0; p< A.length; p++)
//         {
//             sum = 0
//             for(let k=0; k< B.length; k++)
//             {
//                 sum += A[j][k] * B[k][p]
//             }
//             newar.push(sum)
//         }
//         C.push(newar)
//     }
//     console.log(C)
// }
// matrixmultiply(A,B)


// Example Input:

// Input 1:
// A = [[1, 2],
//      [3, 4]]
// B = [[5, 6],
//      [7, 8]]

// Input 2:

// A = [[1, 1]]
// B = [[2],
//      [3]]

// Output 1:

// [ [ 19, 22 ], [ 43, 50 ] ]

// Output 2:
// [ [ 5 ] ]



//---------------------------------------------------------------------------------------------------------------------


// Q5. Matrix Subtraction
// You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). 
// You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).
// If A and B are two matrices of the same order (same dimensions). 
// Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.
// let A =  [[1, 2, 3], 
//           [4, 5, 6], 
//           [7, 8, 9]]

// let B =  [[9, 8, 7], 
//           [6, 5, 4], 
//           [3, 2, 1]]
// let A = [[1, 1]]
 
// let B = [[2, 3]] 
// let C = []
// for(let i=0; i<A.length; i++)
// {
//     newar = []
//     for(let j=0; j< A[0].length; j++)
//     {
//         newar.push(A[i][j] - B[i][j])
//     }
//     C.push(newar)
// }
// console.log(C)


// Example Input

// Input 1:

// A =  [[1, 2, 3], 
//       [4, 5, 6], 
//       [7, 8, 9]]

// B =  [[9, 8, 7], 
//       [6, 5, 4], 
//       [3, 2, 1]]
// Input 2:

// A = [[1, 1]]
 
// B = [[2, 3]] 


// Example Output

// Output 1:

//  [[-8, -6, -4],
//   [-2, 0, 2],
//   [4, 6, 8]]
// Output 2:

//  [[-1, -2]]


//---------------------------------------------------------------------------------------------------------------------


// Q6. Matrix Transpose

// let A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// A = [[1, 2],[1, 2],[1, 2]]
// let B = []
// for(let i=0; i<A[0].length; i++)
// {
//     newar = []
//     for(let j=0; j<A.length; j++)
//     {
//         newar.push(A[j][i])
//     }
//     B.push(newar)
// }
// console.log(B)


// Example Input
// Input 1:

// A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// Input 2:

// A = [[1, 2],[1, 2],[1, 2]]


// Example Output
// Output 1:

// [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// Output 2:

// [[1, 1, 1], [2, 2, 2]]


//---------------------------------------------------------------------------------------------------------------------


// Q7. Spiral Order Matrix II
// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

let N = 5
let A = []
let newar = []
for(let i=0; i<N; i++)
{
    newar = []
    for(let j=1; j<= N; j++)
    {
        newar.push(j)
    }
    A.push(newar)
}
let str = ("hi")
let S = 00
for(let i=0; i < N-1; i++)
{
    S += 10
}

console.log(A,S, str[0],str[1])

// Example Input
// Input 1:
// 1
// Input 2:
// 2
// Input 3:
// 5
// Input 4:
// 3

// Example Output
// Output 1:
// [ [1] ]

// Output 2:
// [ [1, 2], 
//   [4, 3] ]

// Output 3:
// [ [1,   2,  3,  4, 5], 
//   [16, 17, 18, 19, 6], 
//   [15, 24, 25, 20, 7], 
//   [14, 23, 22, 21, 8], 
//   [13, 12, 11, 10, 9] ]

// Output 4:
// [ [1, 2, 3], 
//   [8, 9, 4],
//   [7, 6, 5]]

//---------------------------------------------------------------------------------------------------------------------



// Q8. Rotate Matrix
// You are given a n x n 2D matrix A representing an image.
// Rotate the image by 90 degrees (clockwise).
// You need to do this in place.
// Note: If you end up using an additional array, you will only receive partial score.
// ar = [[1,2,3,4],
//       [5,6,7,8],
//       [9,10,11,12],
//       [13,14,15,16]]
// ar = [[1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9]]
// function rotatematrix(arr)
// {
//     for(let i=0; i<ar.length-1; i++)
//     {
//         for(let j=i+1; j<ar.length; j++)
//         {
//             let temp = ar[i][j]
//             ar[i][j] = ar[j][i]
//             ar[j][i] = temp
//         }
//     }
//     for(let i=0; i<ar.length; i++)
//     {
//         for(let j=0, k= ar[i].length -1; j<k; j++, k--)
//         {
//             let temp = ar[i][j]
//             ar[i][j] = ar[i][k]
//             ar[i][k] = temp
//         }
//     }
//     console.log(arr)
// }
// rotatematrix(ar)


// Example Input
// Input 1:

//  [
//     [1, 2],
//     [3, 4]
//  ]
// Input 2:

//  [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//  ]


// Example Output
// Output 1:

//  [
//     [3, 1],
//     [4, 2]
//  ]
// Output 2:

//  [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
//  ]


//---------------------------------------------------------------------------------------------------------------------
