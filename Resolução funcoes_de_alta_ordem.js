const lista = [100,80,60,120,90]

const soma = (acc,x) => acc+x
const total = (l) => l.reduce(soma,0) //Função que retorna a soma de todos os elementos da lista.
const totalLista = total(lista)

const oQueFalta = (t) => (e) => (t-e) + e //Função utilizada para somar a diferença entre o total e o elemento da lista.

const resultado = lista.map(oQueFalta(totalLista)) //O resultado retorna uma lista com 5 elementos iguais ao resultado da soma dos elementos anteriores.
console.log (resultado)