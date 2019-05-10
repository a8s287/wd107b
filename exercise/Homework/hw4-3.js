function filter(a,b)
{
    c=[];
    for(var i=a;i<=b;i++)
    {
        if(i%3!=0)
        {
            if(i%5!=0)
            {
                if(i%7!=0)
                {
                    c.push(i);

                }
            }
        }
    }
    for(var i=0;i<c.length;i++)
    {
        console.log(c[i]);
    }

}
filter(5,15);