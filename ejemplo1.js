const estudiantes = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

const promedio = estudiantes.map(({ name, scores }) => ({name:name, average: scores.reduce((acumulador, item) => acumulador + item)/ scores.length }));
console.log(promedio);
const estudiante = promedio.filter(e => e.average > 90);
console.log(estudiante);


const books = [
  { name: "Física 1", price: 20, category: "Física" },
  { name: "Cálculo 1", price: 30, category: "Cálculo" },
  { name: "Física 2", price: 40, category: "Física" },
  { name: "Cálculo 2", price: 50, category: "Cálculo" },
  { name: "Cálculo 3", price: 60, category: "Cálculo" },
  { name: "Física 3", price: 70, category: "Física" },
  { name: "Cálculo 4", price: 80, category: "Cálculo" },
  { name: "Física 4", price: 90, category: "Física" },
];

//const categoria =  books.filter(e => e.category === "Física");
//const categoria =  books.filter(({category}) => category === "Física");
const resultado = new Map();
const categoria =  books.map (e => {
  const valor = resultado.get(e.category);
  console.log(valor)
  if (valor === 'undefined') {
    sumatoria = e.price 
    resultado.set (e.category, 1);
  }    
  else
  {
    sumatoria = sumatoria + e.price 
    valor = valor + 1;
    reportUsers.set (e.category, valor);
  }



  //category:category, price:price
});

console.log(categoria)
