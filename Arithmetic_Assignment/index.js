/* function ArrayOfObj(){
    const a= [5];    //const works only with non-primitive types
    a[0]=15;
    a[1] =10;
    //a=5;      //error as const doen't works primitive types
    console.log(a);

    const obj = {a:1,b:2};
    obj.c=3;
    console.log(obj);

} */

//var - It can be global
/* function ArrayOfObj(){

    for(var i = 0; i<10; i++){
        console.log(i)
    }
    console.log("-------------")
    console.log(i);
} */

// var - not global
/* function ArrayOfObj(){
    for(let i =0; i<10;i++){
        console.log(i)
    }
    console.log("-------------")
    //console.log(i);  //ReferenceError : i is not defined
} */

function ArrayOfObj(){
    const productData = [
        {
            prodId:1,
            prodName:"Samsung M52",
            prodDesc:"some fake description...some fake description...",
            prodPrice: 24000
        },
        {
            prodId:1,
            prodName:"Xiomi 15 M52",
            prodDesc:"some fake description...some fake description...",
            prodPrice: 15000
        },
        {
            prodId:1,
            prodName:"One Plus M52",
            prodDesc:"some fake description...some fake description...",
            prodPrice: 14000
        },

    ]

   /*  for(let prod of productData){
        console.log(prod);
    } */

        let html = '';
        for(let prod of productData){
            html += "<div class='flex-item'>";
            html += "<h3>"+prod.prodName+"</h3>";
            html += "<br />";
            html += "Price:"+prod.prodPrice;
            html += "</div>";
        }

        document.getElementById("container").innerHTML=html;
}
ArrayOfObj();