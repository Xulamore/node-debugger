// index.js
var items = [1, "2", 3, "four", 5, null, undefined, 6];
const results = [];

items.forEach((item) => {
    if (typeof item === 'number') {
    if (item % 2 === 0) results.push(item * 2);
    } else if (item === null) {
        console.log("Found a null item");
    } else {
        results.push(parseInt(item) || 0); 
    }
});

console.log("Original items:", items);
console.log("Filtered and transformed items:", results);

/* 
foreach wurde zu forEach korrigiert.
result.push wurde zu results.push korrigiert.
parseInt(item) wurde mit || 0 ergänzt, um NaN zu vermeiden, wenn parseInt fehlschlägt.
*/