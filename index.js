// document.getElementById("paragraph").innerHTML = "hello world I'm reezy lets work"
//     document.getElementById("image").src="pock.webp"
//     document.getElementById("image").style.width = "500px"
//      const  gomycode = document.getElementById("gmc");
//      document.getElementById("yaba").innerHTML=gomycode.innerHTML;
//     const paragraph= document.getElementsByTagName("p");
//     document.getElementById("yaba").innerHTML = paragraph[0].innerHTML


    function Validateform(){
        const read = document.forms["form"]['username'].value;
        if (read== ""){
            alert("name not filled");
            return false;
        }
  
        const rex = document.forms["form"]['password'].value;
        if (rex == ""){
            alert("password never enter");
            return false;
        }
    
   
        const ren = document.forms["form"]['tel'].value;
        if (ren == ""){
            alert("really");
            return false;
        }
    } 
    function changeText(i){
        i.innerHTML = "pele javascript jon jam you!"
    }
    function displayDate(){
        document.getElementById("date").innerHTML = Date();
    }
    document.getElementById("btn").onclick = displayDate;
