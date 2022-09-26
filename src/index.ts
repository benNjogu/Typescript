function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  //to tell the compiler that this fn never returns
  while (true) {
    //Read a message from a queue
  }
}

reject("...");
console.log("Hello world");
