function generateList(array){
let list = document.createElement('ul');
    for (let i = 0; i <= array.length - 1; i++) {
     let list2 = document.createElement('li', "1");
     list2.innerHTML = array[i];
     list.appendChild(list2);
    }
    console.log(list);
}
let array = [1, 2, 3];

generateList(array)