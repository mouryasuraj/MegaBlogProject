import config from "../config/config";
import {Client, Account, ID} from 'appwrite'


class AuthService{
    client = new Client();
    account;


    constructor(){
        this.client
                .setEndpoint(config.appwriteURL)
                .setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }


    // create user account
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login(email, password)
            }else{
            return userAccount;
            }

        } catch (error) {
            throw error
        }
    }

    // Login
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // get Current User
    async getCurrUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    // logout
    async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            throw error
        }
    }

}


const authSer = new AuthService;
export default authSer