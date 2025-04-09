const userLeft:boolean = false
const userWatchingCatMeme:boolean = true

function watchTutorialCallback(callback:(value:string)=>void,errorCallback:(reason:{name:string,message:string})=>void){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    }else if (userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat',
            message: ':( LOL'
        })
    }else{
        callback('Thumbs up and Subscribe')
    }
}
watchTutorialCallback((message)=>{
    console.log('Success:' + message)
},(error)=>{
    console.log(error.name+ '' + error.message)
})