function insert(n)
{
    a=[1,4,5,6,8];
    a.push(n);
    a.sort();
    for(i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
}

insert(3);
