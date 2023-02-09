importScripts('moment-with-locales.js');


var exc = 0;

var exc1 = -1;

var tgoals = 15;
var modified = 0;

var rid = -1;
var err = false;

var mySubString = "";
var reslt = new Array();
var reslts = new Array();
var totalgoals = 0;

var mult = 0;
var messg = [];

var i1 = 4; //4
var i2 = 1.5; //1.5
var i3 = 3; //3
var i4 = 2.5; //2.5
var i5 = 0;
var i6 = 2.7; //2.7
var i7 = 2; //2
var i8 = 5; //5
var i9 = 6; //6
var i10 = 2; //2
var i11 = 0;
var i12_1 = 2; //2
var i12_2 = 2.5; //2.5

var name = "";
var lname = "";

var myorder = -1; //-1
var order = -1; //-1
var stord = -1;  //-1

var limit = 199; //199

var training = false;
var target_user= {
    a : 'name',
    b : 1
}

var blacklisted = 0;
var ticks = 0;
var timeouts = [];
var saved_class = [];
var mistake = 0;
    
var starttime = 0;
var single = 0;




chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
     










if (message.type == 'm1') {
console.log("Heard:" + message.type +" respond:"+mySubString);
  sendResponse(mySubString);
} 
else if (message.type == 'order') {

  sendResponse([myorder,limit]);



} 
else if (message.type == 'timer') {


  sendResponse(-1*(self.starttime - performance.now()));


} 




else if (message.type == 'result'){
  if ((self.totalgoals==tgoals)&&(self.training==false))
{
sendResponse(reslt);

}


else if (self.err==true)
{
sendResponse(-1);
self.err = false;
}

}

else if (message.type == 'resultid'){
 
if (self.err==true)
{
sendResponse(-2);
self.err = false;
}
else if (self.rid!=undefined)
{
if (self.rid!=-1)
{
sendResponse(self.rid);
self.rid = -1;
}
}

}




else if (message.type == 'clear'){
  if ((self.totalgoals==tgoals)&&(self.training==false))
{
reslt= null;

}

}
else if (message.type == 'result_i'){
  if ((self.totalgoals==tgoals)&&(self.training==false))
{
inf = new Array(cc11,cc21,cc22,cc31,cc41,cc42,cc61,cc62,cc63,cc71,cc81,cc91,cc101,cc102,cc121A,cc121B);

sendResponse(inf);
}

}
else if (message.type == 'result_i2'){
  
inf2 = new Array(self.name,self.lname);


sendResponse(inf2);


}





else if (message.type == 'value') {

if (self.training == false)
{


if (modified == 0)
{
if (exc>0)
{

modified = 1;


if (exc == 1)
reslt[13]= reslt[13] - (reslt[exc] * i1);

else if (exc == 2)
reslt[13]= reslt[13] - (reslt[exc] * i2);

else if (exc == 3)
reslt[13]= reslt[13] - (reslt[exc] * i3);

else if (exc == 4)
reslt[13]= reslt[13] - (reslt[exc] * i4);

else if (exc == 5)
reslt[13]= reslt[13] - (reslt[exc] * i5);

else if (exc == 6)
reslt[13]= reslt[13] - (reslt[exc] * i6);

else if (exc == 7)
reslt[13]= reslt[13] - (reslt[exc] * i7);

else if (exc == 8)
reslt[13]= reslt[13] - (reslt[exc] * i8);

else if (exc == 9)
reslt[13]= reslt[13] - (reslt[exc] * i9);

else if (exc == 10)
reslt[13]= reslt[13] - (reslt[exc] * i10);

else if (exc == 11)
reslt[13]= reslt[13] - (reslt[exc] * i11);

else if (exc == 12)
{
if (reslt[exc]==1)
reslt[13]= reslt[13] -  i12_1;
else if (reslt[exc]==2)
reslt[13]= reslt[13] - i12_2;
else
reslt[13]= reslt[13] - 0;

}
reslt[exc] = 0;

}



}

}








console.log("Heard:" + message.type +" respond:"+reslt);
console.log(reslt);
if (reslt!=undefined)
 sendResponse(reslt);
else
 sendResponse(-1);
} 
else if (message.type == 'values') {
console.log("Heard:" + message.type +" respond:");

var alt_reslts = [];
var alt_reslts2 = [];
var alt_reslts3 = [];
for (var i = 0; i < reslts.length; i++)


{

if(reslts.length > i && reslts[i] !== null) {
alt_reslts.push( [reslts[i][0], reslts[i][reslts[i].length-1]]);
alt_reslts2.push(reslts[i][reslts[i].length-1]); //массив только результатов
alt_reslts3.push(reslts[i][0]); //массив только ID
}

}

console.log(reslts);

console.log(alt_reslts);
console.log(alt_reslts2);
console.log(alt_reslts3);

if (reslts!=undefined)
  sendResponse(reslts);
else
  sendResponse(-1);
} 
else if (message.type == 'f5') {
modified = 0;
self.err = false;
self.saved_class = [];

self.messg=message;
self.single=0;
self.training = self.messg.content[2];
self.totalgoals=0;
self.goals=0;
if (self.training == true)
self.mult = 1;
else
self.mult = 1;

rs = new Array();

self.single = 0;

self.order= stord; //-1
myorder= stord; //-1

limit =self.messg.content[3].length - 1;
console.log(limit);

self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 200) );
console.log('F5');

} 
else if (message.type == 'f2') {
modified = 0;
self.training = false;
self.messg=message;
self.mult = 1; //0
self.err = false;
self.saved_class = [];

reslt = new Array();


self.order=-1;
myorder=-1;
self.single = 1;
self.totalgoals=0;
self.goals=0;

console.log("Heard:" + message.type);
console.log(message.content);
 
self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 200) );
console.log('F5+F2');
} 


else if (message.type == 'f9') {
if (self.saved_class.length>0)
sendResponse(self.saved_class);

} 

else if (message.type == 'f8') {
self.err = false;
self.saved_class = [];

rs = new Array();

modified = 0;

self.messg=message;
self.single=0;
self.link = self.messg.content[0];
self.training = true;
self.totalgoals=0;
self.goals=0;
self.mult = 1;


self.single = 0;

self.order= stord; //-1
myorder= stord; //-1




console.log("Heard:" + message.type);
console.log(message.content);



self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction_get.call(this); }, 200) );
console.log('F8');
}

else if (message.type == 'code'){
  mySubString = message.content;
console.log("Set code:" + mySubString);
}

else if (message.type == 'codeS'){
  reslt = message.content;
console.log("Set value:");
console.log(reslt);
}
else if (message.type == 'codeL'){
  reslts = message.content;
console.log("Set values:");
console.log(reslts);
}
    
function results(){


console.log("Done");

}


function myFunction_get(){


self.entries=new Array();
const URL = self.link;



if (URL.includes("https://vk.com/friends"))
{
if (URL.includes("id"))
{
id = URL.substring(
    URL.indexOf("?id=")+4, 
    URL.indexOf("&section")
);
}
else
id = "";

console.log("friend");
console.log(id);









fetch('https://api.vk.com/method/friends.get?user_id='+id+'&count=200&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

console.log(json.response);      

if(json.response !== undefined){

for (var i = 0; i< Object.keys(json.response.items).length;i++)
{
self.entries.push(json.response.items[i]);
}

console.log(self.entries);
self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

limit =self.entries.length- 1;
console.log(limit);

self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 1100) );
console.log('F5');




}

});
}
});


}
else if ((URL.includes("wall"))&&(!URL.includes("_")))
{
console.log("WHOLE WALL")

id = "";

if (URL.includes("?"))
{
id = URL.substring(
    URL.indexOf("wall")+4,
	URL.indexOf("?")
);
}
else
{
id = URL.substring(
    URL.indexOf("wall")+4,
	
);

}

console.log(id)



var done = 0;

var cnt = 0;
var items;

//======================



fetch('https://api.vk.com/method/wall.get?owner_id='+id+'&filter=owner&count=100&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

console.log("OK");
console.log(json.response);      

if(json.response !== undefined){


self.items = json.response.items;

cnt = Object.keys(self.items).length;

console.log("count "+cnt);

i1=-1;
items2 = [];

o = 0;

if (Object.keys(self.items).length==1)
{
//=============================
fetch('https://api.vk.com/method/wall.getComments?owner_id='+id+'&post_id='+self.items[0].id+'&count=100&thread_items_count=10&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

i1++;

console.log(i1);
console.log(Object.keys(self.items).length);

console.log(json.response);   
   
if(json.response !== undefined){
self.items2.push(json.response.items);
}
else
{
self.items2.push(null);
}

console.log(self.items2);

if((json.response !== undefined)&&(self.items2[i1]!=null)){

for (var j = 0; j< Object.keys(self.items2[i1]).length;j++)
{
self.entries.push(self.items2[i1][j].from_id);



for (var k = 0; k< Object.keys(self.items2[i1][j]).length;k++)
{

//console.log(self.items2[i1][j].thread.items[k]);
//console.log(self.items2[i1][j].thread.items[k].from_id);
if (self.items2[i1][j].thread.items[k]!=undefined)
self.entries.push(self.items2[i1][j].thread.items[k].from_id);

}

console.log(self.entries);




}



}


//=======================


self.entries= Array.from(new Set(self.entries));
console.log(self.entries);



done++;

console.log(done);
console.log(cnt);

if (done==cnt)
{
self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

limit =self.entries.length- 1;
console.log(limit);

waiting = 100*limit;
if (waiting > 5000)
waiting = 5000;

self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, waiting) );


console.log('F5');
}




});
}
});

//==============================

}
else
{


var i = -1;
var del = 100;

myLoop();
function myLoop() { 
self.timeouts.push( setTimeout(() => { 

i++;

if (i< Object.keys(self.items).length)
{

//=======================


if (self.items[i].comments.count>0)
del=1000;
else
del=0;

if (self.items[i].comments.count>0)
{
console.log(self.items[i]);

fetch('https://api.vk.com/method/wall.getComments?owner_id='+id+'&post_id='+self.items[i].id+'&count=100&sort=desc&thread_items_count=10&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

i1++;

console.log(i1);
console.log(Object.keys(self.items).length);

console.log(json.response);   
   
if(json.response !== undefined){
self.items2.push(json.response.items);
}
else
{
self.items2.push(null);
}

console.log(self.items2);

if((json.response !== undefined)&&(self.items2[i1]!=null)){

for (var j = 0; j< Object.keys(self.items2[i1]).length;j++)
{
self.entries.push(self.items2[i1][j].from_id);



for (var k = 0; k< Object.keys(self.items2[i1][j]).length;k++)
{

//console.log(self.items2[i1][j].thread.items[k]);
//console.log(self.items2[i1][j].thread.items[k].from_id);
if (self.items2[i1][j].thread.items[k]!=undefined)
self.entries.push(self.items2[i1][j].thread.items[k].from_id);

}

console.log(self.entries);




}



}


//=======================


self.entries= Array.from(new Set(self.entries));
console.log(self.entries);



done++;

console.log(done);
console.log(cnt);

if (done==cnt)
{
self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

limit =self.entries.length- 1;
console.log(limit);




self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 2500) );


console.log('F5');

}
else
{
self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myLoop.call(this); }, 500) );

}



});
}
});
}
else
{
done++;

if (done==cnt)
{
self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

limit =self.entries.length- 1;
console.log(limit);




self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 2500) );


console.log('F5');

}

self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myLoop.call(this); }, 50) );
}

}





}, del       ) );

}





}

//=====================



//=====================



}


});
}
});






}
else if ((URL.includes("wall"))&&(URL.includes("_")))
{

const URL = self.link;
fetch(URL)
.then(res => res.text())
.then(text => {
    //console.log(text);



var mySub = "1";

text = text.substring(
    0, 
    text.indexOf("<div id=\"footer_wrap\"")
);




while (!mySub.includes("DOCTYPE"))
{
mySub = "-1";

text = text.replace('<a class=\"post_field_user_link _post_field_author\" href=\"/', '');

mySub = text.substring(
    text.indexOf("author\" href=\"/")+15, 
    text.indexOf("data-from-id=")-2
);

console.log(mySub);

if (!mySub.includes("DOCTYPE"))
{
text=text.replace('author\" href=\"/', '');
text=text.replace('data-from-id=', '');

self.entries.push(mySub);
console.log(self.entries);
}


}

Array.prototype.unique = function() {
    return Array.from(new Set(this));
}
self.entries= self.entries.unique();
console.log(self.entries);

self.starttime = performance.now();

console.log("Heard:" + message.type);
console.log(message.content);

limit =self.entries.length- 1;
console.log(limit);

self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!');   myFunction5.call(this); }, 1100) );
console.log('F5');


//console.log(text);
})
.catch(err => console.log(err));
}



}





function myFunction5(){

c1 = 0;
c2 = 0;
c3 = 0;
c4 = 0;
c5 = 0;
c6 = 0;
c7 = 0;
c8 = 0;
c9 = 0;
c10 = 0;
c11 = 0;
c12 =0;
totalbp = 0;

self.rid = -1;
self.err=false;

self.posts_amount = 0;
self.blacklisted = 0;
self.totalpoints_cc = 0;
self.points = 0;
self.goals = 0;
self.totalgoals = 0;
self.totalbp = 0;


self.c6x = 0;

self.c1 = 0;
self.c2 = 0;
self.c3 = 0;
self.c4 = 0;
self.c5 = 0;
self.c6 = 0;
self.c7 = 0;
self.c8 = 0;
self.c9 = 0;
self.c10 = 0;
self.c11 = 0;
self.c12 = 0;
self.c41 = 0;
self.c71 = 0;

self.cc11 = 0;
self.cc21 = 0;
self.cc22 = 0;
self.cc31 = 0;
self.cc41 = 0;
self.cc42 = 0;
self.cc61 = 0;
self.cc62 = 0;
self.cc63 = 0;
self.cc71 = 0;
self.cc81 = 0;
self.cc91 = 0;
self.cc101 = 0;
self.cc102 = 0;
self.cc121A = 0;
self.cc121B = 0;



self.banned= 0;
self.deact = 0;
wall = [];
repc = 0;
pcount = 0;




























if (mistake == 1)
{
self.totalgoals=0;
self.goals=0;

console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 



self.totalgoals=tgoals;
self.err=false;

reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);

self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );



}
else
{

self.totalgoals=tgoals;
self.err=false;




reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);



}



}

const timer = setTimeout(() => { console.log("The timer function has run!" ); });
clearTimeout(timer);


console.log("timeouts:");
console.log(self.timeouts);
 
if ((self.timeouts.length>0)&&(mistake==1))
{
console.log(self.timeouts);

 for (var i=0; i< self.timeouts.length; i++) {
	self.clearTimeout(self.timeouts[i]);
	self.timeouts[i]=null;
	
}
mistake = 0;
self.timeouts = [];
console.log(self.timeouts);
}


if ( ((self.training==true)&&(self.order<limit))||(self.training==false) )
{













if (self.messg.type!="f8")
self.entries=self.messg.content[3];



console.log(Object.keys(self.messg).length);
console.log((self.messg));

<!-- initial -->
if (self.messg.type!="f8")
id = self.messg.content[0];




if (self.training == true){

//console.log(self.entries);

	if (self.order<limit)
{
console.log("["+(self.order+1)+"]"+" Switching to this id..")
self.order = self.order+1;

if (self.messg.type!="f8")
{
var res = self.entries[self.order].split("com/");
var b = res[0], c = res[1];


	id = c;
self.messg.content[0] = id;
}
else
{
id = self.entries[self.order];
self.messg.content[0] = id;
}
console.log("Extracted id from list: "+id);
mistake = 0;

}
else
return;
}
else
console.log("Extracted id: "+id);




if (!id)
{
fetchreq= 'https://api.vk.com/method/users.get?fields=country,city&access_token='+ self.messg.content[1] + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/users.get?user_ids='+id+'&fields=country,city&access_token='+ self.messg.content[1] + '&v=5.131';
}




const doAsyncWork5_1 = () => fetch(fetchreq, {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {
  if (response.ok) {
    response.json().then(json => {

setTimeout(() => {



if ((json.response!=undefined)) {

self.target_user = json;
console.log("ABC:");
console.log(self.target_user);


if (target_user.response.hasOwnProperty('0'))
self.name = target_user.response[0].first_name;

if (target_user.response.hasOwnProperty('0'))
self.lname = target_user.response[0].last_name;

}






if ((json.response==undefined)) {


console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}














}

else if (((json.response==undefined))||((self.target_user==undefined))) {


console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}





}
else
{

if (self.target_user.response.length==0) //страницы не существует , 404
{
console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);

self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );


}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}



}

console.log(json.response);


console.log("JSON.response.id:");
console.log(json.response[0].id);






self.messg.content[0] = json.response[0].id;

id = json.response[0].id;

self.rid = id;

if (self.training==true)
if (self.order <limit)
{
for (var i =stord+1; i <reslts.length; i++)
{

if (id==reslts[i][0]) //он уже есть в списке результатов
{
setTimeout(() => { console.log('Found existing.Skipping...'); myFunction5.call(this); }, 500+(100*self.mult) );
break;
}
}
}













console.log(self.totalgoals);

if ((self.single==1)&&(self.totalgoals==tgoals)&&(self.mistake==0))
{ console.log("ok!"); return;}
else if ((self.single==0)&&(self.training==false)&&(self.mistake==0))
{ console.log("ok!"); return;}



self.totalgoals = 0;
self.goals = 0;
console.log('Hello Timeout!'); 



 for (var i=0; i< self.timeouts.length; i++) {
	self.clearTimeout(self.timeouts[i]);
	self.timeouts[i]=null;
	
}
mistake = 0;
console.log(self.timeouts);
self.timeouts = [];


setTimeout(() => { console.log('Starting...'); myFunction2.call(this); }, 500+(100*self.mult) );









}





}, 150+(150*self.mult));







});
}
});

doAsyncWork5_1().then(() => console.log('used the fetching function 5.1'))
<!-- initial preparation-->
}
else

{


console.log("Done!");

var rs = new Array();

var meets = new Array();
var alt_reslts = new Array();
var alt_reslts2 = new Array();
var alt_reslts3 = new Array();
var meetsuser = new Array();
var cm = new Array();











for (var exc = 0; exc <=12; exc++)
{



alt_reslts[exc] = new Array();
alt_reslts2[exc] = new Array();
alt_reslts3[exc] = new Array();






console.log("Results for criteria excluded: " + exc);




rs[exc] = structuredClone(reslts);

console.log(rs[exc]);



if (exc>0)
for (var i = stord+1; i < limit+1; i++)
{



if (exc>0)
{
if (exc == 1)
{
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc] * i1);


if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}

else if (exc == 2)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i2);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);

}

else if (exc == 3)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i3);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}

else if (exc == 4)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i4);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);

}

else if (exc == 5)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i5);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}
else if (exc == 6)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i6);
if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);

}
else if (exc == 7)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i7);
if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}
else if (exc == 8)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i8);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);



}
else if (exc == 9)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i9);
if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}
else if (exc == 10)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i10);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}
else if (exc == 11)
{
rs[exc][i][13]= reslts[i][13] - (rs[exc][i][exc] * i11);

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);


}
else if (exc == 12)
{
if (rs[exc][i][exc]==1)
rs[exc][i][13]= rs[exc][i][13] -  i12_1;
else if (rs[exc][i][exc]==2)
rs[exc][i][13]= rs[exc][i][13] - i12_2;
else
rs[exc][i][13]= rs[exc][i][13] - 0;

if (exc1>0)
rs[exc][i][13]= rs[exc][i][13] - (rs[exc][i][exc1] * i8);

}



rs[exc][i][exc] = 0;
if (exc1>0)
rs[exc][i][exc1] = 0;


}


}












cm[exc]= [0,0,0, 0,0,0, 0,0,0, 0,0,0];



for (var i = stord+1; i < limit+1; i++)


{

if(rs[exc].length > i && rs[exc][i] !== null) {
alt_reslts[exc].push( [rs[exc][i][0], rs[exc][i][reslts[i].length-1] ]);
alt_reslts2[exc].push( rs[exc][i][rs[exc][i].length-1] );
alt_reslts3[exc].push( rs[exc][i][0]);


for (var j = 1; j < rs[exc][i].length-1; j++)
{

if  (rs[exc][i][j]>0)
cm[exc][j-1] = cm[exc][j-1]+1;

}



}
else
break;




}

var sumcr = 0;

for (var i = 0; i < cm[exc].length; i++)
{

if(cm[exc].length > i && cm[exc][i] !== null) {
sumcr = sumcr+ cm[exc][i];

}else
break;


}



meets[exc] = [0,0,0, 0,0,0, 0,0,0, 0,0,0];

for (var i = 0; i < cm[exc].length; i++)
{

if(cm[exc].length > i && cm[exc][i] !== null) {

meets[exc][i] = (cm[exc][i] / (sumcr / 100));

}else
break;


}


meetsuser[exc]=[0,0,0, 0,0,0, 0,0,0, 0,0,0];

for (var i = 0; i < cm[exc].length; i++)
{

if(cm[exc].length > i && cm[exc][i] !== null) {

meetsuser[exc][i] = (cm[exc][i] / ((limit+1) / 100));

}else
break;


}


if ((exc!=5)&&(exc!=11))
{
console.log("full results:");
console.log(rs[exc]);
console.log("results with id:");
console.log(alt_reslts[exc]);
console.log("results only:");
console.log(alt_reslts2[exc]);
console.log("respective id only:");
console.log(alt_reslts3[exc]);
console.log("criteria only:");
console.log(cm[exc]);
console.log("criteria met percent among total number of met criteria:");
console.log(meets[exc]);
console.log("criteria met percent among total number of users:");
console.log(meetsuser[exc]);

}
A_meets=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
B_meets=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
C_meets=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
D_meets=[0,0,0, 0,0,0, 0,0,0, 0,0,0];


A_meets_p=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
B_meets_p=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
C_meets_p=[0,0,0, 0,0,0, 0,0,0, 0,0,0];
D_meets_p=[0,0,0, 0,0,0, 0,0,0, 0,0,0];

user_class = new Array(200);

if (exc==0)
{

clss=0;
dcrsum = 0;
ccrsum = 0;
bcrsum = 0;
acrsum = 0;
dsum = 0;
csum = 0;
bsum = 0;
asum = 0;





for (var i = stord+1; i < limit+1; i++) 
	{

if(rs[exc].length > i && rs[exc][i] !== null) {

f_c = [0,0,0 ,0,0,0 ,0,0,0 ,0,0,0 ];
art = 0;
hum = 0;

for (var j = 0; j < 12; j++)
{
if ( ((rs[exc][i][j+1]==2)&&(j+1==4))||((rs[exc][i][j+1]==1)&&(j+1==7))||((rs[exc][i][j+1]>=1)&&(j+1==10)) )
{
f_c[j]=1;
}



}




for (var j = 0; j < 12; j++)
{

 
if (f_c[j]==1)
{


if ( (j+1==4))
art = art +1;
else if ( (j+1==7))
art = art +1;
else if ( (j+1==10))
art = art +1;

}




}
if (art==0)
hum = 3;

art=0;
hum=0;




clss= 0;


if ((rs[exc][i][13]>=0)&&(rs[exc][i][13]<7.5)) //D 
{





user_class[i] = "D";
clss = 1;




} //D

else if ((rs[exc][i][13]>=7.5)&&(rs[exc][i][13]<14.5)) //C
{



if ((rs[exc][i][13]>=13.5)&&(rs[exc][i][13]<14.5)&&(art>(hum)) )



 {


user_class[i] = "B";
clss = 3;
}
else 
{
user_class[i] = "C";
clss = 2;

}


} //C

else if ((rs[exc][i][13]>=14.5)&&(rs[exc][i][13]<21.5)) //B
{

if ((rs[exc][i][13]>=14.5)&&(rs[exc][i][13]<16.5)&&(hum>(art))  )
{
user_class[i] = "C";
clss = 2;
}
else
{
user_class[i] = "B";
clss = 3;
}




}

else if (rs[exc][i][13]>=21.5) //A
{


user_class[i] = "A";
clss = 4;


}


if (clss==0)
console.log("Error at "+i);


if (clss==1)
{
for (var j = 0; j < 12; j++)
{

if ( ((j+1)==2)||((j+1)==4)||((j+1)==10) )
divider= 2;
else  if ( ((j+1)==5)||((j+1)==6))
divider= 3;
else  if ( ((j+1)==12)&&(rs[exc][i][j+1]>0) )
divider= rs[exc][i][j+1];
else 
divider= 1;



if (rs[exc][i][j+1]>0)
D_meets[j] = D_meets[j]+1;



}
dsum = dsum + 1;
}

else if (clss==2)
{
for (var j = 0; j < 12; j++)
{

if ( ((j+1)==2)||((j+1)==4)||((j+1)==10) )
divider= 2;
else  if ( ((j+1)==5)||((j+1)==6))
divider= 3;
else  if ( ((j+1)==12)&&(rs[exc][i][j+1]>0) )
divider= rs[exc][i][j+1];
else 
divider= 1;



if (rs[exc][i][j+1]>0)
C_meets[j] = C_meets[j]+1;



}
csum = csum + 1;
}

else if (clss==3)
{
for (var j = 0; j < 12; j++)
{

if ( ((j+1)==2)||((j+1)==4)||((j+1)==10) )
divider= 2;
else  if ( ((j+1)==5)||((j+1)==6))
divider= 3;
else  if ( ((j+1)==12)&&(rs[exc][i][j+1]>0) )
divider= rs[exc][i][j+1];
else 
divider= 1;



if (rs[exc][i][j+1]>0)
B_meets[j] = B_meets[j]+1;


}
bsum = bsum + 1;
}

else if (clss==4)
{
for (var j = 0; j < 12; j++)
{

if ( ((j+1)==2)||((j+1)==4)||((j+1)==10) )
divider= 2;
else  if ( ((j+1)==5)||((j+1)==6))
divider= 3;
else  if ( ((j+1)==12)&&(rs[exc][i][j+1]>0) )
divider= rs[exc][i][j+1];
else 
divider= 1;



if (rs[exc][i][j+1]>0)
A_meets[j] = A_meets[j]+1;


}
asum = asum + 1;
}

}
else
break;
	}











for (var i = 0; i < 12; i++)
{
D_meets_p[i] = D_meets[i] / (dsum/100);
C_meets_p[i] = C_meets[i] / (csum/100);
B_meets_p[i] = B_meets[i] / (bsum/100);
A_meets_p[i] = A_meets[i] / (asum/100);
}

console.log("Классификация:");
console.log(user_class);

//============================================

if (exc==0)

{

self.saved_class.push(structuredClone(user_class));
self.saved_class.push(structuredClone(alt_reslts3[exc]));

}











//============================================

console.log("Измененные баллы:");

alt_reslts0 = new Array();

for (var i = stord+1; i < limit+1; i++) 
{
if(rs[exc].length > i && rs[exc][i] !== null) {

alt_reslts0.push( rs[exc][i][rs[exc][i].length-1] );
}
else
break;
}


console.log(alt_reslts0);

console.log("D classes:");
console.log(dsum);
console.log("D class signature:");
console.log(D_meets_p);
console.log(D_meets);

console.log("C classes:");
console.log(csum);
console.log("C class signature:");
console.log(C_meets_p);
console.log(C_meets);

console.log("B classes:");
console.log(bsum);
console.log("B class signature:");
console.log(B_meets_p);
console.log(B_meets);

console.log("A classes:");
console.log(asum);
console.log("A class signature:");
console.log(A_meets_p);
console.log(A_meets);





}







}



return;
}


}






function myFunction2(){


c1 = 0;
c2 = 0;
c3 = 0;
c4 = 0;
c5 = 0;
c6 = 0;
c7 = 0;
c8 = 0;
c9 = 0;
c10 = 0;
c11 = 0;
c12 =0;


self.rid = -1;
self.err=false;

















console.log("START");
self.posts_amount = 0;
self.blacklisted = 0;
self.totalpoints_cc = 0;
self.points = 0;
self.goals = 0;
self.totalgoals = 0;
self.totalbp = 0;


self.c6x = 0;

self.c1 = 0;
self.c2 = 0;
self.c3 = 0;
self.c4 = 0;
self.c5 = 0;
self.c6 = 0;
self.c7 = 0;
self.c8 = 0;
self.c9 = 0;
self.c10 = 0;
self.c11 = 0;
self.c12 = 0;
self.c41 = 0;
self.c71 = 0;

self.cc11 = 0;
self.cc21 = 0;
self.cc22 = 0;
self.cc31 = 0;
self.cc41 = 0;
self.cc42 = 0;
self.cc61 = 0;
self.cc62 = 0;
self.cc63 = 0;
self.cc71 = 0;
self.cc81 = 0;
self.cc91 = 0;
self.cc101 = 0;
self.cc102 = 0;
self.cc121A = 0;
self.cc121B = 0;



self.banned= 0;
self.deact = 0;
wall = [];
repc = 0;
pcount = 0;


id = self.messg.content[0];
if (!id)
{
fetchreq= 'https://api.vk.com/method/wall.get?&count=200&access_token='+ self.messg.content[1] + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/wall.get?owner_id='+id+'&count=200&access_token='+ self.messg.content[1] + '&v=5.131';
}



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



if (self.training == false)
{
if (json.response!=undefined)
console.log(json.response.items);
else
console.log("Can't access wall");
}

repc = 0;


if (!(self.target_user.response[0].hasOwnProperty('deactivated')))
if ((json.response==undefined)&& (self.target_user.response[0].is_closed == false) )
{
repc = 0;
self.posts_amount=0;
self.blacklisted = 1;

}

if ((json.response!=undefined)&& (self.target_user.response[0].is_closed == false) )
for (var i = 0; i < Object.keys(json.response.items).length; i++){

if(json.response.items[i].hasOwnProperty('copy_history'))
repc = repc+1;
else
self.posts_own = self.posts_own +1;
}


if (json.response!=undefined)
self.posts_amount=json.response.count;





console.log("res:");
console.log(json.response);


wall=json.response;






console.log(self.posts_amount);

if (self.posts_amount>0)
pcount=self.posts_amount;
else
pcount=0;



if ((!self.target_user)||(self.target_user == undefined))

{
if (self.training== true)
{

console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}





}

return;

}
else
{


self.totalgoals = self.totalgoals+1;


if (self.posts_amount < 150)
{

if ((self.posts_amount == 0)&& (json.response!=undefined))
{
totalbp = totalbp + i4*2 + i7;
c4 =c4+ 1;
cc42 = 1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c4 +" "+totalbp);
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass posts count check "+self.posts_amount+" ["+ goals+"/X]");
}
} else
{
totalbp = totalbp;
goals = goals+1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: posts count check OK "+self.posts_amount+" ["+ goals+"/X][+]");
}
}

}

else

{

totalbp = totalbp + i4;
c4 =c4+ 1;
cc42=1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c4 +" "+totalbp);
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass posts count check "+self.posts_amount+" ["+ goals+"/X]");
}
}



}


























});
}
}); 






<!-- search city target-->

self.training = self.messg.content[2];

id = self.messg.content[0];
if (self.training == true){
	self.messg.content[0] = self.messg.content[0];
	console.log("["+self.order+"] "+self.messg.content[0]);
}
else
self.messg.content[0]=self.messg.content[0]


if (self.mistake == 0) {

self.timeouts.push( setTimeout(() => {

if (!id)
{
fetchreq= 'https://api.vk.com/method/users.get?fields=country,city,has_photo,counters,bdate,education,occupation,connections,contacts,domain,last_seen&access_token='+ self.messg.content[1] + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/users.get?user_ids='+id+'&fields=country,city,has_photo,counters,bdate,education,occupation,connections,contacts,domain,last_seen&access_token='+ self.messg.content[1] + '&v=5.131';
}


//A

if (self.mistake == 0) {
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





console.log(json.response);

if (self.blacklisted==0)
if ( (!(json.response))||(json.response==undefined)||(json.response[0]==undefined)||(!(json.response[0].hasOwnProperty('first_name'))) )
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;


console.log('...');
myFunction5.call(this);
return;
}






if (self.training == false)
{
console.log(json);
}

var personal = 0; 


if (json.response!=undefined)
{


}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}


// личная информация - город день рождения место учебы работы, ссылки на соцсети (fields=connections), номер телефона, изменен ли id на короткое имя
// education,occupation,connections,contacts




if (json.response!=undefined)
{

if (json.response[0].hasOwnProperty('city'))
{
if (json.response[0].city!= undefined)
{
personal = personal + 0.5;
if (self.training == false)
{
console.log('Has city:'+json.response[0].city.title);
}
}
}
if (json.response[0].hasOwnProperty('country'))
{
if (json.response[0].country!= undefined)
{
personal = personal + 0.5;
if (self.training == false)
{
console.log('Has country:'+json.response[0].country.title);
}
}
}
if (json.response[0].hasOwnProperty('bdate'))
{
if (json.response[0].bdate!= undefined)
{
personal = personal + 1;
if (self.training == false)
{
console.log('Has birth day:'+json.response[0].bdate);
}
}
}
if (json.response[0].hasOwnProperty('education'))
{
if (json.response[0].education!= undefined)
{
personal = personal + 0.5;
if (self.training == false)
{
console.log('Has education:'+json.response[0].education);
}
}
}
if (json.response[0].hasOwnProperty('occupation'))
{
if (json.response[0].occupation!= undefined)
{
personal = personal + 0.5;
if (self.training == false)
{
console.log('Has job:'+json.response[0].occupation);
}
}
}
if (json.response[0].hasOwnProperty('connections'))
{
if (json.response[0].connections!= undefined)
{
personal = personal + 0.5;
if (self.training == false)
{
console.log('Has external links:'+json.response[0].connections);
}
}
}
if (json.response[0].hasOwnProperty('contacts'))
{
if (json.response[0].contacts!= undefined)
{
personal = personal + 1;
if (self.training == false)
{
console.log('Has contact data:'+json.response[0].contacts);
}
}
}
if (json.response[0].hasOwnProperty('domain'))
{
if (json.response[0].id!= undefined)
{

if ("id"+json.response[0].id != json.response[0].domain)
{
personal = personal + 0.5;


if (self.training == false)
{
console.log("Has changed id to short name: "+json.response[0].domain+" "+json.response[0].id);
}

}

}
}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this); return;}, 0+(0*self.mult)) );

}




}

console.log("a");
console.log(personal);


if (personal >= 2)
{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp;
goals = goals+1;
if ((self.totalgoals==tgoals)   )
if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push( setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)));
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c8] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile personal data check OK ["+ goals+"/X][+]");
}
}
else
{
self.totalgoals = self.totalgoals +1;
goals = goals;
if (personal > 0)
totalbp = totalbp + i8-(personal*0.5);
else
totalbp = totalbp + i8;

c8 = c8+1;
cc81 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );

}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c8 +" "+totalbp);
console.log("[c8] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: failed profile personal data check ["+ goals+"/X]");
}
}


if (json.response!=undefined)
{
if (json.response[0].hasOwnProperty('last_seen'))


{

let unix_timestamp = json.response[0].last_seen.time;
var a = new Date(unix_timestamp * 1000);var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear(); 
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;



if (self.training == false)
{
console.log(json.response[0].first_name+" "+json.response[0].last_name+" last online: "+time);
}

if ( (today.getFullYear()- a.getFullYear()==0) || ( (today.getFullYear()- a.getFullYear()==1) && (a.getMonth()-today.getMonth()==11) ) )
{
if ( ((today.getMonth()-a.getMonth())>1) ||( ((today.getMonth()-a.getMonth())==1)&&((today.getDate()-a.getDate())<=today.getDate())&&((today.getDate()-a.getDate())>=0)  ) )
{



self.totalgoals = self.totalgoals +1;


totalbp = totalbp + i10;

c10 = c10+1;
cc101 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)));
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile last online check failed ["+ goals+"/X][+]");
}
}





else if ((today.getFullYear()- a.getFullYear()==1)&& ( ((a.getMonth()-today.getMonth())<11) ||( ((a.getMonth()-today.getMonth())==11)&&((today.getDate()-a.getDate())<=today.getDate())&&((today.getDate()-a.getDate())>=0)  ) ))
{



self.totalgoals = self.totalgoals +1;


totalbp = totalbp + i10;

c10 = c10+1;
cc101 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)));
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile last online check failed ["+ goals+"/X][+]");
}
}



else
{
self.totalgoals = self.totalgoals +1;
goals = goals + 1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)));

}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile last online check OK ["+ goals+"/X][+]");
}
}


}
else
{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i10;
c10 = c10+1;
cc101 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile last online check failed ["+ goals+"/X][+]");
}
}


}
else
{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i10;
c10 = c10+1;
cc101 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile last online check failed, can't access ["+ goals+"/X][+]");
}
}

}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}


if (json.response!=undefined)
{
if (json.response[0].hasOwnProperty('has_photo'))
{

if (json.response[0].has_photo == 1 )
{
self.totalgoals = self.totalgoals +1;

goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c2] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: profile photo_set check OK ["+ goals+"/X][+]");
}
}
else
{
self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp + i2;
c2 = c2+1;
cc21 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c2 +" "+totalbp);
console.log("[c2] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: failed to pass profile photo_set check ["+ goals+"/X]");
}
}

}


}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}





if (json.response!=undefined)
{



if(!(json.response[0].hasOwnProperty('deactivated')))
if ((json.response[0].hasOwnProperty('counters'))&&(self.blacklisted==0))
{
if (json.response[0].counters.hasOwnProperty('friends'))
self.friends_amount = json.response[0].counters.friends;
if (json.response[0].counters.hasOwnProperty('posts'))
self.posts_own = json.response[0].counters.posts;
else if (self.posts_own==undefined)
self.posts_own = 0;
else
self.posts_own = 0;

if (json.response[0].counters.hasOwnProperty('groups'))
if (json.response[0].counters.groups == 0)
self.groups_amount = json.response[0].counters.pages;
else
self.groups_amount = json.response[0].counters.groups;
if (json.response[0].counters.hasOwnProperty('followers'))
self.follow_amount = json.response[0].counters.followers;

console.log(json.response[0].counters);
console.log(self.friends_amount);
console.log(self.posts_own);
console.log(self.groups_amount);
console.log(self.follow_amount);
}
else if (self.blacklisted==0)
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}




if ((json.response!=undefined))
{
if(json.response[0].hasOwnProperty('deactivated'))
if (json.response[0].deactivated == "deleted")
{

deact = 1;
self.banned = 2;
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i12_1;
c12 = 1;
cc121B = 1;

if (self.training == false)
{
console.log(c12 +" "+totalbp);
}


goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}


if (self.training == false)
{
console.log("[c12] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: failed to pass account deactivation check, account deleted ["+ goals+"/X] [-]");
}

}
else if (json.response[0].deactivated == "banned")
{

deact = 1;
self.banned = 1;
self.totalgoals = self.totalgoals +1;
//totalbp = totalbp + i12_2;

totalbp = 25;


c12 = 2;
cc121A = 1;
if (self.training == false)
{
console.log(c12 +" "+totalbp);
}

goals = goals;




if ((self.totalgoals==tgoals)   )


if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c12] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: failed to pass account deactivation check, account banned ["+ goals+"/X] [-]");
console.log("A:"+self.banned);
}



}
else
{


self.totalgoals = self.totalgoals +1;
totalbp = totalbp;
goals = goals +1;

self.banned = 0;

if ((self.totalgoals==tgoals)   )


if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c12] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: account deactivation check OK, account is up ["+ goals+"/X] [+]");

}

}
else
{


self.totalgoals = self.totalgoals +1;
totalbp = totalbp;
goals = goals +1;

self.banned = 0;

if ((self.totalgoals==tgoals)   )


if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c12] ["+self.totalgoals+"/X] [target-"+json.response[0].first_name+" "+json.response[0].last_name+ " result]: account deactivation check OK, account is up ["+ goals+"/X] [+]");
}

}



}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}
}


self.messg.content[0] = json.response[0].id;

id = self.messg.content[0];



if (self.training == false)
{
console.log("[Target user - Personal data]:"+json.response[0].id+" "+json.response[0].first_name+" "+json.response[0].last_name);
}




if (json.response!=undefined)
{
if(json.response[0].hasOwnProperty('city')){


if (self.training == false)
{
console.log("[city]:"+json.response[0].city.title);
}



}
else
{

if (self.training == false)
{
console.log("[city]:"+ "hidden");
}



}

}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}


if (json.response!=undefined)
{
  if(json.response[0].hasOwnProperty('country')){  


if (self.training == false)
{
console.log("[country]:"+json.response[0].country.title);
}

}
else
{


if (self.training == false)
{
console.log("[country]:"+ "hidden");
}

}
}
else
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;

self.timeouts.push( setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );

}




}); 
}

<!-- search city target-->




<!-- wall data -->

id = self.messg.content[0];
if (!id)
{
fetchreq= 'https://api.vk.com/method/wall.get?&count=200&access_token='+ self.messg.content[1] + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/wall.get?owner_id='+id+'&count=200&access_token='+ self.messg.content[1] + '&v=5.131';
}

//B


console.log(self.mistake);

var st1=1;



if (self.mistake == 0) {
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





if ((json.response != undefined)&&(self.target_user.response[0].is_closed == false)) {

if (self.training == false)
{
console.log(json.response.items);
}





var ownc = 0;

if (json.response!=undefined)
{
console.log("response:");
console.log(json.response);
}




























let pcount = self.posts_own;


console.log("CHECKING POSTS");
if (self.training == false)
{
console.log(pcount);
}


links = 0;
for (var i = 0; i < Object.keys(json.response.items).length; i++){

if(json.response.items[i].hasOwnProperty('copy_history'))
{
ownc = ownc;
if(json.response.items[i].copy_history[0].hasOwnProperty('attachments'))
if(json.response.items[i].copy_history[0].attachments[0].hasOwnProperty('link'))
links = links +1;
else if (json.response.items[i].copy_history[0].hasOwnProperty('text'))
{
if (json.response.items[i].copy_history[0].text.indexOf('http') > -1)
{
  links = links +1;
}

}

}
else if(json.response.items[i].hasOwnProperty('attachments'))
ownc = ownc + 1;
else
ownc = ownc +0.5;

}


if ( self.blacklisted==1 )


{

self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp;

c71 = 1;
cc71 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c7] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: post activity check failed, private profile, no points ["+ goals+"/X][+]");
}






}







else
{



for (var i = 0; i < Object.keys(json.response.items).length; i++){







if (i == 0)
{

console.log("POSTS TEST");


if(json.response.items[i].hasOwnProperty('views'))
 {




if ((self.friends_amount>0)&&( (json.response.items[i].views.count / (self.friends_amount/100)) > 10 )||((self.friends_amount==0)&&(json.response.items[i].views.count >=100)))
  {
self.totalgoals = self.totalgoals +1;
goals = goals + 1;
totalbp = totalbp;
c71 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c7] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: post activity check OK "+(json.response.items[i].views.count / (self.friends_amount/100))+"% users (including friends) watched first post ["+ goals+"/X][+]");
}
  }
else
{
self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp + i7;
c7 = 1;
c71 = 1;
cc71 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c7 +" "+totalbp);
console.log("[c7] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass post activity check "+(json.response.items[i].views.count / (self.friends_amount/100))+"% users (including friends) watched first post ["+ goals+"/X] [-]");
}

 }

}
else
{
self.totalgoals = self.totalgoals +1;
goals = goals;

if (json.response.items[i].hasOwnProperty('copy_history'))
{
totalbp = totalbp + i7;
c7 = 1;
}

c71 = 1;
cc71 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c7 +" "+totalbp);
console.log("[c7] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass post activity check, can't obtain views on first post, no points ["+ goals+"/X] [-]");
}

 }




}

















}










console.log(self.posts_amount);

pcount = self.posts_amount;




}

if (self.training == false)
{
console.log("[Target user - reposts points]:"+repc);
console.log("[Target user - link points]:"+links);
console.log("[Target user - own posts points]:"+ownc);
}

if (pcount==0)
pcount = Object.keys(json.response.items).length
console.log(pcount)




if ( ((links>0)&&(links/pcount>=0.05)&&(pcount >0)) || ((pcount >0) && (repc/pcount > 0.95)) )
{

self.totalgoals = self.totalgoals +1;

goals = goals;


if ((links>0)&&(links/pcount>=0.05)&&(pcount >0))
totalbp = totalbp + i4*2;

if ((pcount >0) && (repc/pcount > 0.5))
if (pcount >10)
totalbp = totalbp + i4;
else if (pcount <=10)
totalbp = totalbp + i4/1.5;

c4 = c4+1;

c41=1;
cc41=1;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c4 +" "+totalbp);
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass repost check, repost point % = "+100*repc/pcount+" links: "+links/pcount+" ["+ goals+"/X] [-]");
}
} 


else if ((pcount >0) && (repc/pcount <= 0.5))
{

self.totalgoals = self.totalgoals +1;

goals = goals+1;
c41=1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: repost check OK, repost point % ="+100*repc/pcount+" ["+goals+"/X][+]");
}
}

else if (((pcount >0) && (Object.keys(json.response.items).length==0)) || ((pcount ==0) && (Object.keys(json.response.items).length==0)) || (self.blacklisted==1))
{

self.totalgoals = self.totalgoals +1;

goals = goals+1;
totalbp = totalbp;


c41=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: repost check failed, private profile, no points ["+goals+"/X][+]");
}
}








}



})




.then((data) => {
console.log("DATA STORED")
           console.log(data.response)
            
        })

.catch((error) => {

if (c71==0)
{
self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp;

c71 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c7] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: post activity check failed, can't get data, no points ["+ goals+"/X][+]");
}


}

if (c41==0)
{

c41=1;
self.totalgoals = self.totalgoals +1;
goals = goals+1;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c4] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: repost check failed, can't get data, no points ["+goals+"/X][+]");
}

}





})
            

}


}); }

 //B

<!-- date created -->



id = self.messg.content[0];

fetchreq= 'https://vk.com/foaf.php?id='+id;

//C


if (self.mistake == 0) {
fetch(fetchreq, {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.text().then(text => {





if (self.training == false)
{
console.log(self.banned);
}

if (((self.banned ==1)||(self.banned == 2)) || (self.target_user.response[0].hasOwnProperty('deactivated')) )
{
self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp + i10;
c10 = c10 +1;
cc102 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check failed - account suspended ["+ goals+"/X][+]");




}

}




else if (self.banned == 0)
{


if (text != undefined) {


if (self.training == false)
{
console.log(text);
}



createddata = text.substring(text.indexOf("created dc:date=\"")+17, text.indexOf("/>",text.indexOf("created dc:date=\""))-1);

if ( (typeof createddata[0] !== 'string') ||(createddata==undefined))
{

if (self.training== true)
{
console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 



self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;

self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}




}

return;
}


if (self.training == false)
{
console.log(createddata);
console.log(moment(createddata).utc().format('DD/MM/YYYY'))
console.log(moment(createddata).fromNow());
}

var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth()+1;
var dd = today.getDay()-1;
console.log("TODAY:");
console.log(yyyy);
console.log(mm);
console.log(dd);

if (self.training == false)
{
console.log(yyyy - moment(createddata).utc().format('YYYY'));
}


if (yyyy - moment(createddata).utc().format('YYYY')>1)
{

self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check OK ["+ goals+"/X][+]");
console.log("year >1 ok");
}
}

else if (yyyy - moment(createddata).utc().format('YYYY')==1)
{
if (Math.abs(12+mm - moment(createddata).utc().format('MM'))>1)
{

self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check OK ["+ goals+"/X][+]");
console.log("year =1, m>1 ok");
}
}
else
if (Math.abs(dd - moment(createddata).utc().format('DD'))>1)
{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i10;
c10 = c10+1;
cc102 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check failed, profile was created less than month ago ["+ goals+"/X][+]");

}
}
else
{

self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check OK ["+ goals+"/X][+]");

}
}

}

else
{
if  (yyyy - moment(createddata).utc().format('YYYY') == 0)
if (Math.abs(mm - moment(createddata).utc().format('MM'))==0)

{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i10;
c10 = c10+1;
cc102 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check failed, profile was created this month ["+ goals+"/X][+]");

}
}

else if (Math.abs(mm - moment(createddata).utc().format('MM'))==1)
{
if (Math.abs(dd - moment(createddata).utc().format('DD'))>1)
{
self.totalgoals = self.totalgoals +1;
totalbp = totalbp + i10;
c10 = c10+1;
cc102 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c10 +" "+totalbp);
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check failed, profile was created less than month ago ["+ goals+"/X][+]");

}
}
else
{
self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check OK ["+ goals+"/X][+]");
}




}

}

else if (Math.abs(mm - moment(createddata).utc().format('MM')) >1)



{
self.totalgoals = self.totalgoals +1;
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c10] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile date creation check OK ["+ goals+"/X][+]");




}

}








}







}
}


});

}


}); }
//C


<!-- get friends-->

<!--get target user communitites -->

id = self.messg.content[0];
//D
self.timeouts.push( setTimeout(() => {

if (self.mistake == 0) {
fetch('https://api.vk.com/method/groups.get?user_id='+id+'&count=100&extended=1&fields=city,activity,members_count&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

if (self.training == false)
{
console.log(json);
}

if (json.response == undefined)
{

self.totalgoals = self.totalgoals+1;
goals = goals;




goals = goals;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check - can't get access, no points ["+ goals+"/X]");
}



}



if (self.blacklisted==0)
if ((json.response == undefined)&&(self.target_user.response[0].is_closed == false))
{
if (self.training== true)
{
console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}




}

return;
}






if (self.blacklisted==1)
{
self.totalgoals = self.totalgoals+1;
goals = goals;
totalbp = totalbp + i9;
c9 = 1;
cc91 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check "+(points_com / (totalpoints_com / 100))+"% ["+ goals+"/X]");
}


}









self.totalgoals = self.totalgoals+1;

if (self.blacklisted==0)
if (json.response != undefined) {
var points_com = 0;
var trustiss = 0.5;
var totalpoints_com = 0;



for (var i = 0; i < json.response.count; i++){





if (Object.keys(json.response.items).length >0){

if (!(json.response.items[i]==undefined))
{
if (json.response.items[i].hasOwnProperty('city'))
{
totalpoints_com = totalpoints_com + 1;
if (self.target_user.response[0].city == json.response.items[i].city.title)
{

points_com = points_com + 1;



}

}

}


}
}

console.log("Points: "+points_com +" / "+totalpoints_com +" / " + json.response.count);
console.log((totalpoints_com/json.response.count));





if (self.target_user.response[0].is_closed==true)
{



goals = goals;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check - can't get access, no points ["+ goals+"/X]");
}
}
else if (self.target_user.response[0].is_closed==false)
{
if (json.hasOwnProperty('response'))



if (  ((json.response.count>0) && (points_com / (totalpoints_com / 100)) >= 75)|| ((totalpoints_com/json.response.count<0.3)&&(json.response.count<30)) )
{
goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: communities trust check OK "+(points_com / (totalpoints_com / 100))+"% ["+ goals+"/X][+]");
}
} else if (!(isNaN((totalpoints_com/json.response.count))))
{
goals = goals;

if ((self.friends_amount <=150 )&& ((c10 > 0) || ((pcount>0)&&(repc/pcount > 0.95)) || (pcount > 150)) )
totalbp = totalbp + i9;
else if ((self.friends_amount >=1000)|| ((c10 > 0)&& (pcount>= 150)) || (repc/pcount > 0.95) )
totalbp = totalbp + i9;
else if (json.response.count >=500)
totalbp = totalbp + i9;
else
totalbp = totalbp;


c9 = 1;
cc91 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check "+(points_com / (totalpoints_com / 100))+"% ["+ goals+"/X]");
}
}




else
{



goals = goals;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check - can't get access, no points ["+ goals+"/X]");
}
}

}

}
else
{



goals = goals;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c9 +" "+totalbp);
console.log("[c9] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass communities trust check - can't get access, no points * ["+ goals+"/X]");
}
}






});
} 
}); }    
}, 300*self.mult) ); //D





id = self.messg.content[0];
self.timeouts.push( setTimeout(() => {

if (self.mistake == 0) {
fetch('https://api.vk.com/method/friends.get?user_id='+id+'&count=200&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {

  if (response.ok) {
    response.json().then(json => {

      

if(json.response !== undefined){




if (self.training == false)
{
console.log("Users list:");

console.log(json);
}

if (self.blacklisted==1)
users = '';
else
users= json;

if (self.blacklisted==0)
userslist = JSON.stringify(json.response.items);

if (self.blacklisted==0)
userslist = userslist.substring(
    userslist.indexOf("[") + 1, 
    userslist.lastIndexOf("]")
);




self.totalgoals = self.totalgoals+1;







let fol = self.follow_amount;



if ((json.response.count>0)&&(fol >= json.response.count*3 ))
{
goals = goals;
totalbp = totalbp + i6;
c6 = c6 +1;
cc61 = 1;

if ((self.totalgoals==tgoals)   )
if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check - too much followers, followers amount: "+fol+" to "+json.response.count+" friends amount="+fol / (json.response.count / 100)+"% followers to friends ratio ["+ goals+"/X]");
}
}

else
           {



if (json.response.count <= 150)
{

if (json.response.count <30)
{
goals = goals;


if ((c10 > 0) || ((pcount>0)&&(repc/pcount > 0.95)) || (pcount> 150))
{
totalbp = totalbp + i6;
c6x= 1;
}
else
totalbp = totalbp;



c6 = c6 +1;
cc61 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check "+json.response.count+" ["+ goals+"/X]");
}
} else
{
goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: friends count check OK "+json.response.count+" ["+ goals+"/X][+]");
}
}

}

else

{




if ((json.response.count>=1000)|| ((c10 > 0)&& (pcount>= 150)) || (repc/pcount > 0.95) )
{
totalbp = totalbp + i6;
c6x= 1;
}
else
totalbp = totalbp;




c6 = c6+1;
cc61 = 1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check "+json.response.count+" ["+ goals+"/X]");
}
}

}

console.log("target:");
console.log(self.target_user);


























 }
else
{
console.log("Friends list can't be reached!");












userslist = 'Nan';

let amount = self.friends_amount;

self.totalgoals = self.totalgoals+1;
let fol = self.follow_amount;

if (fol / (amount / 100) >= 90)
{
totalbp = totalbp + i6;
c6 = c6+1;
cc61 = 1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check - too much followers, followers amount: "+fol+" to "+amount+" friends amount="+fol / (amount / 100)+"% followers to friends ratio ["+ goals+"/X]");
}
}

else
           {



if (amount <= 150)
{

if (amount == 0)
     {
totalbp = totalbp + i6;
c6 = c6+1;
cc61 = 1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check "+amount+" ["+ goals+"/X]");
}
     }
 else
    {
totalbp = totalbp;

goals = goals+1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: friends count check OK "+amount+" ["+ goals+"/X][+]");
}
    }

}
           
else

{

totalbp = totalbp + i6;
c6 = c6+1;
cc61 = 1;
goals = goals;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass friends count check "+amount+" ["+ goals+"/X]");
}
}


}



goals = goals+1;
totalbp = totalbp;
self.totalgoals = self.totalgoals+1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: abandoned friends accounts check OK, friend list can't be reached, no points obtained ["+goals+"/X][+]");
}

goals = goals+1;
self.totalgoals = self.totalgoals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: banned friends check OK ,friend list can't be reached, no points obtained ["+goals+"/X][+]");
}



}

<!--id = users.response.items[i]; -->





<!-- search city -->

if (userslist =='Nan')
{

points = 0;
totalpoints_cc=100;



citycountrypercent = points / (totalpoints_cc / 100);


self.totalgoals = self.totalgoals+1;


if (citycountrypercent < 30)
{
goals = goals;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c1 +" "+totalbp);
console.log("[c1] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass city and country check "+citycountrypercent+"% , can't obtain data, no points["+ goals+"/X]");
}
} else
{
goals = goals+1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c1] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: city and country check OK "+citycountrypercent+"% ["+goals+"/X][+]");
}
}

self.totalgoals = self.totalgoals+1;

if (self.blacklisted==0)
if ((self.target_user==undefined)&&(self.target_user.response[0].is_closed == false))
{

if (self.training== true)
{
console.log("ERROR");
self.err=true;
if (self.training==true)
{


self.order = self.order;

self.myorder = self.myorder+1; 


self.totalgoals=tgoals;
self.err=false;


reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);




self.timeouts.push(  setTimeout(() => { console.log('Skipping...'); myFunction5.call(this); }, 1000+(100*self.mult)) );




}
else
{

self.totalgoals=tgoals;
self.err=false;
reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);
}




}

return;
}

if (self.target_user.response[0].is_closed == true){
totalbp = totalbp + i3;
c3 =1;
cc31=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c3 +" "+totalbp);
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - closed (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X]");
}
}



else if ((self.blacklisted==1)&&(self.target_user.response[0].is_closed == false)){
totalbp = totalbp + i3;
c3 =1;
cc31=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c3 +" "+totalbp);
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - blacklist (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X]");
}
}


else if (self.target_user.response[0].is_closed == false)
{
goals = goals +1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - open (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X][+]");
}
}
else
{
totalbp = totalbp + i3;
c3 = c3+1;
cc31=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}


if (self.training == false)
{
console.log(c3 +" "+totalbp);
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - undefined (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X]");
}
}


}
else
{

points = 0;
totalpoints_cc=0;
//E2
self.timeouts.push( setTimeout(() => {

if (self.mistake == 0) {
fetch('https://api.vk.com/method/users.get?user_ids='+userslist+'&fields=country,city,last_seen&access_token='+ self.messg.content[1] + '&v=5.131', {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
  headers: {
    "Accept": 'text/plain',
  },

},
).then(response => {


console.log(response);

  if (response.ok) {
    response.json().then(json => {


console.log('Response.ok');

if (self.blacklisted==0)
if (json.response==undefined)
{
console.log("Undefined value. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;


console.log('...'); 
myFunction5.call(this);
return;

}
else
{

if (self.training == false)
{
console.log(json);
}



var banned_amount = 0;
var deleted_amount = 0;
var totalusers= Object.keys(json.response).length;
var abandoned = 0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

if (self.blacklisted==1)
{

self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp + i6;
c6 = c6 + 1;
cc62 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass abandoned friends accounts check "+abandonedpercent+"% abandoned ["+ goals+"/X]");
}
self.totalgoals = self.totalgoals +1;
goals = goals;
totalbp = totalbp + i6;
c6 = c6 + 1;
cc63 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass banned friends check "+bannedpercent+"% banned, "+deletedpercent+"% deleted ["+ goals+"/X]");
}
self.totalgoals = self.totalgoals +1;
goals = goals;


if (c6x > 0)
totalbp = totalbp + i1;
else
totalbp = totalbp

c1 =1;
cc11=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c1 +" "+totalbp);
console.log("[c1] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass city and country check "+citycountrypercent+"% ["+ goals+"/X]");
}




}


if (self.blacklisted==0)
for (var i = 0; i < Object.keys(json.response).length; i++){


if (json.response[i].hasOwnProperty('last_seen'))
{


let unix_timestamp = json.response[i].last_seen.time;
var a = new Date(unix_timestamp * 1000);
  
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;


if (today.getFullYear()- a.getFullYear()==0)
{
if ((today.getMonth()-a.getMonth())>=1)
{
abandoned = abandoned + 1;
}
}
else
{
abandoned = abandoned + 1;
}


}




//--------------------------------------------------------------

if (json.response[i].hasOwnProperty('deactivated'))
if (json.response[i].deactivated == "deleted")
{
deleted_amount = deleted_amount+1;
if (self.training == false)
{
console.log("["+i+"] "+json.response[i].id+" "+json.response[i].first_name+" "+json.response[i].last_name+" deleted");
}

}
else if (json.response[i].deactivated == "banned")
{
banned_amount = banned_amount+1;
if (self.training == false)
{
console.log("["+i+"] "+json.response[i].id+" "+json.response[i].first_name+" "+json.response[i].last_name+" banned");
}

}


//--------------------------------------------------------------

c_ok = 0;
if(json.response[i].hasOwnProperty('city')){
if (c_ok == 0)
{
totalpoints_cc = totalpoints_cc + 1;
c_ok = 1;
}





<!-- здесь будет обработан город - сравнивается с тем что у юзера -->
if(self.target_user.response[0].hasOwnProperty('city'))
if (self.target_user.response[0].city.title == json.response[i].city.title){
points = points +0.8;


}




}


if(json.response[i].hasOwnProperty('country')){  
if (c_ok == 0)
{
totalpoints_cc = totalpoints_cc + 1;
c_ok = 1;
}
else
c_ok == 0;




<!-- здесь будет обработана страна - сравнивается с тем что у юзера. доля значимости город / страна - 0.8 / 0.2, подразумевается что в подавляющем большинстве пользователи указывают россию, город будет значить больше -->
if(self.target_user.response[0].hasOwnProperty('country'))
if (self.target_user.response[0].country.title == json.response[i].country.title){
points = points +0.2;

}




}

}


<!-- x очков что мы набрали, нужно использовать в следующем вычислении - i (максимум очков) / 100 = 1%. x / 1% = искомое y% -->

if (self.training == false)
{
console.log("Abandoned friends acc points:"+points+" "+totalpoints_cc);
}

console.log(totalpoints_cc);
citycountrypercent = points / (totalpoints_cc / 100);

abandonedpercent = abandoned / (totalusers / 100);

bannedpercent = banned_amount / (totalusers / 100);
deletedpercent = deleted_amount / (totalusers / 100);

self.totalgoals = self.totalgoals+ 1;



if (abandonedpercent >= 30)
{
goals = goals;
totalbp = totalbp + i6;
c6 = c6 + 1;
cc62 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass abandoned friends accounts check "+abandonedpercent+"% abandoned ["+ goals+"/X]");
}
} else
{
goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: abandoned friends accounts check OK "+abandonedpercent+"% abandoned ["+goals+"/X][+]");
}
}


self.totalgoals = self.totalgoals +1;



if (deletedpercent+bannedpercent >= 10)
{
goals = goals;


if ((c8>0)||(c10>0))
totalbp = totalbp + 3*i6;

totalbp = totalbp + i6;
c6 = c6 + 1;
cc63 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c6 +" "+totalbp);
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass banned friends check "+bannedpercent+"% banned, "+deletedpercent+"% deleted ["+ goals+"/X]");
}
} else
{

goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c6] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: banned friends check OK "+bannedpercent+"% banned, "+deletedpercent+"% deleted ["+goals+"/X][+]");
}
}






self.totalgoals = self.totalgoals+ 1;
if (citycountrypercent < 30){
goals = goals;


if (c6x > 0)
totalbp = totalbp + i1;
else
totalbp = totalbp




c1 =1;
cc11=1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c1 +" "+totalbp);
console.log("[c1] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: failed to pass city and country check "+citycountrypercent+"% ["+ goals+"/X]");
}
} else
{
goals = goals+1;
totalbp = totalbp;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c1] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: city and country check OK "+citycountrypercent+"% ["+goals+"/X][+]");
}
}



self.totalgoals = self.totalgoals+ 1;
if (self.target_user.response[0].is_closed == true){
totalbp = totalbp + i3;
c3 = c3 + 1;
cc31=1;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c3 +" "+totalbp);
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - closed (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X]");
}
}
else
{
goals = goals +1;
totalbp = totalbp;


if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log("[c3] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: profile type - open (closed="+self.target_user.response[0].is_closed +") ["+ goals+"/X][+]");
}

}


} 




});
}
else
{

console.log("Can't obtain results. Retrying...");
self.mistake = 1;
if (self.training== true)
self.order= self.order -1;
self.timeouts.push(  setTimeout(() => { console.log('...'); myFunction5.call(this);return; }, 0+(0*self.mult)) );


}


}); }
}, 400*self.mult)  ); //E2




}















<!-- search city -->






 });




  }



}); }

}, 900*self.mult) ); //E1

id = self.messg.content[0];
if (!id)
{
fetchreq= 'https://api.vk.com/method/photos.get?album_id=profile&rev=1&count=10&access_token='+ self.messg.content[1] + '&v=5.131';
}
else
{
fetchreq= 'https://api.vk.com/method/photos.get?owner_id='+id+'&album_id=profile&rev=1&count=10&access_token='+ self.messg.content[1] + '&v=5.131';
}

//F
self.timeouts.push( setTimeout(() => {

if (self.mistake == 0) {
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

      

if(json.response != undefined){




if (self.training == false)
{
console.log("Photos:");

console.log(json);
}

photos= json;



points = 0;
for (var i = 0; i < Object.keys(json.response.items).length; i++){
totalpoints_photos = i;








}

if (Object.keys(json.response.items).length>0)
{
//G
self.timeouts.push( setTimeout(() => {

if (self.mistake == 0) {
fetch(photos.response.items[0].sizes[0].url, {mode: 'cors', dest: 'document',
credentials: 'include',
method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
       })
.then((response) => response.blob())
.then((blob) => {

// 2. Create blob link to download



// const url = self.URL.createObjectURL(new Blob([blob]));
//console.log(url);
//const link = document.createElement('a');
//link.href = url;
//console.log(link.href);


   
//   document.querySelector("#image").src = link.href;






//link.setAttribute('download', `image.jpg`);
 // 3. Append to html page
// document.body.appendChild(link);
 // 4. Force download
// link.click();
 // 5. Clean up and remove the link
// link.parentNode.removeChild(link);


console.log("target user:");
console.log(self.target_user);




self.totalgoals= self.totalgoals +1;
goals= goals +1;
totalbp = totalbp;

if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);

self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}



if (self.training == false)
{
console.log("[c2] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: photos check ok [BETA] ["+goals+"/X][+]");
}

}) }
}, 1500*self.mult) ); //G

}







else
{
self.totalgoals= self.totalgoals +1;
if (self.training == false)
{
console.log("Photos can't be reached!");
}

totalbp = totalbp + i2;
c2 = c2 + 1;
cc22 = 1;
if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c2 +" "+totalbp);
console.log("[c2] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: photos check failed ["+goals+"/X]");
}



photos = 'Nan';
}
 }
else
{
self.totalgoals= self.totalgoals +1;
if (self.training == false)
{
console.log("Photos can't be reached!");
}


if ((self.totalgoals==tgoals)   )

if (self.training == true)
{
console.log("ok!");
self.myorder = self.myorder+1; reslts[self.myorder] = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp);
self.timeouts.push(  setTimeout(() => { console.log('Hello Timeout!'); myFunction5.call(this); }, 1000+(100*self.mult)) );
}
else
{  reslt = new Array(self.messg.content[0],c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,totalbp); console.log("Final:"); results.call(this); console.log(reslt);}

if (self.training == false)
{
console.log(c2 +" "+totalbp);
console.log("[c2] ["+self.totalgoals+"/X] [target-"+self.target_user.response[0].first_name+" "+self.target_user.response[0].last_name+ " result]: photos check failed, photos unreachable, no points ["+goals+"/X]");
}



photos = 'Nan';
}







 });




  }



}); }

}, 1200*self.mult) ); //F









}); }
}, 100*self.mult) ); //A

}

}


//THERE ENDS F2


});