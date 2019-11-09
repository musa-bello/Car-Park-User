document.getElementById("first").style.display="none";
document.getElementById("second").style.display="none";
document.getElementById("third").style.display="none";


//Chevron icons in HOME//
document.getElementById("addCar").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="none";
});
document.getElementById("uploadCar").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="none";
});
document.getElementById("parkOwner").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="block";
});

//back arrow
document.getElementById("first1").addEventListener("click", function(){
    document.getElementById("home").style.display="block";
    document.getElementById("first").style.display="none";
});
document.getElementById("second1").addEventListener("click", function(){
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="none";
});
document.getElementById("third1").addEventListener("click", function(){
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="none";
});
