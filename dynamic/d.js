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
getjson("d.json",function(text){
	var data =JSON.parse(text);
	//console.log(data);
	mydetails(data.details);

	})
function mydetails(React){
	var d=document.createElement("div");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="BasicDetails:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"))
	var i=document.createElement("img");
	i.src=React.image;
	i.alt="profile-image";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.classList.add("name");
	name.style.color="#000";
	name.setAttribute("id","name");
	name.textContent=React.name;
	parent.appendChild(name);

	var email=document.createElement("p");
	email.classList.add("email");
	email.textContent=React.email;
	parent.appendChild(email);

	var ul=document.createElement("ul");
	var li=document.createElement("li");
	li.textContent=React.phno;
    ul.appendChild(li);
    d.appendChild(ul);

    var ul=document.createElement("ul");
	var li1=document.createElement("li");
	li1.textContent=React.address;
    ul.appendChild(li1);
    d.appendChild(ul);
}