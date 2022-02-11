// for (let inicio; condicion ; incremento){
//  code...
// }

const numero = 1;
const initial = 1;
const limit = 10;
// para el valor inicial se puede usar i,j,k index
// debugger;
for (let i = initial; i <= limit; i++) {
  const result = i * numero;
  console.log(`${i}x${numero} = ${result}`);
}

console.log("***************************");
for (let i = initial; i <= limit; i++) {
  const result = i * numero;
  if (i % 2 === 0) {
    console.log(`${i}x${numero} = ${result}`);
  }
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`x, y  = (${i},${j})`);
  }
}

// while (condicion) {
//  code...
// }

let index = 1;
while (index <= 10) {
  const result = index * numero;
  console.log(`${index}x${numero} = ${result}`);
  index++;
}

// do
// {
//  code...
// } while(condicion)

index = 0;
do {
  const result = index * numero;
  console.log(`${index}x${numero} = ${result}`);
  index++;
} while (index <= 10);

/*
switch(valor){
    case "http": -> if(valor === 'http')
        code ...
    break;
    case 'otro_valor' : -> if (valor === 'otro_valor')
        code...
    break;
    default:
        code...
    break;
}
*/

// debugger;
const PROTOCOL = "HTTPS";

switch (PROTOCOL) {
  case "HTTPS":
  case "HTTP":
    console.log("Es un sitio web");
    break;
  case "SSH":
    console.log("Super ADMIN en servidor");
    break;
  default:
    console.log("NO ENCONTRADO");
    break;
}

console.log("****** OTRA FORMA ******");

let message = "NO ENCONTRADO";
if (PROTOCOL === "HTTP" || PROTOCOL === "HTTPS") {
  message = "Es un sitio web";
} else if (PROTOCOL === "SSH") {
  message = "Super ADMIN en servidor";
}

console.log(message);
