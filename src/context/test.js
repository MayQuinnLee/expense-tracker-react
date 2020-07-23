const state = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -30 },
    { id: 4, text: "Camera", amount: -200 },
  ],
};

console.log({
  ...state,
  transactions: state.transactions.push({ id: 5, text: "abc", amount: -200 }),
});
