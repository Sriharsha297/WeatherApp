var getUser = (id ,callback) => {
    var user  = {
        id,
        name : 'Harsha'
    };
    setTimeout(() =>{
        callback(user);
    },3000);
    
};

getUser(20, (userObject) => {
    console.log(userObject); 
});