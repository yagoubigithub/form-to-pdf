let companyInfo = {}
function changeCompanyInfo(event, input) {

    companyInfo[input] = event.target.value
    console.log(companyInfo)
}

function showCompanyInfo(doc){
    let columns = [{
        content: "Demographic Information", colSpan: 2, styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],
            minCellHeight: 15,
            fontSize: 12,
            valign: "center"
        }
    }]

    let rows = [
        ["Name", companyInfo.name || ""],
        ["ID Number", companyInfo.id_number || ""],
        ["Issuer", companyInfo.issuer || ""],
        ["City", companyInfo.city || ""],
        ["ID Expiry Date", companyInfo.id_expiry_date || ""],
        ["Legal type", companyInfo.legal_type || ""],
        ["Date Established", companyInfo.date_established || ""],
        ["Business Activity", companyInfo.business_activity || ""],
        ["Capital", companyInfo.capital || ""]
    ]


    doc.autoTable({


        head: [columns],
        body: rows
    });


}