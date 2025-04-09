type ApiResponse<Data = {status:number}> ={
    data:Data,
    isError:boolean,
}
// const response:ApiResponse<> = {
//     data: {
//        status:404
//     },
//     isError: false,
// }

// const response:ApiResponse<{name:string}> = {
//     data: {
//        name:'bqsjhb'
//     },
//     isError: false,
// }
const response:ApiResponse<string> = {
    data:'jk',
    isError: false,
}