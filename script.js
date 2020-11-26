var user=document.getElementById("user");
var errorUser=document.getElementById("errorUser");
var password=document.getElementById("pwd");
var errorPwd=document.getElementById("errorPwd");
var neww=document.getElementById("bodyp");
var buttonc=document.getElementById("buttonC");
var ul = document.getElementById("demo");
var check = document.createElement("input");
check.setAttribute("type","checkbox");

$(document).ready(function(){
    $("button,a").click(function(){
      $("#img1").hide(1000);
    });
  });



// function()

function login(validate){
    if (validate(true)){
        alert("Welcome to ToDo App!!!")
        window.close();
        // alert.style.color="red";
        window.open("main.html");
    
    }

    validate();
}



function validate(data){


    if( user.value== "admin" && password.value==12345){
        return true;
    }

     if(user.value== "admin" && password.value!=12345){
            
        errorPwd.innerHTML="Invalid Password";
        errorPwd.style.color="red";
        errorUser.innerHTML="Valid ";
        errorUser.style.color="Green";
        password.value="";
       
        
        return false;

    }
     if(user.value!= "admin" && password.value==12345){
        errorUser.innerHTML="Invalid userName";
        errorUser.style.color="red";
        errorPwd.innerHTML="Valid";
        errorPwd.style.color="green";
        
        user.value="";
       
        return false;

    }
    else{
        errorUser.innerHTML="Invalid userName";
        errorUser.style.color="red";
        errorPwd.innerHTML="Invalid Password";
        errorPwd.style.color="red";
        password.value="";
        user.value="";
        return false;
    }
    

}


function ajax(){
    


    // creating an XHR object
    
    var xhttp = new XMLHttpRequest();
    // eventlistener
    xhttp.onreadystatechange = function(){
        // condition
        if(this.readyState==4&&this.status==200){
            var response  = JSON.parse(this.responseText);
            var output = "<h1 id='tt'>"+"Get your works done"+"</h1>";;
           
            
            for(var i=0; i<50;i++){               
                output += "<br>"+`<input type="checkbox" class="check">`+"&nbsp"+"&nbsp" +response[i].title+"<br>" ;              

            }
            // console.log(output);
            document.getElementById("demo").innerHTML=output;
            
            
 


        var buttonC=document.getElementById("buttonC");

// function to add new :) 
buttonC.onclick= function add()
        {
            
            // console.log(output);
            var todo = prompt("Please enter your new Todo");
            if(todo.length>0){
                var li = document.createElement("li");
                li.setAttribute("type","none");
                var check = document.createElement("input");
                check.setAttribute("type","checkbox");
                li.appendChild(check);
                
                
                li.appendChild(document.createTextNode(todo));
                ul.appendChild(li);

            }
        
            
            

            
        }
 

        
// checkbox function using promises!!!

        $(document).ready(function(){
         $('input[type="checkbox"]').click(function(){
            var count= ($('.check:checked').length);
            const promise = new Promise((resolve, reject) => {
                if(count==5)
                setTimeout(() => {
                    resolve(' Congrats. 5 Tasks have been Successfully Completed');
                })
                  
                
              
                setTimeout(() => {
                  reject('Oops 🔥');
                });
              });
              
              promise
                
                .then(alert)
                .catch(console.error);             
                      
            });
        });
          
        
    }
        
        
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    

 
    xhttp.send();
 }
function go(){
    window.close();
    window.open("index.html");

}





 





