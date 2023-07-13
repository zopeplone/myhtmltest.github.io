
function print(x){console.log(x);}
document.getElementById("text").onfocus=function(){
    var ele=document.getElementById("text")
    ele.value=ele.value.toLowerCase();
}
document.getElementById("text").onblur=function(){
    var ele=document.getElementById("text")
    ele.value=ele.value.toUpperCase();
}
document.getElementById("all_select").onclick=function(){
    var arr=document.getElementsByClassName("check")
    for(i in arr){
        arr[i].checked=true
    }
}
document.getElementById("all_reverse").onclick=function(){
    var arr=document.getElementsByClassName("check")
    for(i in arr){
        arr[i].checked=!arr[i].checked
    }
}
