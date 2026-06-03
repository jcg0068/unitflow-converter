document.getElementById("convertBtn").addEventListener("click", () => {
    const value = parseFloat(document.getElementById("valueInput").value);
    const type = document.getElementById("conversionType").value;
    const resultBox = document.getElementById("result");

    if (isNaN(value)) {
        resultBox.textContent = "Resultado: Introduce un número válido";
        return;
    }

    let result;

    switch (type) {
        case "cToF":
            result = (value * 9/5) + 32;
            break;
        case "fToC":
            result = (value - 32) * 5/9;
            break;
        case "kmToMi":
            result = value * 0.621371;
            break;
        case "miToKm":
            result = value / 0.621371;
            break;
        default:
            result = "Error inesperado";
    }

    resultBox.textContent = `Resultado: ${result.toFixed(2)}`;
});
