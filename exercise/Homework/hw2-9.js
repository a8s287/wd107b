function countPrime(n,m)
{
    var x=0;
    for(var i=n;i<=m;i++)
    {
        var sum=0;
        for(var j=2;j<i;j++)
        {
            if(i%j==0)
            {
                sum++;
            }
        }
        if(sum==0)
        {
            x++;
        }
    }
    console.log(x);
}
countPrime(3,11);