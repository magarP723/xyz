const initialState = [
  { id: 0, name: "Prabesh Magar" },
  { id: 1, name: "David Young" },
  { id: 2, name: "Heinrich Kohl" },
];

const a = initialState.filter((u) => u.id != 1);
console.log(a);
