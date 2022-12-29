function calculate() {
    var height = document.getElementById("height").value
    var weigth = document.getElementById("weigth").value
    console.log(height)
    console.log(weigth)
    var result = weigth / ((height * height) / 10000);
    var text =""
    

    if (result < 16) {
        text ="Magreza Grau III"
    } else if (result < 16.9) {
        text = "Magreza Grau II"
    } else if (result < 18.4) {
       text = "Magreza Grau I"
    } else if (result < 24.9) {
        text="Adequado"
    } else if (result < 29.9) {
        text="Pré-Obeso"
    } else if (result < 34.9) {
        text="Obesidade Grau I"
    } else if (result < 39.9) {
        text="Obesidade Grau II"
    } else if (result > 39.9) {
        text="Obesidade Grau III"
    }

    document.getElementById("text_area").innerText = text
}