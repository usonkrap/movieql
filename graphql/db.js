export const people = [
  {
    id: 0,
    name: "park",
    age: 20,
    gender: "male"
  },
  {
    id: 1,
    name: "kim",
    age: 22,
    gender: "male"
  },
  {
    id: 2,
    name: "nakamura",
    age: 25,
    gender: "male"
  },
  {
    id: 3,
    name: "tanaka",
    age: 50,
    gender: "female"
  },
  {
    id: 4,
    name: "sayaka",
    age: 22,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPerple = people.filter(person => person.id === id);
  return filteredPerple[0];
};
