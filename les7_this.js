//Проста функція без об'єкта
"use strict";

function presentThis() {
  console.log(this);  
}

presentThis();  


//this у методі об’єкта

const user1 = {
  name: "Misha",
  showName() {
    console.log(this.name);
  }
};

user1.showName();

//“втрата контексту”

var name = "misha1"

const user = {
  name: "Misha",
  showName() {
    console.log(this.name);
  }
};

const fn = user.showName;
fn();

//Стрілочні функції
const user3 = {
  name: "Misha",
  showName: () => {
    console.log(user3.name);
  }
};

user3.showName(); 


//приклад Page Object 
export class LoginPage {
  constructor(page) {
    this.page = page; 
  }

  async open() {
    await this.page.goto("https://example.com");
  }

  async login(email, pass) {
    await this.page.fill("#email", email);
    await this.page.fill("#pass", pass);
    await this.page.click("button[type=submit]");
  }
}