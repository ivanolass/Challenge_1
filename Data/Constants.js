import dotenv from 'dotenv'
dotenv.config({path:'.env'})

export const URLS = {
    LOGPAGE:process.env._URL,
}

export const CREDENTIALS = {
    VA_USER:{
        USERNAME:process.env.U_NAME,
        PASSWD:process.env.PASSWD,
    },
    INV_USER:{
        USERNAME:'ASwaSD',
        PASSWD:'secret_sauce',
    }
}

export const MESSAGE = {
    E_MESSAGE:{
        UNAME_ERROR:'Epic sadface: Username and password do not match any user in this service',
        ZIP_ERROR:'Error: Postal Code is required',
    },
    SUC_MESSAGE:{
        ORD_SUCCESS:'THANK YOU FOR YOUR ORDER',
    }
}   