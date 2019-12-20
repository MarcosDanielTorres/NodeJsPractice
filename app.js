const argv = require("yargs").argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear por hacer");
    break;

  case "listar":
    console.log("Mostrar todas las tareas por hacer");
    break;
  case "actualizar":
    console.log("Actualiza una tarea por hacer");
    break;
  default:
    console.log("Comando no reconocido");
}
console.log("This is a test for magit learning");

console.log("This is a secon test to see if I can push to github");

console.log("This is a third test");

// this is in dev branch and added this from github
// this is another comment in dev branch
