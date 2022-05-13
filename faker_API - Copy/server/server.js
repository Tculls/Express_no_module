const express = require("express");
const cors = require("cors");
const app = express();
const { faker } = require('@faker-js/faker');



// const randomName = faker.name.findName(); // Rowan Nikolaus
// console.log(randomName)
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// console.log(randomEmail)
// const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
// console.log(randomPhoneNumber)

class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}



app.use(cors());
app.use(express.json())

app.get("/api/greeting"), ( res =>{
    res.json({"message": "Its time to API"})
})
app.listen(8000, ()=>console.log(`Listening to port:8000`) )

app.get("/api/users/new"), ( res =>{
    let user = new User();
    console.log(user);
    res.json({"result": user})
})


app.get("/api/companies/new"), ( res =>{
    let company = new Company();
    console.log(company);
    res.json({"result": company})
})

app.get("/api/user/company"), ( res =>{
    let company = new Company();
    let user = new User();
    res.json({results: {
        user: user,
        company: company
    }});
})
