const customerImage = document.querySelector('#customer-img')
const customerName = document.querySelector('#customer-name')
const customerText = document.querySelector('#customer-id')


const btn = document.querySelectorAll('.btn')

let index= 0
const customers = []

function Customer(img, name, text){
    this.img =img
    this.name=name
    this.text=text
}

//creating new profile
 function createCustomer(img,name,text){
  let imgUrl = `./img/${img}.jpg`
  let customer = new Customer(imgUrl, name, text)
  customers.push(customer)
}

createCustomer(0, 'Sgr', 'lorem8 jahsd ajhda fsadjhfjkasdh asldfhja sdflsdhfja ksdfaksjdhfj')

createCustomer(1, 'bhjl', 'lorem8 jahsd ajhda fsadjhfjkasdh asldfhja sdflsdhfja ksdfaksjdhfj')

createCustomer(3, 'Sal', 'lorem8 jahsd ajhda fsadjhfjkasdh asldfhja sdflsdhfja ksdfaksjdhfj')



btn.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.parentElement.classList.contains('prevBtn')){
            if (index === 0){
                index = customers.length
            }

            index--
            customerImage.src=  customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }

        if(e.target.parentElement.classList.contains('nxtBtn')){
            index++
            if (index === customers.length){
                index = 0
            }

            
            customerImage.src=  customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
})

