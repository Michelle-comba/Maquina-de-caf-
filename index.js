// Declaración de variables y constantes para la máquina dispensadora

// Inventario inicial de insumos y recursos (let porque cambian al dispensar)
let saldoCliente = 0;
let stockCafe = 1000;      // en gramos
let stockLeche = 2000;     // en mililitros
let stockAgua = 5000;      // en mililitros
let stockAzucar = 1000;    // en gramos
let stockCacao = 500;      // en gramos
let stockTe = 300;         // en gramos
let stockVasos = 50;       // en unidades

// Precios fijos de los 6 productos (constantes)
const PRECIO_CAFE_NEGRO = 2500;
const PRECIO_CAFE_LECHE = 3500;
const PRECIO_CAPUCHINO = 4500;
const PRECIO_CHOCOLATE = 4000;
const PRECIO_TE_CHAI = 3000;
const PRECIO_MOCACCINO = 4800;

console.log("Sistema de la máquina de café inicializado correctamente con 6 productos.");