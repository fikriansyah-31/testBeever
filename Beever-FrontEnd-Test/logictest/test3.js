/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  // Write your code here

  var a = history.split(".");
  // console.log(a);
  var b = a.map((e) => {
    var hari = e.split("-")[0];
    var makanan = e.split("-")[1];
    var makanans = makanan.split(",");
    var hargas = makanans.map((m) => {
      // console.log(m);
      var h = listHarga.filter((h) => h.nama == m)[0]["harga"];
      return h;
      // console.log(h);
      // var totalH = h.map((a) => (totalH += a));
      // console.log(totalH);
    });
    // console.log({ [hari]: hargas });

    return {
      hari,
      hargas,
    };
  });

  // console.log("b", b);

  var c = b.map((bb) => {
    var totalH = 0;
    for (let index = 0; index < bb.hargas.length; index++) {
      totalH += bb.hargas[index];
    }
    // console.log(totalH);
    return { hari: bb.hari, totalH };
  });

  // console.log(c);

  var budget = 10000;
  var totalTab = 0;

  var sisa = {};

  c.map((ccc) => {
    var s = budget - ccc.totalH;
    totalTab += s;
    sisa[ccc.hari] = s;
  });
  sisa.TotalTabungan = totalTab;
  console.log(sisa);
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;

jumlahTabungan(hargaMakanan, historyPembelian);
