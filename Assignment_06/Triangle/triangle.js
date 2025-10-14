var i;
var j;
var triangle;


for(i=0; i<8; i++){

    for(j=0; j<i; j++)
    {
        document.write("#");
        triangle += "#";
    }
    document.write("<br>");
}