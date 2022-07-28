function simple(){
  
    price=document.getElementById("price").value;
    size=document.getElementById("size").value;
    number=document.getElementById("number").value;
    if(size==9){
      length=3;
      cost =(price*length * number ) + (number * 125)
    console.log(cost)
    document.getElementById("final_cost1").innerHTML= "Cost of " + number +" curtains without lining is Rs " +  cost;
    
    }
    else if(size==9.2)
      {
        length=3.1;
        cost =(price*length * number ) + (number * 125)
    console.log(cost)
    document.getElementById("final_cost1").innerHTML= "Cost of " + number +" curtains without lining is Rs " +  cost;
    

      }
    else if(size==9.4){
      length=3.3;
      cost =(price*length * number ) + (number * 125)
    console.log(cost)
    document.getElementById("final_cost1").innerHTML= "Cost of " + number +" curtains without lining is Rs " +  cost;
    
    }
    else{
      window.alert("Please Enter Correct Value for Size")
    }
    
  }
  
  
  
  
  
  function lining_simple(){
    
    price=document.getElementById("price").value;
    size=document.getElementById("size").value;
    number=document.getElementById("number").value;
    if(size==9){
      length=3;
      cost =( price*length* number ) + (number * 175) + (70 * length * number)
    console.log(cost)
    document.getElementById("final_cost2").innerHTML= "Cost of " + number +" curtains with plain lining is Rs " +  cost;
    
    }
    else if(size==9.2)
      {
        length=3.1;
        cost =( price*length* number ) + (number * 175) + (70 * length * number)
    console.log(cost)
    document.getElementById("final_cost2").innerHTML= "Cost of " + number +" curtains with plain lining is Rs " +  cost;
    
      }
    else if(size==9.4){
      length=3.3;
      cost =( price*length* number ) + (number * 175) + (70 * length * number)
    console.log(cost)
    document.getElementById("final_cost2").innerHTML= "Cost of " + number +" curtains with plain lining is Rs " +  cost;
    
    }
    else{
      window.alert("Please Enter Correct Value for Size")
    }
    
  }
  
  
  function lining_blackout(){
    
   
    price=document.getElementById("price").value;
    size=document.getElementById("size").value;
    number=document.getElementById("number").value;
    if(size==9){
      length=3;
      cost =( price*length* number ) + (number * 175) + (150 * length * number)
    console.log(cost)
    document.getElementById("final_cost3").innerHTML= "Cost of " + number +" curtains with blackout lining is Rs " +  cost;
    
    }
    else if(size==9.2)
      {
        length=3.1;
        cost =( price*length* number ) + (number * 175) + (150 * length * number)
    console.log(cost)
    document.getElementById("final_cost3").innerHTML= "Cost of " + number +" curtains with blackout lining is Rs " +  cost;
    
      }
    else if(size==9.4){
      length=3.3;
      cost =( price*length* number ) + (number * 175) + (150 * length * number)
    console.log(cost)
    document.getElementById("final_cost3").innerHTML= "Cost of " + number +" curtains with blackout lining is Rs " +  cost;
    
    }
    else{
      window.alert("Please Enter Correct Value for Size")
    }
    
  }