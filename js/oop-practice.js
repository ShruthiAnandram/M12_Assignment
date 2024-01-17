//STEP 1
/*function Cat() {

}
const Dog = function () {

};*/

//STEP 2
/*function Cat() {

}
const Dog = function () {

};
const myCat = new Cat();
const myDog = new Dog();*/

//STEP 3
/*const Animal = function () {
    alert('The Animal has been created');
};
const animal = new Animal();*/

//STEP 4
/*const Animal = function (message) {
    alert(message);
};
const animal = new Animal('The Animal has been created');*/

//STEP 5
/*const Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
const animal = new Animal('Dog', 'Labrador', 'Brown', 47, 58);*/

//STEP 6
/*const Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
const animal = new Animal('Dog', 'Labrador', 'Brown', 47, 58);

for (let i = 0; i < animal.length; i += 1) {
    console.log(i + ' - ' + animal[i]);
}*/

//STEP 7
/*const Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
Animal.prototype.makeNoise = function () {
    if (this.type.toLowerCase() === 'dog') {
        return 'The ' + this.color.toLowerCase() + ' dog is barking!';
    } else {
        return 'The ' + this.color.toLowerCase() + ' cat is meowing!';
    }
};
const dog = new Animal('Dog', 'Labrador', 'Brown', 47, 58);
const cat = new Animal('Cat', 'Persian', 'Brown', 22, 35);
console.log(dog.makeNoise());
console.log(cat.makeNoise());*/

//STEP 8
/*const Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    let checkType = function () {
        if (type.toLowerCase() === 'dog') {
            return 'dog';
        } else {
            return 'cat';
        }
    };
    this.speak = function () {
        return checkType();
    };
};
const pet = new Animal('Dog', 'Lab', 'Brown', 47, 58);
console.log('The ' + pet.speak() + ' has made a noise!');*/

//STEP 9
/*String.prototype.numWords = function (word) {
    let totalWords = [], total = 0, i;
    totalWords = this.split(' ');
    for (i = 0; i < totalWords.length; i++) {
        if (totalWords[i].toLowerCase() === word.toLowerCase()) {
            total += 1;
        }
    }
    return total;
};
let message = 'A brown fox jumps over a well and turned blue. The fox realized the danger ahead. The release of fox.';
console.log(message.numWords('fox'));*/