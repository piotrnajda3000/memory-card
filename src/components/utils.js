// https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
/*
cards = [
  {
    src: string, 
    heading: string 
  }
]
*/

export function createShuffled(cards) {
  const clone = cards.map((card) => ({ ...card }));
  for (let i = clone.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}
