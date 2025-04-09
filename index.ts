let p:Promise<string> = new Promise(
    (resolve:(value:string)=>void,reject:(reason:string)=>void)=>{
    let a = 1 + 1
    if(a === 2){
        resolve('success')

    }else{
        reject('Failed')
    }
})

p.then((message:string)=>{
    console.log('This is in the then' , message)
}).catch((err:string)=>{
    console.log('This in the catch',err)
})