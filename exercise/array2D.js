var a=[[2,3,4],[5,3,8]];

for(var i=0;i<a.length;i++)
{
    line="";
    for(var j=0;j<a[i].length;j++)
    {
        line=line+a[i][j]+" ";
    }

    console.log(line);
}