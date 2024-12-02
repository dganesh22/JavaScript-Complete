/* 
    localStorage -> keyword
    localStorage.setItem(key,value) => to store the values
    localStorage.getItem(key) => to read the values
    localStorage.removeItem(key) => to remove the values
    localStorage.clear() => to clear all localstorage 

    JSON.stringify() => converts object into JSON
    JSON.parse() => converts JSON to object
*/

// dom elements
let balanceEl = document.getElementById("balance")
let moneyPlusEl = document.getElementById("moneyPlus")
let moneyMinusEl = document.getElementById('moneyMinus')

// form 
let formEl = document.getElementById('exinForm')
let titleEl = document.getElementById("title")
let amountEl = document.getElementById("amount")
let subBtn = document.getElementById("submitBtn")

// list
let listEl = document.querySelector(".list")

// edit 
let isEdit = false
let editItemId = null

// read the data from expense income form
formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(amountEl.value == 0 || amountEl.value == -0) {
        alert("Enter proper Amount")
    } else {
        if(isEdit) {
            // update the data
            let data = {
                id: editItemId,
                title: titleEl.value,
                amount: amountEl.value
            }
    
            console.log(`expense = `, data)
            updateTransactions(data)
        } else {
            // create a new data
            let data = {
                id: Math.round(Math.random() * 10000),
                title: titleEl.value,
                amount: amountEl.value
            }
    
            console.log(`expense = `, data)
            storeTransactions(data)
        }
    }
});

// read transactions data 
function readTransactions() {
    return localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : []
}

// store transactions data
let exData = readTransactions()


// to update income and expense in dashboard
function updateIncomeExpense() {
    let amounts = exData.map((item,index) => {
        return Number(item.amount)
    })
    console.log(`amounts =`, amounts)

    let bal = amounts.reduce((acc,val) => acc + val, 0).toFixed(2)
    balanceEl.innerHTML = bal > -1 ? `&#8377;${bal}` : `-&#8377;${bal}`

    let inco = amounts.filter(val => val > 0).reduce((acc,val) => acc + val, 0).toFixed(2)
    moneyPlusEl.innerHTML = `&#8377; ${inco}`

    let expl = amounts.filter(val => val < 0)
    let eP = expl.reduce((acc,val) => acc + val, 0) 
    moneyMinusEl.innerHTML = `&#8377${eP.toFixed(2)}`
}

updateIncomeExpense()


// to store transactions in localstorage
function storeTransactions(val) {
       exData.unshift(val)
       localStorage.setItem("transactions", JSON.stringify(exData))
       alert("Transaction added successfully")
       updateIncomeExpense()
       window.location.reload()
}


// edit handler 
function editHandler(id) {
    isEdit = true
    editItemId = id
    let exItem = exData.find(item => item.id == id)
    console.log(`edit item =`, exItem)
    titleEl.value = exItem.title
    amountEl.value = exItem.amount
    subBtn.innerText = "Update"
}

// delete handler 
function deleteHandler(id) {
    if(window.confirm(`Are you sure to delete transaction id = ${id}?`)) {
        console.log(`id = `, id)
    let delItemIndex = exData.findIndex(item => item.id == id)
        exData.splice(delItemIndex,1)
        localStorage.setItem("transactions", JSON.stringify(exData))
        alert("Transaction deleted successfully")
        updateIncomeExpense()
        window.location.reload()
        
    } else {
        console.log(`delete terminated`)
    }   
}


// display the income and expense list
function printData(data) {
    data.forEach(item => {
        listEl.innerHTML += `<li class="list-item">
                <strong> ${item.title} </strong>
                <span class="end"> &#8377; ${item.amount} </span>
                <div class="btn-group">
                    <i onclick="editHandler(${item.id})" class="fa fa-pencil edit"></i>
                    <i onclick="deleteHandler(${item.id})" class="fa fa-trash delete"></i>
                </div>
          </li>`
    });
}

printData(exData)

// update the transactions
function updateTransactions(data) {
    let editIndex = exData.findIndex(item => item.id == editItemId)
    exData.splice(editIndex,1,data)
    localStorage.setItem("transactions", JSON.stringify(exData))
       alert("Transaction updated successfully")
       updateIncomeExpense()
       window.location.reload()
}