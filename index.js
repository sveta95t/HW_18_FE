// Task 1

// Задачи:
// 1)Создайте класс Person со свойствами firstName, lastName и age. 
// Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. 
// Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person {
    static oldestPerson = 100;
    constructor(firstName, LastName,age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    } compareAge(newAge){
        newAge = this.oldestPerson =-this.age;
        return(newAge);
    }
}

    const user_1 = new Person ("Svetlana","Tito", 28);
    const user_2 = new Person("Olga", "Antonenko",35);
    user_1.compareAge();
    user_2.compareAge();
    console.log(user_1);
    console.log(user_2);

// Task 2
    // 5)Создайте класс Book со свойствами title, author и yearPublished. 
    // Добавьте статическое свойство, где будут сохранены все экземпляры Book.  
    // Добавьте статический метод listAuthors, 
    // который возвращает массив со  всеми именами авторов.

    class Book{
        static ListAuthors =[];
        constructor(title,author, yearPublished){
         this.title = title;
         this.author = author;
         this.yearPublished = yearPublished;   
         Book.ListAuthors.push(this);
        }
        get_ListAuthors(){
           return this.ListAuthors;
        }
    }

    const Author_1 = new Book ("Titanic", "Mattew", 1991);
    const Author_2 = new Book ("Romance Empire","Aristotel",1526);
    Author_1.get_ListAuthors();
    Author_2.get_ListAuthors()
    console.log(Author_1,Author_2);









