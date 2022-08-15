
function getInputField(inputId){
    const inputFiled = document.getElementById(inputId);
    const inputText = inputFiled.value;
    const InputAmount = parseFloat(inputText);
    // clear input field 
    inputFiled.value = '';
    return InputAmount;
}

function getInputTotal(inputAmount,inputTotal){
    const getPreviousTotal = document.getElementById(inputTotal);
    const getPreviousTotalText = getPreviousTotal.innerText;
    const getPreviousTotalAmount = parseFloat(getPreviousTotalText);
    const totalAmount = getPreviousTotalAmount + inputAmount;
    getPreviousTotal.innerText = totalAmount;
}
function getCurrentBalance(){
    const getBalance = document.getElementById('total-balance');
    const getBalanceText = getBalance.innerText;
    const getBalanceAmount = parseFloat(getBalanceText);
    return getBalanceAmount;
}

function updateTotalBalance(inputAmount,isAdd){
    const getBalance = document.getElementById('total-balance');
    // const getBalanceText = getBalance.innerText;
    // const getBalanceAmount = parseFloat(getBalanceText);
    const getBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        const totalBalanceAmount = getBalanceAmount + inputAmount;
        getBalance.innerText = totalBalanceAmount;
    }else{
        const totalBalanceAmount = getBalanceAmount - inputAmount;
        getBalance.innerText = totalBalanceAmount;

    }
}

document.getElementById('deposit-button').addEventListener('click',function(){

    const depositInputAmount = getInputField('deposit-input');
       if(depositInputAmount > 0){
        
        getInputTotal(depositInputAmount,'deposit-total');
        updateTotalBalance(depositInputAmount,true);
    }

   
});


document.getElementById('withdraw-button').addEventListener('click',function(){
   
    const withdrawInputAmount = getInputField('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputAmount > 0 &&  withdrawInputAmount < currentBalance){

        getInputTotal(withdrawInputAmount,'withdraw-total');
        updateTotalBalance(withdrawInputAmount,false);
    }
    
    

});