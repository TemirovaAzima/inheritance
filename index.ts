type ApiResponse<Data extends object = { status: number }> = {
    data: Data,
    isError: boolean,
}
// const response:ApiResponse<string> = {
//     data:'jk',    // it gives an error
//     isError: false,
// }

// const response:ApiResponse<{name:string}> = {
//     data:{
//         name:'jj'
//     } , // it gives an error
//     isError: false,
// }

const response: ApiResponse = {
    data: {
        status: 200
    }, // it gives an error
    isError: false,
}