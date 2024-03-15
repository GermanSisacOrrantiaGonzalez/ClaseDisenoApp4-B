const readline = require('readline');

var url = "https://jsonplaceholder.typicode.com/todos";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listaPendientes() {
  return fetch(url)
    .then(response => response.json());
}

function soloIDs(response) {
  const id = response.map(element=> element.id);
  console.log('Lista de los IDs pendientes: ', id);
}

function idTitulos(response) {
  const idTitulo = response.map(element => ({ id: element.id, title: element.title }));
  console.log('Lista de los titulos e ids pendientes: ', idTitulo);
}

function imprimirSinResolver(response) {
  const noResuelto = response.filter(element => !element.completed);
  const noIdTitulo = noResuelto.map(element => ({ id: element.id, title: element.title }));
  console.log('Lista de los ids y titulos que no estan resueltos: ', noIdTitulo);
}

function imprimirResueltos(response) {
  const resueltos = response.filter(element => element.completed);
  const resIdTitulo = resueltos.map(element => ({ id: element.id, title: element.title }));
  console.log('Lista de los ids y titulos resueltos: ', resIdTitulo);
}

function idUserID(response) {
  const idUserID = response.map(element => ({ id: element.id, userId: element.userId }));
  console.log('Lista de ids y lo userId pendientes: ', idUserID);
}

function resueltosIdUser(response) {
  const resueltos = response.filter(element => element.completed);
  const resIdUserId = resueltos.map(element => ({ id: element.id, userId: element.userId }));
  console.log('Lista de los de los id y userId resueltos: ', resIdUserId);
}

function noResueltoIdUserId(response) {
  const noRes = response.filter(element => !element.completed);
  const noResIdUser = noRes.map(element => ({ id: element.id, userId: element.userId }));
  console.log('Lista de los id y userId no resueltos: ', noResIdUser);
}

function mostrarMenu() {
  console.log("\n=== Menú ===");
  console.log("1. Mostrar solo IDs de elements");
  console.log("2. Mostrar IDs y Titles de elements");
  console.log("3. Mostrar elements sin resolver (ID y Titulo)");
  console.log("4. Mostrar elements resueltos (Id y Titulo)");
  console.log("5. Mostrar todos los elements (Ids y userId)");
  console.log("6. Mostrar elements resueltos (Id y userId)");
  console.log("7. Mostrar elements sin resolver (Id y userId)");
  console.log("8. Salir");
}

function ejecutarApp() {
  listaPendientes()
    .then(element => {
      let opcion;

      function preguntarOpcion() {
        rl.question('Seleccione una opción entre el 1 al 8: ', (input) => {
          opcion = parseInt(input);
          switch (opcion) {
            case 1:
              soloIDs(element);
              break;
            case 2:
              idTitulos(element);
              break;g
            case 3:
              imprimirSinResolver(element);
              break;
            case 4:
              imprimirResueltos(element);
              break;
            case 5:
              idUserID(element);
                break;
            case 6:
              resueltosIdUser(element);
                break;
            case 7:
              noResueltoIdUserId(element);
                break;
            case 8:
                console.log("Saliendo de la aplicación... ");
                rl.close();
                break;
            default:
              console.log("Opción no válida. Ingrese un numero que este entre el rango de valores.");
          }
          if (opcion !== 8) {
            preguntarOpcion();
          }
        });
      }

      mostrarMenu();
      preguntarOpcion();
    })
    .catch(error => console.error('Error al obtener la lista: ', error));
}

// Iniciar la aplicación
ejecutarApp();
