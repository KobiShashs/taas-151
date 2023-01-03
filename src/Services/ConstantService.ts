abstract class Config{


}

class Development extends Config{
    public urls = {
        "tasks":"http://localhost:8080/api/tasks",
        "users": "www.somewhereintheinternert.com/whatever",
    }
}

class Production extends Config{
    public urls = {
        "tasks":"https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks",
        "users": "www.niv.banai.aws.com/couponsystem/api/users"
    }
}

const global = process.env.NODE_ENV === "development" ? new Development() : new Production();
export default global;