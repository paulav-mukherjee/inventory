export interface Signup {
    userName : string,
    email : string,
    password : string
}

export interface Login {
    email : string,
    password : string
}

export interface Product {
    name : string,
    price: string,
    color: string,
    description: string,
    category: string,
    image : string,
    id: number
}