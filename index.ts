type ApiResponse<Data> ={
    data:Data,
    isError:boolean,
}

// const response:ApiResponse<{name:string,age:number}> = {
//     data: {
//         name:'Kyle',
//         age:28
//     },
//     isError: false,
// }

type UserResponse = ApiResponse<{ name:string,age:number }>
type BlogResponse = ApiResponse<{ title:string }>
type StatusResponse = ApiResponse<{ status:number }>

const response:UserResponse = {
    data: {
        name:'Kyle',
        age:28
    },
    isError: false,
}

const responseBlog:BlogResponse = {
    data: {
       title:'blog'
    },
    isError: false,
}