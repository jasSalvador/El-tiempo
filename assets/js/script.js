//Al utilizar el toggle dado, mediante una sola función de JS, se debe cambiar tanto la unidad de 
//temperatura, como cada temperatura individualmente.

let fahrenheit;
let celsius;

function convert(user, checkbox) {

    let tempCelsius = document.querySelectorAll("[value]"); //obtener todos los value

    for (let i = 0; i < tempCelsius.length; i++) {
        let value = parseFloat(tempCelsius[i].getAttribute("value"));
        //console.log(value);

        if (checkbox.checked) {
            fahrenheit = (value * 9 / 5) + 32; //convertir
            tempCelsius[i].innerHTML = fahrenheit;
            //console.log(fahrenheit);

            document.getElementById("bigC").innerText = "°F";

        } else {
            celsius = (value - 32) * 5 / 9;
            tempCelsius[i].innerHTML = tempCelsius[i].getAttribute("value");
            document.getElementById("bigC").innerText = "°C";
        }
    }
}




