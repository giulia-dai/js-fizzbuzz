const containerDom = document.querySelector('.container');


for (let i = 1; i <= 100; i++) {

    const box = document.createElement('div');
    box.classList.add('box');

   if (i % 3 == 0 && i % 5 == 0){
    console.log(i + ' FizzBuzz');
    box.classList.add('box-fizzbuzz');
    box.append('FizzBuzz');


    } else if (i % 3 == 0) {
        console.log(i + ' Fizz');
    box.classList.add('box-fizz');
    box.append('Fizz');



    }else if (i % 5 == 0){
        console.log(i + ' Buzz');
    box.classList.add('box-buzz');
    box.append('Buzz');
  
    }else{
         console.log(i);
         box.append(i);
    }
    containerDom.append(box);
}




