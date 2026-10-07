message='Good Global'
function hello(){
 message='Good Morning'
    {
       let message='Hello Good Afternoon'
    console.log("Hello",message)

    }
    console.log('hello 1',message);
    function greet(){
      console.log("Hello Greeting you");
    }
    greet()

 return  function greet(data){
     console.log('Hello ',message);
     console.log('Bay come again',data);    
}  
}
to=hello()
to(123)
console.log(message);
