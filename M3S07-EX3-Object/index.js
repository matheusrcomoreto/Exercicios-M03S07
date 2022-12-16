let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {dados: ["SQL"],
    backend: ["Java", "Spring"],
    frontend: ["Javascript", "React"]},
    inovacao_constante: true
};
      
let objUser = {
    nome: "Matheus",
    idade: 27,
    cidade: "Biguaçu"
};

objDevInHouse ["objUser"] = objUser;

objDevInHouse ["nome"] = "Matheus Rizzon Comoreto";

objDevInHouse ["idade"] = "27";

console.log(objDevInHouse);

console.table(objUser);

console.table(objDevInHouse);