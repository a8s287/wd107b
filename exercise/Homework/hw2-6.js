    var x=18;y=6;
    var max,count=0;
    if(x>y)
    {
        max=x;
    }
    else
    {
        max=y;
    }
    for(i=max;i>=2;i--)
    {
        if(x%i==0&&y%i==0)
        {
            if(i!=1)
            {
            console.log(i,"為最大公因數");
            count++;
            return;
            }
        }
    }
    if(count===0)
    {
        console.log("沒有公因數");
    }

