const data = require('./data.json');

console.log("Benda di Meeting Room:",
            data.files[0].name, data.files[1].name), // Jika spesifik mengambil nama yang dipilih.
console.log("all Electronic Device:",
            data.files[2].name, data.files[3].name),
console.log("all furniture are:",
            data.files[0].name, data.files[1].name);
console.log("all items were purchased on 16 Januari 2020:", 
            data.files[2].name, data.files[4].name),
console.log("all items with brown color:",
            data.files[0].tags, data.files[1].tags); // jika spesifik mengambil semua tags yang dipilih