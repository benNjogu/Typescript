type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday);

//Optional element access operator
/**
 * eg customer?.[0] this checks to make sure that the customer is not null or undefined.
 */

//Optional call operator
let log: any = null;
log?.("a");
