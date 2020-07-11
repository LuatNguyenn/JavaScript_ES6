var Person = function (name,job,age) {
    this.name = name;
    this.job = job;
    this.age = () => 2020 - age;
}

var ITguy = new Person('luat','IT',11);

console.log(ITguy);