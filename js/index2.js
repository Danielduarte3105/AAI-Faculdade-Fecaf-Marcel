var contador = 1




function getDadosForm (){

        let nome = document.getElementById('nome')
        let email = document.getElementById('email')

setColorDefault()



        if (nome.value == ''){
  
            setErrorElements(nome)

        }else if(email.value == ''){
            setErrorElements(email)
            
        }

        if(!isNaN(nome.value) && nome.value != ''){
            alert('Não é possível digitar um número! ')
            nome.value = ''


        }

setDadosTable(nome.value, email.value)

}

function setColorDefault(){

    nome.style.backgroundColor = '#ffffff'
    email.style.backgroundColor = '#ffffff'
}



function setErrorElements(element){
        element.focus()
        element.style.backgroundColor = '#fa8989'
        alert('O campo '+ element.getAttribute('id')+' é obrigatório na digitação.')
}

function setDadosTable (nomeCliente, emailCliente){

    if( contador > 1) {
        alert ('A quantidade maxima de cadastro eram 4 registro')
        setClearForm()

    }else {
 

    let nome = nomeCliente
    let email = emailCliente

  
    let colunaNome = document.getElementById('nome' + contador )
    let colunaEmail = document.getElementById('email' + contador)





    colunaNome.innerText = nome
    colunaEmail.innerText = email
    
    contador +=1
}}

function setClearForm (){
    let nome = document.getElementById ('nome')
    let email = document.getElementById ('email')

    nome.value =''
    email.value =''
}

function setClearTable (){

    let cont = 1 
    
    while(cont <= 4){
        let colunaNome = document.getElementById('nome' + cont)
        let colunaEmail = document.getElementById('email' + cont)

        colunaNome.innerText = ''
        colunaEmail.innerText = ''

        cont +=1

    }   

    contador = 1
}