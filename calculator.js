function getHistory(){
    return document.getElementById("history-value").innerText;
}

function setHistory(angka){
    document.getElementById("history-value").innerText = angka;
}

function getOuput() {
    return document.getElementById("output-value").innerText;
}

function setOutput(angka) {
    document.getElementById("output-value").innerText = getFormattedNumber(angka);    
}

function getFormattedNumber(angka) {
    if (angka == "-") {
        return ""
    }
    let n = Number(angka)
    let final_result = n.toLocaleString("en")
    return final_result
}

function normalNumberFormat(angka) {
    return Number(angka.replace(/,/g,''))
}

let operator = document.getElementsByClassName("operator")
let result_temp = ""

for (let index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click', function() {
    if (this.id == 'clear') {
        setOutput("0")
        setHistory("")
    } else if (this.id == 'backspace') {
        let temp = normalNumberFormat(getOuput()).toString()
        if (temp) {
            temp = temp.substr(0, temp.length-1)
            setOutput(temp)
        }
    } else {
        let output = getOuput()
        let history = getHistory()
        if (output == "" && history != "") {
            if (isNaN(history[history.length-1])) {
                history = history.substr(0, history.length-1)
            }
        }
        if(output != "" || history != ""){
            output = output ==""? soutput:normalNumberFormat(output)
            history = history + output
            if (this.id == "=") {
                let result = eval(history)
                setHistory("")
                setOutput(result)
            } else {
                history = history + this.id
                setHistory(history)
                setOutput('')
            }
        }
    }
    })
}

let number_from_html = document.getElementsByClassName("number")

for (let index = 0; index < number_from_html.length; index++) {
    number_from_html[index].addEventListener('click', function() {
        let temp = normalNumberFormat(getOuput())
        if (temp != NaN) {
            temp = temp + this.id
            setOutput(temp)
        }
    })
}

