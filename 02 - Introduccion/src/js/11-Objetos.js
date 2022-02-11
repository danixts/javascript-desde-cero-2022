// object
/* 
    {
      key: value,
      key1: value
    }
*/

const data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: true,
  print: function () {
    console.log(
      `El titulo es ${this.title}, se completo ${this.completed ? "SI" : "NO"}`
    );
  },
};

const printValue = (key) => {
  console.log(`${key} -> value = ${data[key]}`);
};

printValue("userId");
printValue("id");
printValue("title");
printValue("completed");

console.log("userId", data.userId);
console.log("id", data.id);
console.log("title", data.title);
console.log("completed", data.completed);

data.print();
