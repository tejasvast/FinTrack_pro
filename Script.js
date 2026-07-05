const addTran = document.getElementById('ADDTran')
const modal = document.getElementById('transactionModal')
const Close_modal = document.querySelector('.close-modal')


addTran.addEventListener('click',(e) =>{
   modal.classList.add('active');
})

Close_modal.addEventListener('click',()=>{
    modal.classList.remove('active')
})