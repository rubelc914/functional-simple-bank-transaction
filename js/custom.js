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