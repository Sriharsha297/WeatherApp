console.log('Starting app');

setTimeout(() =>{
    console.log('Inside of call back');
},2500);

setTimeout(() =>{
    console.log('inside of callback 2');
},0);
console.log('Finishing up');