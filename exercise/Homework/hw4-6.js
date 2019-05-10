function minGap()
{
    var a=[2,5,7,9];
    a.sort();
    var gap,min=a[1]-a[0];
    for(var i=0;i<a.length-1;i++)
    {   
        gap=a[i+1]-a[i]
        if(gap<min)
        {
            min=gap;
        }
        
    }
    console.log(min);   
}
minGap();