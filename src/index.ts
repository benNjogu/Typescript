interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly //index signature
  //keyof operator
  [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};

let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};
