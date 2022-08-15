document.getElementById('deposit-button').addEventListener('click',function(){
    
    // get deposit input field
    const depositInputFiled = document.getElementById('deposit-input');
    const depositInputText = depositInputFiled.value;
    const depositInputAmount = parseFloat(depositInputText);
    // console.log(depositInputAmount);
    depositInputFiled.value = '';
    // get total in deposit display
    const getDepositTotal = document.getElementById('deposit-total');
    const getDepositTotalText = getDepositTotal.innerText;
    const getDepositTotalAmount = parseFloat(getDepositTotalText);

    const totalDepositAmount = getDepositTotalAmount + depositInputAmount;
    getDepositTotal.innerText = totalDepositAmount;

    // get balance update balance
    const getBalance = document.getElementById('total-balance');
    const getBalanceText = getBalance.innerText;
    const getBalanceAmount = parseFloat(getBalanceText);
    const totalBalanceAmount = getBalanceAmount + depositInputAmount;
    getBalance.innerText = totalBalanceAmount;
});


document.getElementById('withdraw-button').addEventListener('click',function(){
    // get withdraw amount 
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //clear withdraw amount 
    withdrawInputField.value = '';

    //get total withdraw display
    const getWithdrawTotal = document.getElementById('withdraw-total');
    const getWithdrawTotalText = getWithdrawTotal.innerText;
    const getWithdrawTotalAmount = parseFloat(getWithdrawTotalText);
   
    const totalWithdrawAmount = getWithdrawTotalAmount + withdrawInputAmount;
    getWithdrawTotal.innerText = totalWithdrawAmount;

    //get total balance update
    const getBalance = document.getElementById('total-balance');
    const getBalanceText = getBalance.innerText;
    const getBalanceAmount = parseFloat(getBalanceText);
    console.log(withdrawInputAmount);

    const totalBalanceAmount= getBalanceAmount - withdrawInputAmount;
    getBalance.innerText =totalBalanceAmount;


});