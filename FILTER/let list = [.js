let list = [
    'josvan de souza ',
    'amster de brito ',
    'hoffman douglas',
    'hamman israel'
];

let newList = list.filter((item)=>{
 let names = item.split(' ');
 if(names.length > 2){
    return true;
 }else{
    return false;
 }
});

console.log(list);
console.log(newList);