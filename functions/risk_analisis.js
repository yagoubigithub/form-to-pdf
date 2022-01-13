for (let i = 0; i < risk_analisis_data.length; i++) {
    const element = risk_analisis_data[i];

    const row = document.createElement("div");
    row.className = "row";
    row.id = "row-" + i
    row.innerHTML = `<div  class="col-6">${element.option}</div>
    
    <div  class="col-3">Risk Weighting</div>
    <div  class="col-3">Score</div>
    `

    const col1 = document.createElement("div");
    col1.className = "col-6"
    // col1.innerHTML = `<label class="form-label">${element.option}</label>`

    const select = document.createElement("select")
    select.className = "form-select";
    select.innerHTML = "<option>--Select--</select>";

    select.onchange = (event) => handleSelectChange(event, i, 0)
    element.values.forEach((value, index) => {

        const option = document.createElement("option")
        option.value = value;
        option.innerText = value;
        select.appendChild(option)
    });

    col1.appendChild(select)
    const col2 = document.createElement("div");
    col2.className = "col-3 col2";




    const col3 = document.createElement("div");
    col3.className = "col-3 col3";


    row.append
        (col1, col2, col3)
    document.getElementById("container").appendChild(row)
}

let final_data = []

function handleSelectChange(event, i, colIndex) {
    const value = event.target.value;
    const col1 = event.target.parentNode || event.target.parentElement;




    const row = col1.parentNode || col1.parentElement

    const old_col2 = row.getElementsByClassName("col2")[colIndex]
    const old_col3 = row.getElementsByClassName("col3")[colIndex]



    const weighting = risk_analisis_data[i].weightings[risk_analisis_data[i].values.indexOf(value)]
    old_col2.innerHTML = ` ${weighting} `


    const score = risk_analisis_data[i].scores[risk_analisis_data[i].values.indexOf(value)]
    old_col3.innerHTML = ` ${score} `


 


   

   

    final_data[i] = {

        option_title: risk_analisis_data[i].option,
        option: value,
        score: score,
        weighting: weighting,



    }




}


function showRiskAnalisis(doc) {
    
    columns = [{ content: "", colSpan: 3 }, { content: "Options" }, { content: "Risk score" }, { content: "Weighting %" }];
    rows = []


    let totale_score = 0;
    let totale_weighting = 0;
    final_data.map(data => {
        let row = ["", "", {
            content: data.option_title
        }, data.option, data.weighting, data.score]


        totale_score += Number.parseFloat(data.score);
        totale_weighting += Number.parseFloat(data.weighting);


        rows.push(row)

    })


    rows.push([{
        content: "Total",
        colSpan: 2,
        styles: { fontSize: 10, valign: "middle", halign: "middle" }
    }, "", "", totale_weighting, totale_score])

    doc.autoTable({


        head: [columns],
        body: rows,
        styles: { overflow: 'linebreak', cellPadding: 1, fontSize: 7, valign: "middle" },
        theme: "grid"
    });
}