// const userLeft:boolean = false
// const userWatchingCatMeme:boolean = true
//
// function watchTutorialPromise():Promise<string>{
//     return new Promise((resolve:(value:string)=>void, reject:(reason:{name:string,message?:string})=>void) => {
//         if(userLeft){
//             reject({
//                 name:'User left',
//             })
//         }else if(userWatchingCatMeme){
//             reject({
//                 name:'User Watching Cat Meme',
//                 message: ':( LOL'
//             })
//         }else{
//             resolve('Thumbs up and subscribe')
//         }
//     })
// }
// watchTutorialPromise().then((message:string)=>{
//     console.log(message)
// }).catch((err : {name:string,message?:string})=>{
//     console.log(`${err.name} ${err.message}`)
// })
const recordVideoOne:Promise<string> = new Promise((resolve:(value:string)=>void,reject:(reason?:any)=>void)=>{
    resolve('Video 1 Recorded')
})
const recordVideoTwo:Promise<string> = new Promise((resolve:(value:string)=>void,reject:(reason?:any)=>void)=>{
    resolve('Video 2 Recorded')
})
const recordVideoThree:Promise<string> = new Promise((resolve:(value:string)=>void,reject:(reason?:any)=>void)=>{
    resolve('Video 3 Recorded')
})
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((message:string[])=>{
    console.log(message)
}).catch((err:unknown)=>{
    console.log(err)
})
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree,
// ]).then((message)=>{
//     console.log(message)
// })
