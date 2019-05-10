function isPrime(n)
{
    if(n==1) return;
    var t=0;
    for(var i=2;i<n/2;i++)
    {
        if(n%i==0)
        {
            t++;
        }
    }
    if(t==0)
    {
        console.log("true");
    }
    else if(t>0)
    {
        console.log("false");
    }
}
isPrime(1);