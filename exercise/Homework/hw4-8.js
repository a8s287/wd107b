function factor(n)
{
    a=[];
    while(n!=1)
    {
        for(var i=2;i<=n;i++)
        {
            if(n%i==0)
            {
                n/=i;
                a.push(i);
                break;
            }
        }
    }
    for(var i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
}
factor(18);