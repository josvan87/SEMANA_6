
let list = [
    'josvan souza ',
    'amster brito ',
    'hoffman douglas',
    'hamman israel'
];

let firtNames = list.map((item)=>{
    let names = item.split(' ');
    return names[0];
});

console.log(list);
console.log(firtNames);