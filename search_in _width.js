// Поиск в ширину реализован на основе класса Group который представляет собой небольшую 
// социальную сеть и демонстрирует взаимодействия между пользователями, метод find 
// использует алгоритм поиск в ширину среди друзей пользователя, далее их 
// друзей и т.д. до тех пор пока не пройдется по всей сети.

class Group {
  constructor(name, job = 'no Job') {
    this.id = Group.addId()
    this.name = name
    this.age = Math.round(Math.random() * 80)
    this.friends = []
    this.job = job
    Group.addInAll(this)
  }

  addFriend(friendId) { // метод добавления друзей 
    this.friends.push(friendId);
    Group.all[friendId].friends.push(this.id);
  }

  deleteFriend(friendId) {
    this.friends.splice(this.friends.indexOf(friendId), 1); // метод удаления друзей 
  }

  showFriend() {
    return this.friends.map(i => Group.all[i].name) // вывести список имен друзей пользователя 
  }

  static all = {}

  static addInAll(person) {
    this.all[person.id] = person
  }

  static addId = (
    function () {
      let id = 1;
      return () => id++;
    }
  )()

  find(value, param = 'name') { // поиск по какому либо параметру
    let queue = [...this.friends];
    let cheked = [];
    while (queue.length !== 0) {
      if (cheked.includes(queue[0])) {
        queue.shift();
        continue;
      }
      let person = Group.all[queue[0]];
      if (person[param] == value) {
        return Group.all[queue[0]];
      } else {
        cheked.push(queue[0]);
        queue.shift();
        queue.push(...person.friends);
      }
    }
    return null;
  }
}





let p1 = new Group('person1');
let p2 = new Group('person2');
let p3 = new Group('person3');
let p4 = new Group('person4');
let p5 = new Group('qwery')
let p6 = new Group('person5');
let p7 = new Group('person6');
let p8 = new Group('person7');
let p9 = new Group('person8');
let p10 = new Group('person9');
let p11 = new Group('person10');
let p12 = new Group('person11');
let p13 = new Group('person12');
let p14 = new Group('person13');
let p15 = new Group('person14', 'Mango seller');


p2.addFriend(3);
p3.addFriend(1);
p4.addFriend(3);
p1.addFriend(5);
p1.addFriend(2);
p5.addFriend(4);
p6.addFriend(5);
p7.addFriend(6);
p8.addFriend(7);
p9.addFriend(8);
p10.addFriend(9);
p11.addFriend(10);
p12.addFriend(11);
p13.addFriend(12);
p14.addFriend(13);
p15.addFriend(14);


console.log(p1);
console.log(Group.all);
console.log(p2.find('Mango seller', 'job'));
console.log(p3.showFriend());