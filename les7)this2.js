//this у методі об’єкта
var name = "misha1"

const user1 = {
  name: "Misha2",
  showName() {
    console.log(this.name);
  }
};

user1.showName();


const user = {
  name: "Misha3",
  showName2() {
    console.log(this.name);
  }
};

const fn = user.showName2.bind(user);
fn();
