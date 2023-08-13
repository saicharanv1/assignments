//1.[variables] Declare different types of variables and print the type of each variable
//types of variables- number, boolean, string, array, object
num = 34
bool = false
str = "this is a string"
arr = [3,8,9,45,87]
obj={name:"banana",price:"45",color:"yellow"}
console.log(typeof(num))
console.log(typeof(bool))
console.log(typeof(str))
console.log(typeof(arr))
console.log(typeof(obj))


//---------------------------------------------------------------------------------------------------------------------




//2.Create a calculator to perform sum, subtraction, multiplication and division of 2 integers provided by user
let int1 = 3, int2 = 5
console.log("int1 = ",int1, "int2 = ", int2)
console.log("sum: ", int1 + int2)
console.log("subtraction: ", int1 - int2)
console.log("multiplication: ", int1 * int2)
console.log("division: ", int1 / int2)


//---------------------------------------------------------------------------------------------------------------------




//3.Create a calculator using function for each operations- sum, subtraction, multiplication and division of 2 integers provided by user
function findsum(int3,int4)
{
    console.log("sum: ",int3 + int4)
}
findsum(4,8)
function finddifference(int3,int4)
{
    console.log("subtraction: ",int3 - int4)
}
finddifference(6,3)
function findproduct(int3,int4)
{
    console.log("multiplication: ",int3 * int4)
}
findproduct(2,10)
function findquotient(int3,int4)
{
    console.log("division: ",int3 / int4)
}
findquotient(15,3)



//---------------------------------------------------------------------------------------------------------------------




//4.Declare an array and print all values in an array using loops - for, while - use functions
arr2=[4,76,8,35,22,8,-1,0,5.7,893,243,84,2]
for(i=0;i<arr2.length;i++)
{
    console.log(arr2[i])
}

i=0
while(i<arr2.length)
{
    console.log(arr2[i])
    i=i+1
}



//---------------------------------------------------------------------------------------------------------------------



//5.Declare an array and sum of all values in an array using loops - for, while - use functions
arr3=[7,2,73,82,64,85,29]
sumofarr3 = 0
for(i=0;i<arr3.length;i++)
{
    sumofarr3 += arr3[i]
}
console.log(sumofarr3)

sumofarr3 = 0, i=0
while(i<arr3.length)
{
    sumofarr3 += arr3[i]
    i += 1
}
console.log(sumofarr3)



//---------------------------------------------------------------------------------------------------------------------