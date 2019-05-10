function find(n)
{
    var a=[2,3,5,7,8,7];
    var low=0,high=a.length,mid;
    var element;
    while(low<=high)
    {
        mid=Math.floor((low+high)/2);
        element=a[mid];
        if(element<n)
        {
            low=mid+1;
        }
        else if(element>n)
        {
            low=mid-1;
        }
        else 
        {
            return mid;
        }
    }
    return -1;
}
console.log(find(5));