///Task # 18 ///
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
//has changed.
let fvtPlace = ["Kashmir", "switzerland", "Ukraine", "Austria"];
//In orignal order
console.log("Orignal order:", fvtPlace);
//In alphabatical order
let order_place = [...fvtPlace].sort();
console.log("Alphabatic order:", order_place);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
// in reverse alphabetical order
let rev_ord = [...fvtPlace].sort().reverse();
console.log("Reverse alphabetical order:", rev_ord);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
fvtPlace.reverse();
console.log("Reversed Order:", fvtPlace);
console.log([...fvtPlace].sort());
console.log([...fvtPlace].sort().reverse());
export {};
