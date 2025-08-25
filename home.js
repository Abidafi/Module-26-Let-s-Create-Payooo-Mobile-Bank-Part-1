document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add-money-btn-clicked")

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = document.getElementById("add-pin").value
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    // console.log(availableBalance)

    const newBalance = amount+availableBalance

    document.getElementById("available-balance").innerText = newBalance
})