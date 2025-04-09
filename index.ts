const userLeft:boolean = false
const userWatchingCatMeme:boolean = true

function watchTutorialPromise():Promise<string>{
    return new Promise((resolve:(value:string)=>void, reject:(reason:{name:string,message?:string})=>void) => {
        if(userLeft){
            reject({
                name:'User left',
            })
        }else if(userWatchingCatMeme){
            reject({
                name:'User Watching Cat Meme',
                message: ':( LOL'
            })
        }else{
            resolve('Thumbs up and subscribe')
        }
    })
}
watchTutorialPromise().then((message:string)=>{
    console.log(message)
}).catch((err : {name:string,message?:string})=>{
    console.log(`${err.name} ${err.message}`)
})