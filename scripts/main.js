document.querySelector('h1').onpointerover=function(){
    alert("|| श्री सत्गुरुवे नमः || \n\n ब्रह्मलीन संत महर्षि मेही दास")
}
let myImage=document.querySelector('img');
myImage.onclick =function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/guruji2.jpeg') {
        myImage.setAttribute('src',"images/guruji.jpg")
    }
    else {
        myImage.setAttribute('src','images/guruji2.jpeg')
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setusername(){
    let myName=prompt('Please Enter your Name : ');
    if(myName==='Null'){
        myName=" ";
    }
    localStorage.setItem('name',myName);
    myButton.textContent='जय गुरु!! Welcome '+myName;
}
if(!localStorage.getItem('name')){
    setusername();
}else{
    let storedName=localStorage.getItem('name');
    myButton.textContent='जय गुरु!! Welcome '+storedName;
}
myButton.onclick=function(){
    setusername();
}