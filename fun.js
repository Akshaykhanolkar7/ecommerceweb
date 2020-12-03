const decreaseNumber = (incdec,price) =>
{
    var itemval= document.getElementById(incdec);
    var itmprice= document.getElementById(price);
    var prod_total_amt= document.getElementById('prod_total_amt');
    var shipping_charge=document.getElementById('shipping_charge');
    var total_cart_amt=document.getElementById('total_cart_amt');


    if (itemval.value<=0)
    {
        itemval.value=0;
        alert('negative quantity not allowed');
    }
    else
    {
        itemval.value=parseInt(itemval.value)-1;
        itemval.style.background='#fff';
        itemval.style.color='#000';
        itmprice.innerHTML=parseInt(itmprice.innerHTML)-15;
        prod_total_amt.innerHTML=parseInt(prod_total_amt.innerHTML)-15;
        total_cart_amt.innerHTML=parseInt(prod_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec,price) =>
{
    var itemval= document.getElementById(incdec);
    var itmprice= document.getElementById(price);
    var prod_total_amt= document.getElementById('prod_total_amt');
    var shipping_charge=document.getElementById('shipping_charge');
    var total_cart_amt=document.getElementById('total_cart_amt');
    
    if (itemval.value>=5)
    {
        itemval.value=5;
        alert('max 5 allowed');
        itemval.style.background='red';
        itemval.style.color='#fff';
    }
    else
    {
        itemval.value=parseInt(itemval.value)+1;
        itmprice.innerHTML=parseInt(itmprice.innerHTML)+15;
        prod_total_amt.innerHTML=parseInt(prod_total_amt.innerHTML)+15;
        total_cart_amt.innerHTML=parseInt(prod_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);

    }
}
const discount_code =() =>
{   
    var total_cart_amt=document.getElementById('total_cart_amt');
    discountcode=document.getElementById('discount_code1');
    let totalamtcurr=parseInt(total_cart_amt.innerHTML);
    let error_trw=document.getElementById('error_trw');
    if(discountcode.value=='akshay')
    {
        let newtotalamt=totalamtcurr-15;
        total_cart_amt.innerHTML=newtotalamt;
        error_trw.innerHTML="hurray!!! code is valid";
    }
    else
    {
        error_trw.innerHTML="Try again ! valid code is akshay";
    }
}