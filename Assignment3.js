//1.Equilibrium: 
//given an arrayA of integers of size N. Find equilibrium index of arrayA.
arrayA = [5,3,6,4,8,0,0,9,3,-5,13,6]
// arrayA = [-6,0,0,0,0,0,0]
// arrayA = [2]
sum = 0
cummarr = []
for(i = 0; i < arrayA.length; i++)
{
    sum = sum + arrayA[i]
    cummarr.push(sum)
}
let equi = []
if(arrayA[0] == cummarr[cummarr.length -1])
{
    equi.push(0)
}

for(j=1; j<arrayA.length-1; j++)
{
    if(cummarr[j-1] == ((cummarr[cummarr.length-1]) - (cummarr[j])))
    {
        equi.push(j)
    }
}

if(cummarr[cummarr.length -1] == arrayA[arrayA.length -1])
{
    equi.push(arrayA.length -1)
}

if(equi[0] == null)
{
    console.log("-1")
}
else
{
    console.log(equi[0])
}


// console.log(equi)



//---------------------------------------------------------------------------------------------------------------------




//2.Range sum query
//given an integer array A of length N. and given a 2D integer array B with
//dimensions M X 2, where each row denotes a [L,R] query.
//for each query, you have to find the sum of all elements from L to R indices in A()
arrayB = [4,8,2,6,9,0,2,-4,8,3,7]
arrayc = [[0,5],[2,7],[1,2],[6,10]]
cumarrB = []
sum1 = 0
for(c=0; c < arrayB.length; c++)
{
    sum1 = sum1 + arrayB[c]
    cumarrB.push(sum1)
}
outarr = []
for(v=0; v < arrayc.length; v++)
{   
    if(arrayc[v][0] != 0)
    {
        outarr.push(cumarrB[arrayc[v][1]]-cumarrB[arrayc[v][0]-1])
    }
    else
    {
        outarr.push(cumarrB[arrayc[v][1]])
    }
}
console.log(outarr)




//---------------------------------------------------------------------------------------------------------------------




//3.Time to Equality
//Given an integer array A of size N. in 1 sec you can increase the
//value of one element by 1.
//Find min time in seconds to make all elements of array equal
arrayd = [5,2,7,4,-1,3,1]
maxnum = arrayd[0]
for(b=1; b < arrayd.length; b++)
{
    if(maxnum < arrayd[b])
    {
        maxnum = arrayd[b]
    }
}
timer = 0
for(b=0; b < arrayd.length; b++)
{
    timer += maxnum - arrayd[b]
}
console.log(timer)



//---------------------------------------------------------------------------------------------------------------------




//4.product array puzzle
//product of all elements divided by ith element
arraye = [1,2,3,4,5]
// arraye = [5,1,10,1]
outarr1 = []
for(u=0; u<arraye.length; u++)
{
    product = 1
    if(u < arraye.length -1)
    {
        for(v= u+1; v< arraye.length; v++)
        {
        product *= arraye[v]
        }
    }
    if(u > 0)
    {
        for(v= u-1; v>= 0; v--)
        {
        product *= arraye[v]
        }
    }
    outarr1.push(product)
}
console.log(outarr1)


//---------------------------------------------------------------------------------------------------------------------