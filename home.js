const validPin = 1234
const withdrawPassword = 4321
const transactionData = []

// Function to get Input Values 
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// Function to get InnerText 
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// Function to set InnerText 
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// Function to Toggle 
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// Function to Toggle Buttons 
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")
        for(const btn of formBtns){
            btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
            btn.classList.add("border-gray-300")
        }
        document.getElementById(id).classList.remove("border-gray-300")
        document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// Add Money Features Javascript 
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()

    const bank = getInputValue("bank") 
    const accountNumber = getInputValueNumber("account-number")
    const amount = getInputValueNumber("add-amount")
    if(amount<=0){
        alert("Add Amount must be above 0 TK.")
        return;
    }
    const pin = getInputValueNumber("add-pin")
    const availableBalance = getInnerText("available-balance")
    
    if(accountNumber.length < 11){
        alert("Please Provide a Valid Account Number")
        return;
    }
    
    if(pin !== validPin){
        alert("Please Provide Valid PIN Number")
        return;
    }

    const newBalance = amount+availableBalance

    setInnerText(newBalance)

    const data = {
       name:"Add Money",
       date:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

// Cash-out Money Features Javascript 
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()

    const withdrawAccountNumber = getInputValueNumber("withdraw-account")
    const withdrawAmount = getInputValueNumber("withdraw-amount")
    const withdrawPin = getInputValueNumber("withdraw-pin")

    if(withdrawAccountNumber.length < 11){
        alert("Please Provide a Valid Account Number")
        return;
    }
    if(withdrawPin !== withdrawPassword){
        alert("Please Provide Valid PIN Number")
        return;
    }

    const withdrawBalance = getInnerText("available-balance")
    if(withdrawAmount<=0 || withdrawAmount>withdrawBalance){
        alert("Withdraw Amount has to be Less Than Current Balance.")
        return;
    }
    const withdrawNewBalance = withdrawBalance - withdrawAmount

    setInnerText(withdrawNewBalance)

    const data = {
       name:"Cashout",
       date:new Date().toLocaleTimeString()
    }
    transactionData.push(data)    
 })

document.getElementById("transactions-button").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" class="mx-auto" alt="">   
                        </div>

                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>        
        `
        transactionContainer.appendChild(div)
    }
})

// toggling feature 
document.getElementById("add-button").addEventListener("click",function(){
        handleToggle("add-money-parent")
        handleButtonToggle("add-button")
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    handleToggle("cash-out-parent")
    handleButtonToggle("cash-out-button")    
})

document.getElementById("transfer-button").addEventListener("click",function(){
    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-button")    
})

document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-button")    
})

document.getElementById("bill-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-button")    
})

document.getElementById("transactions-button").addEventListener("click",function(){
    handleToggle("transactions-parent")
    handleButtonToggle("transactions-button")    
})