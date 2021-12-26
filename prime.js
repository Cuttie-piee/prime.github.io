//Write a program to take input from user and check whether that is prime or not

var n = prompt("Enter a number: ");
{
for(i = 2; i <= n/2; i++)
{
if(n % i ==0)
{
break;
}
}
if(i > n/2)
alert("is a Prime Number");
else
alert( "is not a Prime Number");
}
