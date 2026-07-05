const addTran = document.getElementById('ADDTran')
const modal = document.getElementById('transactionModal')
const Close_modal = document.querySelector('.close-modal')
const form = document.getElementById('transactionForm')
const totinc = document.getElementById('IncAmt')
const ExpAmt = document.querySelector('.ExpAmt')


console.dir(totinc)

form.addEventListener('submit',()=>{
    event.preventDefault()

     const id = document.getElementById('txId').value;
        const type = document.getElementById('txType').value;
        const description = document.getElementById('txDescription').value;
        const amount = parseFloat(document.getElementById('txAmount').value);
        const date = document.getElementById('txDate').value;
        const category = document.getElementById('txCategory').value;

        let totalIncome = 0;
        let totalExpense = 0;
       

       
            if (type === 'income') {
                totalIncome += amount;
                totinc.innerText = totalIncome.toFixed(2);
            } else {
                totalExpense += amount;
                ExpAmt.innerText = totalExpense.toFixed(2);
            }
        
    
    updateChart(totalIncome,totalExpense)
    modal.classList.remove('active')
})

addTran.addEventListener('click',(e) =>{
   modal.classList.add('active');
})

Close_modal.addEventListener('click',()=>{
    modal.classList.remove('active')
})

let myChart = null
updateChart()
function updateChart(income, expense) {
const ctx = document.getElementById('cashFlowChart').getContext('2d');
if (myChart) { myChart.destroy(); }
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Income vs Expenses'],
                datasets: [
                    { label: 'Income', data: [income], backgroundColor: '#166534', borderRadius: 4 },
                    { label: 'Expenses', data: [expense], backgroundColor: '#991b1b', borderRadius: 4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });
}


