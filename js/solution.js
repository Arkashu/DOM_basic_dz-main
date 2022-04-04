let bodyEl = document.body.childNodes;

let ul = bodyEl[1];
let li = document.getElementsByTagName('li')
console.log(li.length)
let arr = [];
for (let i = 0; i <= li.length-1; i++) {
    arr[i] = li[i].innerHTML;
}
console.log(arr)
let ulAtr = ul.attributes;
let arr2 = [];
let i = 0;
let arrNames = [];
for (const ulAtrElement of ulAtr) {
    arr2[i] = ulAtrElement.value;
    arrNames[i] = ulAtrElement.name;
    i++;
}
console.log(arr2);
console.log(arrNames)
let elements = document.querySelector('ul > li:last-child');
elements.innerHTML = 'Привет меня зовут Аркадий';
let elements1 = document.querySelector('ul > li:first-child');
elements1.setAttribute('data-my-name', 'Arkadii');
ul.removeAttribute('data-dog-tail')