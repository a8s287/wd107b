function random(n,a,b)
{
    
    for(var i=0;i<n;i++)
    {
        console.log(Math.random()*(b-a)+a);
    }
}
random(3,10,20);