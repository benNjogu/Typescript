let speed: number | null = null;
let ride = {
  //Falsy (undefined, null, '', false, 0)
  //The two below statements mean the same thing
  //speed: speed !== null ? speed : 30,
  speed: speed ?? 30, //Nullish coalescing operator
};
