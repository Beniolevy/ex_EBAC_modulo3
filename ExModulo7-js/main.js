const form = document.getElementById(form);

function calculo(calculo)
{
    const numeroComoArray = calculo.split (' ');
    return numeroComoArray.lenght > calculo
}

form.addEventListener
('submit', function()
{
    e.preventDefault();

    const calculoA = document.getElementById ('calculo-a').value
    const calculoB = document.getElementById ('calculo-b').value

    function comparaNumero(calculoA, calculoB)
    {
        if (calculoA < calculoB)
        {
            alert("O numero no campo B maior do campo A")
        }
        else if (calculoA > calculoB)
        {
            alert("O numero do campo A é maior que o numero no campo B")
        }
    }
}
)