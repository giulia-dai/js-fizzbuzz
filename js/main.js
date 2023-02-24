for (let i = 1; i<= 100; i++){

if(i  % 3 == 0) {
    i ='Buzz';
    

}else if (i % 5 == 0){
    i = 'Fizz';

}else{
    i = i++;
}

 console.log(i);
   
}