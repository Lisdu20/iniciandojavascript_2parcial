function calificacionfinal() {
    const C1 = parseFloat(document.getElementById("C1").value);
    const C2 = parseFloat(document.getElementById("C2").value);
    const C3 = parseFloat(document.getElementById("C3").value);

    const CF =(C1 + C2 +C3)/3;
    const resultadovariable = document.getElementById("resultado");

    if (CF >=8) {
        resultadovariable.textContent+="Felicidades, lo lograste";
    } else {
        resultadovariable.textContent+="Sigue estudiando, tu puedes";
    }
}