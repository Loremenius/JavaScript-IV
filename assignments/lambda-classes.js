// CODE here for your Lambda Classes

class Person{
    constructor(personAttr){
        this.age = personAttr.age;
        this.name = personAttr.name;
        this.location = personAttr.location;
    }
    speak(){
        return console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instAttr){
        super(instAttr);
        this.speciality = instAttr.speciality;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject){
        return console.log(`Today we will be learning about ${subject}`);
    }
    grade(student,subject){
        return console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
    giveGrade(student){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        const changeFactor = Math.round(Math.random()) * 2 - 1;
        const changeGrade = getRandomInt(101)*changeFactor
        const newGrade = student.grade + changeGrade;
        student.grade = newGrade;
        return console.log(`${this.name} changed ${student.name}'s grade to ${student.grade}.`);
    }
}

class Student extends Person{
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(`Favorite subject: ${element}`);
            return this.favSubjects;
        });
    }

    PRAssignment(subject){
        return console.log(`${this.name} has created a pull request for ${subject}`);
    }

    sprintChallenge(subject){
        return console.log(`${this.name} has started their sprint challenge for ${subject}`);
    }
    graduateCheck(){
        if(this.grade >= 70){
            return console.log(`Congrats to ${this.name}! They passed with a grade of ${this.grade} and are able to graduate!`);
        }else{
            return console.log(`Unfortunately for ${this.name}, they have a grade of ${this.grade} and are unable to graduate. They should go back and get their grade higher.`);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(slackChannel){
        return console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student,subject){
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const stud1 = new Student ({
    age:19,
    name: 'Marcellino',
    location: 'Colorado',
    previousBackground: 'High School CS classes',
    className: 'WEB24',
    favSubjects: ['math','science','drawing','programming'],
    grade:100
});

const inst1 = new Instructor ({
    age:30,
    name: 'Brit',
    location: 'Toronto',
    speciality: 'HTML,CSS, and Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Howzit going eh?'
})

const pm1 = new ProjectManager({
    age:25,
    name: 'Nick',
    speciality: 'React',
    favLanguage: 'Javascript',
    catchPhrase: `We're it so easy`,
    location: 'California',
    gradClassName: 'WEB 23',
    favInstructor: 'Geoff'
})

stud1.sprintChallenge('Javascript Fundamentals');
stud1.listsSubjects();

inst1.demo('HTML');

pm1.standUp('@WEB24');

inst1.giveGrade(stud1);
pm1.giveGrade(stud1);
stud1.graduateCheck();