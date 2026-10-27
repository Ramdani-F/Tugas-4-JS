
const bulat = (n) => Math.round(n * 100) / 100;


// a. SEGITIGA (siku-siku)
function segitiga(alas, tinggi) {
  const sisiMiring = Math.sqrt(alas ** 2 + tinggi ** 2);
  const luas = 0.5 * alas * tinggi;
  const keliling = alas + tinggi + sisiMiring;

  console.log("=== a. SEGITIGA (siku-siku) ===");
  console.log(`Alas        : ${alas}`);
  console.log(`Tinggi      : ${tinggi}`);
  console.log(`Sisi miring : ${bulat(sisiMiring)}`);
  console.log(`Luas        : ${bulat(luas)}`);
  console.log(`Keliling    : ${bulat(keliling)}`);
  console.log("");
}


// b. PERSEGI PANJANG
function persegiPanjang(panjang, lebar) {
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);

  console.log("=== b. PERSEGI PANJANG ===");
  console.log(`Panjang  : ${panjang}`);
  console.log(`Lebar    : ${lebar}`);
  console.log(`Luas     : ${bulat(luas)}`);
  console.log(`Keliling : ${bulat(keliling)}`);
  console.log("");
}


// c. PRISMA (alas segitiga siku-siku)
function prisma(alasSegitiga, tinggiSegitiga, tinggiPrisma) {
  const sisiMiring = Math.sqrt(alasSegitiga ** 2 + tinggiSegitiga ** 2);
  const luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
  const kelilingAlas = alasSegitiga + tinggiSegitiga + sisiMiring;
  const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggiPrisma;
  const volume = luasAlas * tinggiPrisma;

  console.log("=== c. PRISMA SEGITIGA ===");
  console.log(`Alas segitiga   : ${alasSegitiga}`);
  console.log(`Tinggi segitiga : ${tinggiSegitiga}`);
  console.log(`Tinggi prisma   : ${tinggiPrisma}`);
  console.log(`Luas alas       : ${bulat(luasAlas)}`);
  console.log(`Keliling alas   : ${bulat(kelilingAlas)}`);
  console.log(`Luas permukaan  : ${bulat(luasPermukaan)}`);
  console.log(`Volume          : ${bulat(volume)}`);
  console.log("");
}

// d. LIMAS (alas persegi)
function limas(sisiAlas, tinggiLimas) {
  const tinggiSisiTegak = Math.sqrt(tinggiLimas ** 2 + (sisiAlas / 2) ** 2);
  const luasAlas = sisiAlas ** 2;
  const kelilingAlas = 4 * sisiAlas;
  const luasSelimut = 4 * (0.5 * sisiAlas * tinggiSisiTegak);
  const luasPermukaan = luasAlas + luasSelimut;
  const volume = (1 / 3) * luasAlas * tinggiLimas;

  console.log("=== d. LIMAS (alas persegi) ===");
  console.log(`Sisi alas         : ${sisiAlas}`);
  console.log(`Tinggi limas      : ${tinggiLimas}`);
  console.log(`Tinggi sisi tegak : ${bulat(tinggiSisiTegak)}`);
  console.log(`Luas alas         : ${bulat(luasAlas)}`);
  console.log(`Keliling alas     : ${bulat(kelilingAlas)}`);
  console.log(`Luas permukaan    : ${bulat(luasPermukaan)}`);
  console.log(`Volume            : ${bulat(volume)}`);
  console.log("");
}


// e. SEGITIGA SEMBARANG (rumus Heron)
function segitigaSembarang(a, b, c) {
  console.log("=== e. SEGITIGA SEMBARANG ===");

  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Sisi-sisi tersebut tidak bisa membentuk segitiga!");
    console.log("");
    return;
  }

  const s = (a + b + c) / 2;
  const luas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const keliling = a + b + c;

  console.log(`Sisi a   : ${a}`);
  console.log(`Sisi b   : ${b}`);
  console.log(`Sisi c   : ${c}`);
  console.log(`Luas     : ${bulat(luas)}`);
  console.log(`Keliling : ${bulat(keliling)}`);
  console.log("");
}


// PROGRAM UTAMA
console.log("##############################################");
console.log("   PROGRAM HITUNG LUAS, KELILING, DAN VOLUME  ");
console.log("##############################################\n");

segitiga(6, 8);
persegiPanjang(10, 5);
prisma(3, 4, 10);
limas(6, 4);
segitigaSembarang(7, 8, 9);