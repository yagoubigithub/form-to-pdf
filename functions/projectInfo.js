let projectInfo = {}
function changeProjectInfo(event, input, label) {
    projectInfo[input] = {}
    projectInfo[input]["value"] = event.target.value;
    projectInfo[input]["label"] = label
    console.log("p",projectInfo)
}

function showProjectInfo(doc){
    let columns = [{
        content: "Project Information", colSpan: 2, styles: {
            textColor: [255, 255, 255],
            fillColor: [68, 108, 207],
            minCellHeight: 15,
            fontSize: 12,
            valign: "center"
        }
    }]

    let rows = Object.keys(projectInfo).map(key=>{
        return [projectInfo[key].label, projectInfo[key].value]
    })

    doc.autoTable({


        head: [columns],
        body: rows
    });

}