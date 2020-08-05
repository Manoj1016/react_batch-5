//	var xhr = new XMLHttpRequest();
	//xhr.overrideMimeType("application/json");
	//xhr.open("GET",file,true);
	//xhr.onreadystatechange=function(){
		//if (xhr.readyState === 4 && xhr.status =="200" ){
			//callback(xhr.responseText);
		//}
	//}
	//xhr.send();

//}
////Calling the function
//getjson("id.json",function(text){
	//var data =JSON.parse(text);
	//console.log(data);
	//mydetails(data.details);
	//movies(data.favmovies);
	//cric(data.favcricketers);



//})
//fetch and promises
function getjson(url) {
	return new Promise((resolve,reject)=>{
		return fetch(url).then(response=>{
			if (response.ok) {
				resolve(response.json());
			}
			else{
				reject(new Error("error"));
			}
		})

	})
}

//function calling
var myPromise = getjson("data.json");
myPromise.then(data=>{
	console.log(data);
	mydetails(data.details);
	movies(data.favmovies);
	cric(data.favcricketers);
})

var parent = document.querySelector(".parent-div");

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
function movies(M){
	var d=document.createElement("div");
	d.classList.add("Movie-fav");
	parent.appendChild(d);

	var h=document.createElement("h1");
	h.textContent="movies names:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));
	ol=document.createElement("ol");
	for (var i = 0; i <M.length ; i++){
		var li=document.createElement("p");
		li.textContent=M[i];
		ol.appendChild(li);


		}
		d.appendChild(ol);

}

function cric(cricket) {
		var d=document.createElement("div");
	d.classList.add("cric-fav");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="cricketers:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var table=document.createElement("table");
	var row="";
	for (var i = 0; i < cricket.length; i++) {
		row +="<tr><th>"+"Name"+"</th><th>"+"batting style"+"</th></tr>"+ "<tr><td>"+cricket[i].name+"</td><td>"+cricket[i].bstyle+"</td></tr>";
		}
		table.innerHTML=row;
		d.appendChild(table);
}