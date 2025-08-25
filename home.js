const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    // console.log("add-money-btn-clicked")

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("add-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    // console.log(availableBalance)

    if(accountNumber.length < 11){
        alert("Please Provide a Valid Account Number")
        return;
    }
    if(pin !== validPin){
        alert("Please Provide Valid PIN Number")
        return;
    }

    const newBalance = amount+availableBalance

    document.getElementById("available-balance").innerText = newBalance
})

// toggling feature 
document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})