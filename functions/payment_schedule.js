
        let totalAmount = 0;
        let totalSar = 0;
        let paymentData = []
//
function showPaymentSchedule(doc) {
    columns = ["N", "Amount", "SAR", "Estimated Date"]
    rows = []
    paymentData.map(data => {
        rows.push([
            data.id,
            data.amount,
            data.sar,
            data.date
        ])
    })


    rows.push([{

        content: "Total : ",
        styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],

            fontSize: 12,
            valign: "center",
            halign: "midlle"
        }
    }, {
        content: totalAmount,
        styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],

            fontSize: 10,
            valign: "center",
            halign: "midlle"
        }
    }, {
        content: totalSar,
        styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],

            fontSize: 12,
            valign: "center",
            halign: "midlle"
        }
    }, {
        content: "",
        styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],


        }
    }])
    doc.autoTable({


        head: [columns],
        body: rows
    });

}

function addPaymentForm() {
    const data = {
        id:paymentData[paymentData.length] ?  paymentData[paymentData.length -1].id + 1 : paymentData.length + 1,
        date: "",
        sar: 0,
        amount: 0,
    }

    let str = `
    
    <div class="row g-1" id="paymnet-row-${data.id}">
                    <label class="col-1 col-form-label ">#${data.id}</label>
                    <div class="col-2">
                        <input type="number" class="form-control" min="0" oninput="changePayment(event, ${data.id}, 'amount')"  value="${data.amount}">
                    </div>
                    <label  class="col-1 col-form-label">SAR</label>
                    <div class="col-2">
                        <input type="number" class="form-control" min="0" oninput="changePayment(event, ${data.id}, 'sar')" value="${data.sar}">
                    </div>

                    <label  class="col-1 col-form-label">%</label>
                    <div class="col-3">
                        <input type="text" class="form-control form-control-date datepicker-inline"  value="${data.date}" oninput="changePayment(event, ${data.id} ,  'date')" placeholder="Estimeted date" >
                    </div>
                    <div class="col-2 ">
                    <button type="button" class="btn btn-sm  btn-outline-danger delete-btn " style="border-radius:100%; width:40px ;height:40px; " onclick="delete_payment_schedule(event, ${data.id})">
                    &minus;
                </button>
                    </div>
                </div>` ;

    document.getElementById("payment-form").insertAdjacentHTML('beforeend', str);
    paymentData.push(data)
}


function changePayment(event, id, input) {

    event.preventDefault()
    switch (input) {
        case "amount":
            paymentData[id - 1].amount = Number.parseFloat(event.target.value);
            break;

        case "sar":
            paymentData[id - 1].sar = Number.parseFloat(event.target.value);
            break;


        case "date":
            paymentData[id - 1].date = event.target.value;
            break;
        default:
            break;
    }

    
    calculTotalPayment()

}
function calculTotalPayment() {
    totalAmount = 0;
    totalSar = 0;
    paymentData.map(data => {
        totalAmount += data.amount;
        totalSar += data.sar
    })

    document.getElementById("inputTotalAmount").value = totalAmount;
    document.getElementById("inputTotalSar").value = totalSar;
}


function delete_payment_schedule(event, id) {
    event.preventDefault()
    paymentData = paymentData.filter(p=>p.id !== id)   

    document.getElementById(`paymnet-row-${id}`).remove()
    calculTotalPayment()
}