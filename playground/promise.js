const asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        if(typeof a ==='number' && typeof b === 'number'){
            resolve(a+b);
        }
        else{
            reject('Arguments should be numbers');
        }
    });
};

asyncAdd(5,6).then((sum) => {
    console.log(`Result is: ${sum}`);
    return asyncAdd(sum,'3');
}).then((res)=>{
    console.log(`Result should be 14 - ${res}`);
}).catch((errorMessage) => {
    console.log('Error:',errorMessage);
});