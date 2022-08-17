let input=document.querySelector("input")

let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let valor=input.value
    let exp=/^\w{12,15}$/
    if(exp.test(valor)){
        console.log("Valido")
    }else{
        console.log("No valido")
    }

})



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let valor=input.value
    
    if(valor===valor.toLocaleUpperCase()){
        console.log("Ingrese al menos una letra en minuscula")
    }else if (valor===valor.toLowerCase()){
        console.log("Ingrese al menos una letra en mayusucla")
    }else{
        console.log("Contiene letra mayusucla y minuscula")
    }

})






