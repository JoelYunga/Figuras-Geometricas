//área y perimetro del cuadrado
const valueResult = document.getElementById('result')
const perimSq = (side) => side * 4;
const areaSquare = (side) => side * side;
const perimTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, height) => (base * height) / 2;
const diameCircle = (radio)=>radio*2;
const perimCicle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;

function calculatePerimSq(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const  result = `El perimetro del Cuadrado es: ${perimSq(value)} cm`;
    valueResult.innerText = result;

}

function calculateAreaSq(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const  result = `El área del Cuadrado es: ${areaSquare(value)} cm^2`;
    valueResult.innerText = result;

}

//área y perimetro del triangulo

function calculetePerimTriangle(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
    const result2 = `El perímetro del Triangulo es: ${perimTriangle(side1, side2, side3)} cm`;
    valueResult.innerText=result2;
}

function calculeteAreaTriangle(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');
    base = Number(base.value);
    height = Number(height.value);
    const result2 = `El área del Triangulo es: ${areaTriangle(base, height)} cm^2`;
    valueResult.innerText=result2;
}

//área y perimetro del circulo

function calculateDiameCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    const result = `El diámetro del Circulo es: ${diameCircle(radio)} cm`;
    valueResult.innerText=result;
}

function calculatePerimCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    const result = `El perímetro del Circulo es: ${perimCicle(radio)} cm`;
    valueResult.innerText=result;
}

function calculateAreaCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    const result = `El área del Circulo es: ${areaCircle(radio)} cm^2`;
    valueResult.innerText=result;
}