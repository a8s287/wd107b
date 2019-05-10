function average()
{
    var sum=0;
    var a=[2,3,4,5,6,2,5];
    for(o of a)
    {
        sum+=o;
    }
    sum/=a.length;
    console.log(sum);
}
average();