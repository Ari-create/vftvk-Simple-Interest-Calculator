<!--Script-->
  
  <script>
  
  function compute()
  {
    principal=document.getElementById("principal").value;
    
    if (principal<=0){
      alert("Please Enter A Positive Number;)");        <!--("principal").focus function allows to focus on that element-->
      document.getElementById("principal").focus();
      
    }
      
    else
  {
      rate= document.getElementById("rate").value;
      time= document.getElementById("year").innerHTML=today.getFullYear();
      
      var today= new Date();
      var finalyear= today+parseInt(time);
      result= (principal*rate*time)/100;
      var value= result+parseInt(principal);
      
      document.getElementById("outputPrincipal").innerHTML="If you deposit$<mark>"+principal+",</mark>";
      document.getElementById("outputInterest").innerHTML="at an interest rate of<mark>"+rate+"%.</mark>";
      document.getElementById("value").innerHTML="You will receive the amount of$<mark>"+result+".</mark>";
      document.getElementById("Finalyear").innerHTML="in the year of<mark>"+finalyear+"</mark>";
      
    }
      
  }
  function updaterate()
  { 
    var rate= document.getElementById("rate").value;
    document.getElementById("return").innerText=rate;
  }
      
  
  
  
  </script>
