let lista=document.getElementById('lista')
//manejando el item de peras
let nodo1=document.createElement('li');
let peras=document.createTextNode('peras');
//manejando el item manzanas
let nodo2=document.createElement('li');
let manzanas=document.createTextNode('manzanas');
//obteniendo listas y agregando nodos
lista.appendChild(nodo1);
lista.appendChild(nodo2);
nodo1.appendChild(peras);
nodo2.appendChild(manzanas);