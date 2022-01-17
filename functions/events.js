 
        document.getElementById("submit-btn").addEventListener("click", (e) => {

            e.preventDefault()

            const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
                keyboard: false
            })
            myModal.show()




            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
            window.jsPDF = window.jspdf.jsPDF;

            //   window.jsPDF = window.jspdf.jsPDF;
            const doc = new jsPDF();
            const iframe = document.createElement("iframe");

            // table 1

          
            showCompanyInfo(doc)

            //table 2
            showProjectInfo(doc)


         
            showPaymentSchedule(doc)

            showRiskAnalisis(doc)
            const blob = doc.output();

            const myblob = new Blob([blob], { type: 'application/javascript' });
            var url = URL.createObjectURL(myblob);
            var viewerUrl = './pdfjs/web/viewer.html?file=' + encodeURIComponent(url);


            iframe.src = viewerUrl;
            document.getElementById("myPdf").innerHTML = iframe.outerHTML

        })

      

        addPaymentForm()
        calculTotalPayment()
   
        document.getElementById("add-payment-btn").addEventListener("click", (e) => {
            e.preventDefault()
            addPaymentForm()

        })
