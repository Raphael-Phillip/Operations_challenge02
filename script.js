const students = [
  {
  name: "Raphael",
  noteOne: 9.5,
  noteTwo: 5.7,
  },
  {
    name: "Vanessa",
    noteOne: 10,
    noteTwo: 3.8,
    },
   {
  name: "Lucas",
  noteOne: 7.9,
  noteTwo: 4.8,
  },
]

const mediaStudentsOne = Number((students[0].noteOne + students[0].noteTwo) / 2);
const mediaStudentsTwo = (students[1].noteOne + students[1].noteTwo) / 2;
const mediaStudentsThree = (students[2].noteOne + students[2].noteTwo) / 2;

//alert(mediaStudentsOne);
//alert(mediaStudentsTwo);
//alert(mediaStudentsThree);

if(mediaStudentsOne >= 7) {
  alert(`A média do(a) aluno(a) ${students[0].name} é: ${mediaStudentsOne} \nParabéns, ${students[0].name}! Você foi aprovado(a) no concurso.`)
} else {
  alert(`Não foi dessa vez ${students[0].name}. Tente Novamente!`)
}

if(mediaStudentsTwo >= 7) {
  alert(`A média do(a) aluno(a) ${students[1].name} é: ${mediaStudentsTwo} \nParabéns, ${students[1].name}! Você foi aprovado(a) no concurso.`)
} else {
  alert(`A média do(a) aluno(a) ${students[1].name} é: ${mediaStudentsTwo} \nNão foi dessa vez ${students[1].name}. Tente Novamente!`)
}

if(mediaStudentsThree >= 7) {
  alert(`A média do(a) aluno(a) ${students[2].name} é: ${mediaStudentsThree} \nParabéns, ${students[2].name}! Você foi aprovado(a) no concurso.`)
} else {
  alert(`A média do(a) aluno(a) ${students[2].name} é: ${mediaStudentsThree} \nNão foi dessa vez ${students[2].name}. Tente Novamente!`)
}