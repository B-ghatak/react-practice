import conf from "../conf/config";
import { Client, ID, Account } from 'appwrite';

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, passsword, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, passsword, name)

            if (condition) {
                return this.login(email, passsword)
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, passsword }) {
        try {

            return await this.account.createEmailPasswordSession(email, passsword)

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logoutUser() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }

}
const authService = new AuthService()

export default authService;