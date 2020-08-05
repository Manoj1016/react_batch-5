function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState === 4 && xhr.status =="200" ){
			callback(xhr.responseText);
		}
	}
	xhr.send();

}
//Calling the function
getjson("id.json",function(text){
	var data =JSON.parse(text);
	console.log(data.details);
	mydetails(data.details)


})

var parent = document.querySelector(".parent-div");

function mydetails(React){
	var name=document.createElement("h4");
	name.classList.add("name");
	name.setAttribute("id","name");
	name.textContent=React.name;
	parent.appendChild(name);

}