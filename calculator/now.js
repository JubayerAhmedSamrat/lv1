
const haveCar = false;
const promise = new Promise((resolve, reject)=> {
    if(haveCar){
        resolve([
            {
                name: 'jubayer',
                address: "dhaka",
                role: "software developer"
            },
            {
                name: 'sakib',
                address: 'segun bagicha',
                role: 'flutter developer'
            }
        ])
    } else{
        reject("can't find any data");
    }
});

promise.then(res =>{
    console.log(res)
})
promise.catch(jubayer =>{
    console.log(jubayer)
})