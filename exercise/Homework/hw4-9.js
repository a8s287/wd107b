function transpose()
{
    
    var a=[[2,3,4],[3,2,1]];
    var arr=[];
    
    for(var i=0;i<a.length;i++)
    {
        arr[i]=[];
        for(var j=0;j<a[i].length;j++)
        {
            arr[i][j]=a[j][i];
        }

    }

    for(var i=0;i<arr.length;i++)
    {
        var line="";
        for(var j=0;j<arr[i].length;j++)
        {
            line =line+arr[i][j]+" ";
        }
        console.log(line);
    }
}
transpose();