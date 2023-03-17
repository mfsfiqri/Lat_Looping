const x = [3, 2, 5, 10];
let tambah = 0;
for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
  tambah += x[i];
}
console.log("Hasil pertambahannya adalah", tambah);

let i = 0;
while (i < x.length) {
  console.log(x[i]);
  tambah += x[i];
  i++;
}
console.log("Hasil pertambahannya adalah", tambah);

do {
  console.log(x[i]);
  tambah += x[i];
  i++;
} while (i < x.length);
console.log("Hasil pertambahannya adalah", tambah);

const pacarSaya = ["ratna", "rika", "intan", "ghaida", "nadia"];

console.log(pacarSaya);

for (let pacar of pacarSaya) {
  console.log(pacar);
}

for (let pacar in pacarSaya) {
  console.log(pacar);
}

pacarSaya.forEach((pacar, index) => {
  console.log(pacar, index + 1);
});

pacarSaya.map((pacar, index) => {
  console.log(pacar, index + 1);
});
