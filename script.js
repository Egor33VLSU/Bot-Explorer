navigator.__defineGetter__('userAgent', function () {
    return "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0)"
});


var entries = [];
var order = -1;
var training = false;
var reslt = new Array();
var reslts = new Array();






fetch('file.txt')
  .then(response => response.text())
  .then(text => {

let entries = window.entries;
window.order = -1;
window.entries = text.match(/[^\r\n]+/g);
console.log(window.entries);
console.log("-----");
for(var i = 0;i < window.entries.length;i++){
console.log(i +" "+window.entries[i]);
}
}
);


document.getElementById("demo").innerHTML = "Вы не авторизованы";








var a = document.createElement('a');
var linkText = document.createTextNode("Can't login? Try give permissions here");
a.appendChild(linkText);
a.title = "Can't login? Try give permissions here";
a.href = "https://oauth.vk.com/authorize?client_id=8174844&client_secret=PCxAqdLvfGoMpeFamiIz&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,photos,groups,wall&response_type=token&v=5.131&grant_type=client_credentials";

document.body.appendChild(a);
a.style.display= 'none';

document.getElementById("myButton2").addEventListener("click", myFunction24);
function myFunction24(){
window.training = false;


if (document.getElementById("uid").value == "")
{
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   





var res = tabs[0].url.split("com/");
var b = res[0], c = res[1];

	id = c;
});
}
else
id= document.getElementById("uid").value;


setTimeout(() => { console.log('Hello Timeout!');   chrome.runtime.sendMessage({content: [id,mySubString,window.training,window.entries], type: "f2"});  }, 1000);

document.getElementById("demo1").innerHTML = "";
document.getElementById("demo2").innerHTML = "";
document.getElementById("democlass").innerHTML = "";
document.getElementById("demoinfo").innerHTML = "";

document.getElementById("dc1").innerHTML =  "";

document.getElementById("dc21").innerHTML =  "";
document.getElementById("dc22").innerHTML =  "";

document.getElementById("dc31").innerHTML =  "";

document.getElementById("dc41").innerHTML =  "";

document.getElementById("dc42").innerHTML =  "";

document.getElementById("dc61").innerHTML =  "";

document.getElementById("dc62").innerHTML =  "";

document.getElementById("dc63").innerHTML =  "";

document.getElementById("dc71").innerHTML =  "";

document.getElementById("dc81").innerHTML =  "";

document.getElementById("dc91").innerHTML =  "";

document.getElementById("dc101").innerHTML =  "";

document.getElementById("dc102").innerHTML =  "";

document.getElementById("dc121A").innerHTML =  "";

document.getElementById("dc121B").innerHTML =  "";



window.t2=setInterval(myTimer2, 1);






}



document.getElementById("myButton8").addEventListener("click", myFunction8);
function myFunction8(){
window.training = true;

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

var res = tabs[0].url

setTimeout(() => { console.log('Hello Timeout!'); chrome.runtime.sendMessage({content: [res,mySubString,window.training], type: "f8"}); }, 1000);



});




};


document.getElementById("myButton9").addEventListener("click", myFunction99);
function myFunction99(){



chrome.runtime.sendMessage(({content:' ', type:"f9"}), function (response99) {

window.arr =response99;
if (window.arr!=undefined)
if (window.arr.length>0)
{
console.log("OK!");
console.log(window.arr);

function generateFile(){
	exportToCsv("Test.csv", window.arr );
}


function exportToCsv(filename, rows) {


  var processRow = function (row, row2) {
    var finalVal = '';
   
      var innerValue = '';
      if(row === 0){
        innerValue = row.toString();
      }
      if(row){
        innerValue = row.toString();
      }
      if (row instanceof Date) {
        innerValue = row.toLocaleString();
      };
      var innerValue2 = '';
       // innerValue2 = row2;

        if(row2 === 0){
        innerValue2 = row2.toString();
      }
      if(row2){
        innerValue2 = row2.toString();
      }
      if (row2 instanceof Date) {
        innerValue2 = row2.toLocaleString();
      };
console.log(innerValue2);	

      var result = innerValue.replace(/"/g, '""');
var result2 = innerValue2.replace(/"/g, '""');

if (result2.search(/("|,|\n)/g) >= 0)
	result2 = '"' + result2 + '"';

      if (result.search(/("|,|\n)/g) >= 0)
        result = '"' + result + '"';
      
      

console.log(result2);

  //    finalVal += result2;
  //    finalVal += ',';
 //     finalVal += result;

finalVal += row2.toString();
finalVal += ';';
finalVal += row;


    
    return finalVal + '\n';
  };

  var csvFile = '';

 console.log(rows);

  for (var i = 0; i < rows[0].length; i++) {

 	if (rows[0][i]!=null)
		csvFile += processRow(rows[0][i],rows[1][i]);

  }

  var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  }



generateFile();


}





});




}



document.getElementById("myButton7").addEventListener("click", myFunction765);
function myFunction765(){
window.training = true;
id= document.getElementById("uid").value;
setTimeout(() => { console.log('Hello Timeout!'); chrome.runtime.sendMessage({content: [id,mySubString,window.training,window.entries], type: "f5"}); }, 1000);







}




var ticks = 0;

var  result = [];


function myTimer2() {





chrome.runtime.sendMessage(({content:'Hello result', type:"result"}), function (response) {
      
       window.result=response;

if (window.result == -1)
clearInterval(window.t2);

if (window.result != -1)
if ((window.result != null) )
{
clearInterval(window.t2);














	rs = Math.round(window.result[13]);
	acc = 0;

	if (rs<=8)
	acc = rs*3+1;
	else if ((rs>=9)&&(rs<=15))
	acc = rs*3+6;
	else if ((rs>=16))
	acc = rs*3+9;
	
	clss = "";
if (acc>99)
acc=99;

if (acc<25)
clss="Человек (H)";
else if ((acc>=25)&&(acc<51))
clss = "Человек с искусственными признаками (HB)";
else if ((acc>=51)&&(acc<75))
clss= "Искусственный с признаками человека (BH)";
else if ((acc>=75))
clss= "Искусственный (BB)";


uid = window.result[0];

chrome.runtime.sendMessage(({content:'Hello result_i2', type:"result_i2"}), function (response2) {
      
      



window.tname =response2[0];
window.lname = response2[1];





	document.getElementById("demo1").innerHTML = "Результат: "+uid+" "+window.tname+" "+window.lname;
	document.getElementById("demo2").innerHTML = acc+"% искусственный, "+(100-acc)+"% человек ";
	document.getElementById("democlass").innerHTML = "Класс: "+clss;



});





chrome.runtime.sendMessage(({content:'Hello result_i', type:"result_i"}), function (response3) {
      
       window.inf=response3;


if ((window.inf[14]==0)&&(window.inf[15]==0))
{


if (window.inf[0]>0)
document.getElementById("dc1").innerHTML = "(-) Город и страна большинства друзей пользователя не соответствуют указанному";
if (window.inf[1]>0)
document.getElementById("dc21").innerHTML = "(-) У пользователя не установлено фото профиля";
if (window.inf[2]>0)
document.getElementById("dc22").innerHTML = "(-) У пользователя нет фотографий";
if (window.inf[3]>0)
document.getElementById("dc31").innerHTML = "(-) Профиль пользователя закрыт";
if (window.inf[4]>0)
document.getElementById("dc41").innerHTML = "(-) Много репостов";
if (window.inf[5]>0)
document.getElementById("dc42").innerHTML = "(-) Число постов превышено / отсутствуют";
if ((window.inf[6]>0)&&(window.inf[3]==0))
document.getElementById("dc61").innerHTML = "(-) Непропорциональное число друзей / подписчиков";
if (window.inf[7]>0)
document.getElementById("dc62").innerHTML = "(-) В списке друзей много заброшенных аккаунтов";
if (window.inf[8]>0)
document.getElementById("dc63").innerHTML = "(-) В списке друзей много удаленных или забаненных аккаунтов";
if (window.inf[9]>0)
document.getElementById("dc71").innerHTML = "(-) Посты пользователя не просматриваются";
if (window.inf[10]>0)
document.getElementById("dc81").innerHTML = "(-) Личная информация недостаточно заполнена";
if (window.inf[11]>0)
document.getElementById("dc91").innerHTML = "(-) Несоответствие указанного пользователем города и города сообществ, в которых он состоит";
if (window.inf[12]>0)
document.getElementById("dc101").innerHTML = "(-) Последний онлайн был давно";
if (window.inf[13]>0)
document.getElementById("dc102").innerHTML = "(-) Профиль был создан недавно";
}


if (window.inf[14]>0)
document.getElementById("dc121A").innerHTML = "(-) Профиль был забанен";
if (window.inf[15]>0)
document.getElementById("dc121B").innerHTML = "(-) Профиль был удален";


});

chrome.runtime.sendMessage(({content:'Hello clear', type:"clear"}), function (response) {
      
       

 });

window.result = null;


}







	


    });

}

setInterval(myTimer, 1);

function myTimer() {





if ((window.order>=0)&&(window.order<=199))
 chrome.runtime.sendMessage(({content:'Hello timer', type:"timer"}), function (response) {
      
       window.ticks=response;


    });


  chrome.runtime.sendMessage(({content:'Hello order', type:"order"}), function (response) {
      
       window.order=response[0]+1;
window.limit =response[1]+1;
if ((window.order-1>=0)&&(window.order<window.limit))
{

document.getElementById("demo").innerHTML = "Прогресс:" + (window.order)+"/"+window.limit+" "+((window.ticks % 60000) / 1000).toFixed(0)+" s";
}
else if (window.order==window.limit)
{

document.getElementById("demo").innerHTML = "Done! " + (window.order)+"/"+window.limit+" "+((window.ticks % 60000) / 1000).toFixed(0)+" s";
window.order = -1;


}

    });

}



a.addEventListener("click", myFunction9);
function myFunction9(){
window.open(a.href);
}

$("uid").submit(function(e) {
    e.preventDefault();
});




document.getElementById("myButton3").addEventListener("click", myFunction53);
function myFunction53(){
window.training = false;

//id= document.getElementById("uid").value;


if (document.getElementById("uid").value == "")
{
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   





var res = tabs[0].url.split("com/");
var b = res[0], c = res[1];

	id = c;
});
}
else
id= document.getElementById("uid").value;





setTimeout(() => { console.log('Hello Timeout!'); chrome.runtime.sendMessage({content: [id,mySubString,window.training,window.entries], type: "f5"}); }, 1000);


window.t3=setInterval(myTimer3, 1);

function myTimer3() {





chrome.runtime.sendMessage(({content:'Hello resultid', type:"resultid"}), function (response) {
     
       result=response;
if ((result != -1)&&(result != undefined))
{
if ((result != -2))
document.getElementById("uid").value = result;
else
document.getElementById("uid").value = "error";
result = -1;
clearInterval(window.t3);

}

});

}

}

document.getElementById("myButton").addEventListener("click", myFunction33);
function myFunction33(){
window.training = false;

setTimeout(() => { console.log('Hello Timeout!'); myFunction3.call(this); }, 1000);



}

var target_user= '{"name":"Иван","age":25}';

var totalpoints_cc = 0;
var points = 0;
var goals = 0;
var totalgoals = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var c6 = 0;
var c7 = 0;
var c8 = 0;
var c9 = 0;
var c10 = 0;
var c11 = 0;
var c12 = 0;

var totalbp = 0;
var id = document.getElementById("uid").value;
var friends_amount =0;
var posts_amount =0;
var groups_amount =0;
var follow_amount =0;
var banned = 0;
let rurl = "";
let mySubString = "";


window.addEventListener('load', function () {
a.style.display= 'none';

chrome.runtime.sendMessage(({content:'Hello value', type:"value"}), function (response) {
         
       window.reslt=response;
console.log("Set result");
console.log(window.reslt);

    }); 

chrome.runtime.sendMessage({content: "Hello background", type: "m1"}, function (response) {
       



document.getElementById("demo").innerHTML = "[!]Загружаем данные сессии...";
mySubString=response;
console.log("Загрузка данных сессии...");
console.log(mySubString);
if ((mySubString.length)<=0)
{
document.getElementById("demo").innerHTML = "[!]Вы не авторизованы";
a.style.display= 'block';
}
else if (mySubString=="http")
{
document.getElementById("demo").innerHTML = "[!]Вы не авторизованы";
a.style.display= 'block';
}

window.target_user= '{"name":"Иван","age":25}';
window.id = document.getElementById("uid").value;




<!-- initial -->
id = window.id;
if (!id)
{
fetchreq= 'https://api.vk.com/method/users.get?fields=country,city&access_token='+ mySubString + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/users.get?user_ids='+id+'&fields=country,city&access_token='+ mySubString + '&v=5.131';
}

const doAsyncWork0 = () => fetch(fetchreq, {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {
  if (response.ok) {
    response.json().then(json => {
console.log('fetch is complete')
if (json.response!=undefined)
document.getElementById("demo").innerHTML = json.response[0].id + " "+json.response[0].first_name+ " "+json.response[0].last_name;




















a.style.display= 'none';

});
}

});
doAsyncWork0().then(() => console.log('used the fetching function 0'))



<!-- initial preparation-->








    });

chrome.runtime.sendMessage(({content:'Hello order', type:"order"}), function (response) {
         
       window.order=response;
console.log("Set order");
console.log(window.order);

    });









 chrome.runtime.sendMessage(({content:'Hello values', type:"values"}), function (response) {
         
       window.reslts=response;
console.log("Set results");
console.log(window.reslts);

    });




  

}, false);





















var client_id= "8174844";
var client_secret= "PCxAqdLvfGoMpeFamiIz";


<!--var client_secret= "PCxAqdLvfGoMpeFamiIz";-->


<!--ЭТО СЕРВИСНЫЙ КЛЮЧ var client_secret= "9989354a9989354a9989354a0099f589b6999899989354afb02ee2ae5fd3a67e584ff36";-->


<!--var client_id= "8214137";-->
<!--var client_secret= "uxlpWzLQVclRXffOT1OM";-->









function myFunction3(){
document.getElementById("demo").innerHTML = "Ожидайте входа...";


const doAsyncWork = () => fetch('https://oauth.vk.com/authorize?client_id='+client_id+'&client_secret='+client_secret+'&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,photos,groups&response_type=token&v=5.131&grant_type=client_credentials', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'application/json',
  },
},
).then(function(response) {
console.log('fetch is complete')

rurl = response.url;
console.log(response.url);


document.getElementById("demo").innerHTML = "Пытаемся войти..."



mySubString = rurl.substring(
    rurl.indexOf("%253D") + 5, 
    rurl.lastIndexOf("%2526e")
);

if (mySubString =="http")
{
a.style.display= 'block';
document.getElementById("demo").innerHTML = "Вы не авторизованы"
}
else
{
document.getElementById("demo").innerHTML = "Вы успешно вошли"
a.style.display= 'none';
}
chrome.runtime.sendMessage({content: mySubString ,type:"code"});



document.getElementById("demo").innerHTML = "Загружаем данные сессии...";
      
console.log("SESSION: "+mySubString);
if ((mySubString.length)<=0)
{
document.getElementById("demo").innerHTML = "Пожалуйста войдите в свою учетную запись ВК";

}
else if (mySubString=="http"){

document.getElementById("demo").innerHTML = "Пожалуйста войдите в свою учетную запись ВК";

}

window.target_user= '{"name":"Иван","age":25}';
window.id = document.getElementById("uid").value;




<!-- initial -->


fetchreq= 'https://api.vk.com/method/users.get?fields=country,city&access_token='+ mySubString + '&v=5.131';



fetch(fetchreq, {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {
  if (response.ok) {
    response.json().then(json => {
console.log('fetch is complete')
document.getElementById("demo").innerHTML = json.response[0].id + " "+json.response[0].first_name+ " "+json.response[0].last_name;


});
}

});









}

);
doAsyncWork().then(() => console.log('used the fetching function 0.0'))


 
    









}







