//document.write("welcome");

//var a="10";
//var b="20";
//var c= Number(a)+Number(b);
//document.write(c);

//var d=d.split(" ");
//for (var i = 0; i < d.length; i++) {
	//console.log(i);
	//if (isNan(d[i])) {
		//document.write("it is a string"+"<br/>");
	//}
	//else{
		//document.write("it is a number"+"</br>");


	//}
//}
//creating a  array
var arr = [
{
	name:"manoj",
	age:29,
	salary:"25k",
	hobbies:["playing pubg","play cricket"],
	favfood:["mutton","chicken"]
},
{
	name:"mk",
	age:28,
	salary:"95k",
	hobbies:["playing pubg","play cod"],
	favfood:["mutton","fish"]
},
{
	name:"mg",
	age:89,
	salary:"22k",
	hobbies:["playing freefire","play cricket"],
	favfood:["mutton","mushroom"]

},
{
	name:"man",
	age:19,
	salary:"15k",
	hobbies:["playing garena","play cod"],
	favfood:["mutton","chicken"]
}
]
//console.log(arr[0].name);
document.write("<div class='main-div'>")
for (var i = 0;i < arr.length - 1; i++) {
	document.write("<div>")
	document.write("<h1>"+arr[i].name+"</h1>");
	document.write("<h4>"+arr[i].age+"</h4>");
	document.write("<h3>"+arr[i].salary+"</h3>");
	document.write('<ol type="I">');

	for (var j = 0; j <arr[i].hobbies.length; j++){

		document.write("<li>"+arr[i].hobbies[j]+"</li>")

}
document.write("</ol>");
document.write("</div")
}
document.write("</div>")