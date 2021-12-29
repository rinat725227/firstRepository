//console.log("работа с датой в JS")

//var data = new Date()

//console.log(data.getFullYear())
//console.log(data.getMonth())
//console.log(data.getDate())
//console.log(data.getHours())
//console.log(data.getMinutes())
//console.log(data.getSeconds())

//console.log("время сегодня: " + data.getHours() + ":" + data.getMinutes())

//data.setHours(12)
//data.setMinutes(14)


//console.log("специальные функции для масивов")


//var arr = [5, 3, 7, 90, -5]
//var stroka = arr.reverse().join(", ")
//console.log(arr.join(", "))
//console.log(arr.sort())
//console.log(stroka.split(",  "))




//console.log("создание класса")


class Person {
    constructor(name, age, happiess) {
        this.name = name
        this.age = age
        this.happiess = happiess
    }

  tima() {
console.log("человек: " + this.name  + " Возраст: " + this.age)

    }
}

//console.log("создание объектов")

var alex = new Person('alex', 45,true)
var bob = new Person('bob',22,false)

alex.name = 'alex2'

alex.tima()
    bob.tima()


//console.log(alex.name)
//console.log(bob.age)








