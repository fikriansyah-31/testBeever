let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

console.log(words);

var a = "";
for (let index = 0; index < words.length; index++) {
  a += words[index];
  console.log(a);
}
