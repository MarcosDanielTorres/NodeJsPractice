//const argv = require("yargs").argv;

const arv = require("./config/yargs.js");
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
