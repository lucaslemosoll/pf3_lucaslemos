const calcular = document.getElementById('BTNcalcular');

function calculadora () {

    const pl = document.getElementById('ValorAplicado').value;
    const npar = document.getElementById('Parcelas').value;
    const nome = document.getElementById('Nome').value;
    const juros = document.getElementById('Juros').value;
  

    const resultado = document.getElementById('Resultado');

    if (pl !== ''  && juros !== '' && npar !=='' && nome !=='') {
            const i = (juros/100)
            const VF = pl*(((1+i)**npar-1)/i)

           
            const VFR = VF.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
            const PR = pl.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

            resultado.textContent = `${nome}, se colocar ${PR}, o juros de ${juros}% duante ${npar} meses, = ${VFR}`               
    }else {
        resultado.textContent = 'ERRO!';
    }
}
calcular.addEventListener('click', calculadora);