let btnPlusAll = document.querySelectorAll('.btn-plus');

for(let i = 0; i < btnPlusAll.length; i++)
{
    btnPlusAll[i].addEventListener('click', augmenterQuantity)
}

let btnMinusAll = document.querySelectorAll('.btn-minus');

for(let i = 0; i < btnMinusAll.length; i++)
{
    btnMinusAll[i].addEventListener('click', diminuerQuantity)
}

// let btnMinus = document.querySelector('.qty-minus');
// btnMinus.addEventListener('click', decreaseQuantity)


function augmenterQuantity() {
    this.previousElementSibling.value++;
    let btn = parseInt(this.previousElementSibling.value);
    let price = parseInt(this.parentElement.nextElementSibling.innerHTML);
    this.parentElement.nextElementSibling.nextElementSibling.innerHTML = price*btn + ' $';

    subtotal();
    total()
    // qty.value = parseInt(qty.value) + 1;
}


function diminuerQuantity() {

    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value--;
       // this.nextElementSibling.value =  parseInt(this.nextElementSibling.value)-1; 
    }
    let btn = parseInt(this.nextElementSibling.value);
    let price = parseInt(this.parentElement.nextElementSibling.innerHTML);
    this.parentElement.nextElementSibling.nextElementSibling.innerHTML = price*btn + ' $';
    subtotal(this);
    total()


}



function subtotal(){

    let totalPrice = parseInt(document.querySelector('.total-price').innerText);
    let btn= parseInt(document.querySelector('.btn').value);
    let subt= totalPrice*btn;

    document.querySelector('.subtotal').innerText = subt + '$';  
    

}
//***************************//************************/// */ */


let buttonsDeleteAll= document.querySelectorAll('.buttons-delete');

for (let i = 0; i <  buttonsDeleteAll.length; i++) {
    buttonsDeleteAll[i].addEventListener('click',supprimerQuantity);    
}


function supprimerQuantity(){
    this.parentElement.remove()
    total();
    subtotal
     // buttonsDelete.parentElement.nextElementSibling.remove();
   // document.querySelector('.btn').value=  parseInt(document.querySelector('.btn').value)*0;
}


function total(){
    let items= document.querySelectorAll('.item')
    let total=0
    items.forEach(function(item){
        let subtotalElement= item.querySelector('.subtotal')
        let subtotal=parseInt(subtotalElement.innerText.replace('$',''))

        total= total+ subtotal
    })
    document.querySelector('.total').innerText = total + '$';  

    //  let totalPrice = parseInt(document.querySelector('.total-price').innerText);
    //let btn= parseInt(document.querySelector('.btn').value);
}
//function 1

//let btnPlus= document.querySelector('.btn-plus');
//let btnMinus= document.querySelector('.btn-minus')

//btnPlus.addEventListener('click',augmenterQuantity);
//btnMinus.addEventListener('click',diminuerQuantity);

//function augmenterQuantity(){
  //  document.querySelector('.btn').value=  parseInt(document.querySelector('.btn').value)+1;
    //subtotal();
    //total();

//}



//function diminuerQuantity(){
//if ( document.querySelector('.btn').value > 0 ) {
  //  document.querySelector('.btn').value=  parseInt(document.querySelector('.btn').value)-1 ;
    //subtotal();
    //total();

//}
//}

//function 2

//let btnPlus2= document.querySelector('.btn-plus2');
//let btnMinus2= document.querySelector('.btn-minus2')

//btnPlus2.addEventListener('click',augmenterQuantity2);
//btnMinus2.addEventListener('click',diminuerQuantity2);

//function augmenterQuantity2(){
    //document.querySelector('.btn2').value=  parseInt(document.querySelector('.btn2').value)+1;
    //subtotal2();
    //total();
//}



//function diminuerQuantity2(){
//if ( document.querySelector('.btn2').value > 0 ) {
  //  document.querySelector('.btn2').value=  parseInt(document.querySelector('.btn2').value)-1 ;
    //subtotal2();
    //total();
//}

//}


//function subtotal2(){
  //  let totalPrice2 = parseInt(document.querySelector('.total-price2').innerText);
    //let btn2= parseInt(document.querySelector('.btn2').value);
    //let subt2= totalPrice2*btn2;

    //document.querySelector('.subtotal2').innerText = subt2 + '$';
//}




//function 3

//let btnPlus3= document.querySelector('.btn-plus3');
//let btnMinus3= document.querySelector('.btn-minus3')

//btnPlus3.addEventListener('click',augmenterQuantity3);
//btnMinus3.addEventListener('click',diminuerQuantity3);

//function augmenterQuantity3(){
  //  document.querySelector('.btn3').value=  parseInt(document.querySelector('.btn3').value)+1;
  //  subtotal3();
   // total();
//}



//function diminuerQuantity3(){
//if ( document.querySelector('.btn3').value > 0 ) {
  //  document.querySelector('.btn3').value=  parseInt(document.querySelector('.btn3').value)-1 ;
  //  subtotal3();
  //  total();
//}

//}



//function subtotal3(){
  //  let totalPrice3 = parseInt(document.querySelector('.total-price3').innerText);
    //let btn3= parseInt(document.querySelector('.btn3').value);
    //let subt3= totalPrice3*btn3;

    //document.querySelector('.subtotal3').innerText = subt3 + '$';
//}

//function total




//function total(){

  //  let totalPrice = parseInt(document.querySelector('.total-price').innerText);
  //  let btn= parseInt(document.querySelector('.btn').value);

  //  let totalPrice2 = parseInt(document.querySelector('.total-price2').innerText);
  //  let btn2= parseInt(document.querySelector('.btn2').value);
    

  //  let totalPrice3 = parseInt(document.querySelector('.total-price3').innerText);
  //  let btn3= parseInt(document.querySelector('.btn3').value);
    



  //  let total= (totalPrice*btn)+(totalPrice2*btn2)+(totalPrice3*btn3);
  //  document.querySelector('.total').innerText = total + '$';  
    


//}


//function supprimer






//let buttonsDelete2= document.querySelector('.buttons-delete2');


//buttonsDelete2.addEventListener('click',supprimerQuantity2);


//function supprimerQuantity2(){
    //document.querySelector('.btn2').value=  parseInt(document.querySelector('.btn2').value)*0;
    //subtotal2();
    //total();

//}


//let buttonsDelete3= document.querySelector('.buttons-delete3');


//buttonsDelete3.addEventListener('click',supprimerQuantity3);


//function supprimerQuantity3(){
  //  document.querySelector('.btn3').value=  parseInt(document.querySelector('.btn3').value)*0;
   // subtotal3();
   // total();

//}


    // First Like Button   
    let btnvar1 = document.querySelector(".btnh1");
    btnvar1.addEventListener("click",Toggle1);

    function Toggle1(){
            if (btnvar1.style.fill =="red") {
                btnvar1.style.fill = "grey"
            }
            else{
                btnvar1.style.fill = "red"
        }
    }



 //    Second Like Button   
    let btnvar2 = document.querySelector('.btnh2');
    btnvar2.addEventListener("click",Toggle2);

    function Toggle2(){
            if (btnvar2.style.fill =="red") {
                btnvar2.style.fill = "grey"
            }
            else{
                btnvar2.style.fill = "red"
        }
    }




 //    Third Like Button   
    let btnvar3 = document.querySelector('.btnh3');
    btnvar3.addEventListener("click",Toggle3);

    function Toggle3(){
            if (btnvar3.style.fill =="red") {
                btnvar3.style.fill = "grey"
            }
            else{
                btnvar3.style.fill = "red"
            }
    }
