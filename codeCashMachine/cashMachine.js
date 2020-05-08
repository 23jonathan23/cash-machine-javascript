function cashMachine(amount) {

  let entryValue = amount
  //Variaveis para identificar notas de saída
  let n50 = 0
  let n10 = 0
  let n5 = 0
  let n1 = 0

  //Validação dupla
  let result = Number.isInteger(amount) //Verifica se é um numero e é inteiro
  let ruleNumberInString = /^[0-9]+$/ //Regra para verificar se é um numero e se é inteiro

  if(result) {

    //Verifica o se o valor do saque está entre o minimo e máximo
    if(entryValue >= 1 && entryValue <= 10000){
      
      while(entryValue > 0) { //Repete até que todo o saque tenha sido contabilizado
  
        if(entryValue >=50) {
          entryValue-=50
          n50++
        } else if(entryValue >= 10) {
          entryValue-=10
          n10++
        } else if(entryValue >= 5) {
          entryValue-=5
          n5++
        } else if(entryValue >= 1) {
          entryValue-=1
          n1++
        }
  
      }

      //Retorna o resultado ao cliente
      return console.log(`Notas entregues: ${n50} notas de R$50,00, ${n10} notas de R$10,00, 
          ${n5} notas de R$5,00, ${n1} notas de R$1,00`)

    } else {
      return console.log('Valor inválido!!, Insira um valor entre 1 e 10000')
    }

  } else {
    
    //Converte valor de entryValue para String
    entryValue = entryValue.toString()

    //Verifica se a string corresponde ao critério da regra
    //ou seja se é um numero inteiro dentro de uma string
    if(entryValue.match(ruleNumberInString)) {

      entryValue = parseInt(entryValue) // converte para numero inteiro
      
      //Verifica o se o valor do saque está entre o minimo e máximo
      if(entryValue >= 1 && entryValue <= 10000){
      
        while(entryValue > 0) { //Repete até que todo o saque tenha sido contabilizado
    
          if(entryValue >=50) {
            entryValue-=50
            n50++
          } else if(entryValue >= 10) {
            entryValue-=10
            n10++
          } else if(entryValue >= 5) {
            entryValue-=5
            n5++
          } else if(entryValue >= 1) {
            entryValue-=1
            n1++
          }
    
        }

        //Retorna o resultado ao cliente
        return console.log(`Notas entregues: ${n50} notas de R$50,00, ${n10} notas de R$10,00, 
            ${n5} notas de R$5,00, ${n1} Z notas de R$1,00`)
  
      } else {

        return console.log('Valor inválido!!, Insira um valor entre 1 e 10000')
      }
  
    } else {
  
      return console.log('É permitido somente valores inteiros, insira o valor novamente!')
      
    }

  }
}

//Notas disponiveis : R$1,00, R$5,00, R$10,00 e R$50,00.
//Valores de entradas devem ser inteiros, podendo ser uma string ou number
//Execute a function é seja feliz haha.

cashMachine(2003)