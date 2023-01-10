export interface LoginModel {
    email: string;
    password: string;
}

export interface RegisterModel {
    email: string;
    password: string;
    confirm: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    token: string;
    email: string;
}