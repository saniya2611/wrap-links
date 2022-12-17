// alert("fghfhgf");
//Example 1)
let info =document.getElementById("info");

let text = info.innerHTML.trim();

let arr = text.split(" ");

var result ='';
for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
	if(arr[i].indexOf('http')>-1){
		result += `<a href="${arr[i]}" target="_blank">${arr[i]}</a>`;
	}else {
		result += arr[i] + ' ';
	}
}


//Example 2)
info.innerHTML = result;

let info1 = document.getElementById("news");

let text1 = news.innerHTML.trim();

let arr1 = text1.split(" ");

var result1 ='';
for (let j = 0; j < arr1.length; j++){
	console.log(arr1[j]);
	if(arr1[j].indexOf('http')>-1){
		result1 +=`<a href="${arr1[j]}" target="_blank">${arr1[j]}</a>`;
	}else{
		result1 += arr1[j]+' ';
	}
}
info1.innerHTML = result1;


//Example 2)
info.innerHTML = result;

let info2 = document.getElementById("blogs");

let text2 = blogs.innerHTML.trim();

let arr2 = text2.split(" ");

var result2 ='';
for (let k = 0; k < arr2.length; k++){
	console.log(arr2[k]);
	if(arr2[k].indexOf('http') >- 1){
		result2 +=`<a href="${arr2[k]}" target="_blank">${arr2[k]}</a>`;
	}else{
		result2 += arr2[k]+' ';
	}
}
info2.innerHTML = result2;