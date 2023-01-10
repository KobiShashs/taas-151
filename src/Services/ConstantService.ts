abstract class Config{


}

class Development extends Config{
    public urls = {
        "auth":"http://localhost:8080/api/auth",
        "tasks":"http://localhost:8080/api/tasks",
        "users": "http://localhost:8080/api/users/tasks",
    }
}

class Production extends Config{
    public urls = {
        "auth":"www.niv.banai.aws.com/couponsystem/api/auth",
        "tasks":"https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks",
        "users": "www.niv.banai.aws.com/couponsystem/api/users"
    }
}

const global = process.env.NODE_ENV === "development" ? new Development() : new Production();
export default global;