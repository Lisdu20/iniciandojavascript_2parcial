// Codigo que le pida al usuario su edad, y si es mayor de edad le 
// pregunte su nombre y apellido, lo saldue en el DOM, si no, le ponga en el DOM lo siento, no eres mayor de edad
edad = prompt('Dame tu edad');

if (edad >=18) {
    let nombre = prompt ('Dame tu nombre');
    let apellido = prompt ('Dame tu apellido');
    document.write('Hola ' + ' ' + nombre + ' '+ apellido);
} else  {
    document.write('Lo siento, no eres mayor de edad');
} 
