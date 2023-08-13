// 1. Determine if a string/number is a palindrome?
// let S = ('M','A','D','A','M')
// let S = ['M','A','D','A','M']
// let S = ["MADAM"]
// let str = ("MADAM")
// let s, e
// let flag = 1
// if(str.length % 2 != 0)
// {
//     for(let s=(Math.round(str.length/2)-1), e=(Math.round(str.length/2)-1) ; s >= 0 && e < str.length; s--, e++)
//     {
//         if(str[s] != str[e])
//         {
//             flag = 0
//         }
//     }
// }
// else
// {
//     for(let s=(str.length/2)-1, e=str.length/2 ; s >= 0 && e < str.length; s--, e++)
//     {
//         if(str[s] != str[e])
//         {
//             flag = 0
//         }
//     }
// }
// if(flag == 0)
// {
//     console.log("Not palindrome")
// }
// else
// {
//     console.log("Palindrome")
// }


// Example Input
// Input 1:
// str = ("MADAM")

// Input 2:
// str = ("MAVAM")

// Input 3:
// str = ("MAAM")

// Input 4:
// str = ("MAAV")


// Example Output
// Output 1:
// palindrome

// Output 2:
// not palindrome

// Output 3:
// palindrome

//Output 4:
// not palindrome




//---------------------------------------------------------------------------------------------------------------------



// 2. Find the number of occurrences of a character in a String?
// let S = ("AJFKABJJNMDK")
// let char = 'J'
// let HM = {}
// for(let i=0; i<S.length; i++)
// {
//     if(S[i] in HM)
//     {
//         HM[S[i]] += 1
//     }
//     else
//     {
//         HM[S[i]] = 1
//     }
// }
// console.log(HM[char])


// Example Input
// Input 1:
// S = ("AJFKABJJNMDK")
// char = 'A'

// Input 2:
// S = ("AJFKABJJNMDK")
// char = 'J'


// Output 1:
// 2

// Output 2:
// 3



//---------------------------------------------------------------------------------------------------------------------



// 3. How to find out if the given two strings are anagrams or not?
// let S1 = ("LISTEN")
// let S2 = ("SILENT")
// let HM1 ={}, HM2 ={}
// let flag=1
// if(S1.length == S2.length)
// {
//     for(let i=0; i < S1.length; i++)
//     {
//         if(S1[i] in HM1)
//         {
//             HM1[S1[i]] += 1
//         }
//         else
//         {
//             HM1[S1[i]] = 1
//         }
//         if(S2[i] in HM2)
//         {
//             HM2[S2[i]] += 1
//         }
//         else
//         {
//             HM2[S2[i]] = 1
//         }
//     }
//     for(let i=0; i< S1.length; i++)
//     {
//         if(HM1[S1[i]] != HM2[S1[i]])
//         {
//             flag = 0
//         }
//     }
// }
// else
// {
//     flag = 0
// }
// if(flag == 1)
// {
//     console.log("Anagrams")
// }
// else
// {
//     console.log("not anagrams")
// }


// Example Input
// Input 1:
// S1 = ("LISTEN")
// S2 = ("SILENT")

// Input 2:
// S1 = ("LISTENN")
// S2 = ("SILENTT")

// Output 1:
// Anagrams

// Output 2:
// not anagrams


//---------------------------------------------------------------------------------------------------------------------



// 4. How do you calculate the number of vowels and consonants in a String?
// let S = ("beajacEikIduAjb")
// let vow = 0
// let cons = 0
// for(let i=0; i < S.length; i++)
// {
//     if(S[i] == 'A' || S[i] == 'E' || S[i] == 'I' || S[i] == 'O' || S[i] == 'U' || S[i] == 'a' || S[i] == 'e' || S[i] == 'i' || S[i] == 'o' || S[i] == 'u')
//     {
//         vow ++
//     }
//     else
//     {
//         cons ++
//     }
// }
// console.log("Number of Vowels: ",vow)
// console.log("Number of Consonents: ",cons)


// Example Input
// Input 1:
// S = ("beajacEikIduAjbfU")

// Input 2:
// S = ("beajacEikIduAjb")

// Output 1:
// Number of Vowels: 9
// Number of Consonents: 8

// Output 2:
// Number of Vowels: 8
// Number of Consonents: 7

//---------------------------------------------------------------------------------------------------------------------



// 5. How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?
// let A = [5,3,6,4,5,4,4,2,6,1,4,3,5]
// let A = [5,3,6,4,5,4,6,2,6,1,3,5]
// let HM = {}
// let repeatedarr = []
// let uniquearr = []
// for(let i=0; i< A.length; i++)
// {
//     if(A[i] in HM)
//     {
//         HM[A[i]] += 1
//     }
//     else
//     {
//         HM[A[i]] = 1
//     }
// }
// uniquearr = Object.keys(HM)
// for(let i=0; i< uniquearr.length; i++)
// {
//     if(HM[uniquearr[i]] != 1)
//     {
//         console.log("frequnecy of ",uniquearr[i],"is ",HM[uniquearr[i]])
//         repeatedarr.push(uniquearr[i])
//     }
// }
// console.log("the repeated values are: ",repeatedarr)


// Example Input
// Input 1:
// A = [5,3,6,4,5,4,4,2,6,1,4,3,5]

// Input 2:
// A = [5,3,6,4,5,4,6,2,6,1,3,5]

// Output 1:
// frequnecy of  3 is  2
// frequnecy of  4 is  4
// frequnecy of  5 is  3
// frequnecy of  6 is  2

// Output 2:
// frequnecy of  3 is  2
// frequnecy of  4 is  2
// frequnecy of  5 is  3
// frequnecy of  6 is  3



//---------------------------------------------------------------------------------------------------------------------



// 6. How do you reverse an array?
// let A = [5,3,6,4,5,4,4,2,6,1,4,3]
// let A = [5,3,6,4,5,4,4,2]
// let NewA = []
// for(let i= A.length -1; i >= 0; i--)
// {
//     NewA.push(A[i])
// }
// A = NewA
// console.log(A)


// Example Input
// Input 1:
// A = [5,3,6,4,5,4,4,2,6,1,4,3]

// Input 2:
// A = [5,3,6,4,5,4,4,2]

// Output 1:
// [3, 4, 1, 6, 2, 4, 4, 5, 4, 6, 3, 5]

// Output 2:
// [ 2, 4, 4, 5, 4, 6, 3, 5]

//---------------------------------------------------------------------------------------------------------------------



// 7. Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1
// let S = ("JOEDMSOENABSLOMJA")
// let P = ("OENA")
// let flag 
// let flag2 = 1
// for(let i=0; i< S.length; i++)
// {
//     if(S[i] == P[0])
//     {
//         flag = 1
//         for(let j=i+1, k=1; j< i+ (P.length) && k<=P.length; j++, k++)
//         {
//             if(S[j] != P[k])
//             {
//                 flag = 0
//             }
//         }
//         if(flag == 1)
//         {
//             flag2 = 0
//             console.log(i)
//         }
//     }
// }
// if(flag2 == 1)
// {
//     console.log(-1)
// }


// Example Input
// Input 1:
// S = ("JOEDMSOENABSLOMJA")
// P = ("OENA")

// Input 2:
// S = ("JOEDMSOENABSLOMJA")
// P = ("OFNA")

// Output 1:
// 6

// Output 2:
// -1



//---------------------------------------------------------------------------------------------------------------------



// 8. How would you swap two numbers without using a third variable?
// let a = 52
// let b = 36
// console.log("before swapping, a is: ",a,"b is: ",b)
// a = a * b
// b = a / b
// a = a / b
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log("after swapping, a is: ",a,"b is: ",b)

// Example Input
// Input 1:
// a = 2
// b = 3

// Input 2:
// a = 52
// b = 36


// Output 1:
// after swapping, a is:  3 b is:  2

// Output 2:
// after swapping, a is:  36 b is:  52


//---------------------------------------------------------------------------------------------------------------------
