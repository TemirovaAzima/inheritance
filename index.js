const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:"User left"
            })
        }else if(userWatchingCatMeme){
            reject({
                name:"User watching cat meme",
                message:":( LOL"
            })
        }else{
            resolve('Thumbs up and Subscribe')
        }
    })
}
// watchTutorialPromise((message)=>{
//     console.log('Success' + message )
// },(error) =>{
//     console.log(` ${error.name} ${error.message}`)
// })
watchTutorialPromise().then((message)=>{
    console.log('Success' + message)
}).catch((error)=>{
    console.log(error.name + '  ' + error.message )
})