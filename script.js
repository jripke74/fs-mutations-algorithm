function mutation(arr) {
  const wordOne = arr[0].toLowerCase();
  const wordTwo = arr[1].toLowerCase();
  for (const char of wordTwo) {
    if (!wordOne.includes(char)) {
      console.log(char);
      return false;
    }
  }
  return true;
}
mutation("hello", "hey");