function tabuada(){
    let numero = Number(document.getElementById('numero').value) // se vc nao usa .value vc nao pega o resultado dentro dele e sim o html inteiro utilizar number para alterar seu valor
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = "<option>Resultado <br></option>"
        for(let n = 1 ; n <= 10; n++){
            let item = document.createElement("option") // preciso de option pq selection so aceita option 
            item.text = `${numero} x ${n} = ${numero * n}`
            resultado.appendChild(item)
            //resultado.innerHTML += `<option>${numero} x ${n} = ${numero * n}</option>` forma mais facil de se fazer
        }
        resultado.style.textAlign = 'center' // centralizando a linha  
    }