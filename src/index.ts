function render(document: unknown) {
  //Narrowing
  if (typeof document === "string") document.toUpperCase();
  //typeof operator works for primitive types

  if (document instanceof wordDocument) {
    //use instance of for object types
  }
  document.move();
}
