// 1.Generate * pattern to construct a pyramid
for(let i=1,j=4;i<=9,j>=0;i=i+2,j--)
{
    console.log((" ".repeat(j)).concat("*".repeat(i)))
}


//---------------------------------------------------------------------------------------------------------------------




// 2.Generate * pattern to construct an upside down pyramid
for(let c=9,d=0;c>=0,d<=4;c=c-2,d++)
{
    console.log((" ".repeat(d)).concat("*".repeat(c)))
}


//---------------------------------------------------------------------------------------------------------------------




// 3.Generate * pattern to construct a diamond shape
for(let k=4,l=1;k>=0,l<=9;k--,l=l+2)
{
    console.log((" ".repeat(k)).concat("*".repeat(l)))
}
for(let o=1,p=7;o<=4,p>=1;o++,p=p-2)
{
    console.log((" ".repeat(o)).concat("*".repeat(p)))
}


//---------------------------------------------------------------------------------------------------------------------




// 4.Find sum of N numbers eg.1,2,3,4,5,...N
let N=10
console.log((N*(N+1)/2))


//---------------------------------------------------------------------------------------------------------------------




// 5.How to iterate over an array? explain with an example
// to increase each element of array by 1
let arr1=[45,62,-1,96,-12,54,89,63,21]
for(let a=0;a<arr1.length;a++)
{
    arr1[a]=arr1[a]+1
}
console.log(arr1)


//---------------------------------------------------------------------------------------------------------------------




// 6.How to iterate over an object data? explain with an example
//to know the product price in shopping cart
let mycart={name:"oranges",Weight:"500g",quantity:"2",Price:"65"}
console.log(mycart.Price)
console.log(mycart["name"])



//---------------------------------------------------------------------------------------------------------------------




// 7.Implement your own search function for strings. dont use builtin function
// to search and count no of characters present in string
let character="h",string1="search within me",count=0
for(let u=0;u<string1.length;u++)
{
    if(character==string1[u])
    {
        count++
    }
}
console.log(count)



//---------------------------------------------------------------------------------------------------------------------




// 8.Implement string reversal. dont use builtin function
let string2="reverse me, drow desrever eht ma I",string3=""
for(let q=string2.length-1;q>=0;q--)
{
    string3=string3+string2[q]
}
string2=string3
console.log(string2)



//---------------------------------------------------------------------------------------------------------------------



// 9.Implement array reversal. dont use builtin function.
let arr2=[6,2,7,5,1,-4,0,7,96,425,3],arr3=[]
for(let z=arr2.length-1;z>=0;z--)
{
    arr3.push(arr2[z])
}
arr2=arr3
console.log(arr2)



//---------------------------------------------------------------------------------------------------------------------