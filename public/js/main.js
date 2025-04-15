const deleteBtn = document.querySelectorAll('.del')
const quoteItem = document.querySelectorAll('span.not')
const quoteComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteQuote)
})

Array.from(quoteItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(quoteComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteQuote(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/deleteQuote', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}