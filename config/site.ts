export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Toko Barokah Balikpapan",
  description: "Temukan Kebutuhan Sembako Terlengkap dan Harga Terbaik di Toko Swalayan Kami!",
  authors: [{ name: "Toko Barokah Team", url: "https://www.tokobarokah.biz.id/" }],
  keywords:
    "sembako, toko swalayan, kebutuhan rumah tangga, alat tulis, obat-obatan, jajanan, makanan ringan, gas elpiji, air isi ulang, perlengkapan bayi, isi ulang pulsa, isi ulang paket internet, portal pembayaran online, pengiriman uang, rokok",
  generator: "Next.js",
  navItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Produk",
      href: "/produk",
    },
    {
      label: "Tentang",
      href: "/tentang",
    },
  ],
  navMenuItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Produk",
      href: "/produk",
    },
    {
      label: "Tentang",
      href: "/tentang",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },

  dataProduct: [
    {
      name: "Beras",
      desc: "Beras adalah makanan pokok utama di Indonesia. Toko Barokah Balikpapan menyediakan berbagai macam variasi beras pilihan.",
    },
    {
      name: "Gula",
      desc: "Gula, kelezatan manis untuk setiap hidangan. Temukan kualitas terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Garam",
      desc: "Garam, penyempurna rasa untuk masakan Anda. Dapatkan garam berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Minyak goreng",
      desc: "Minyak goreng, kunci kelezatan masakan. Pilih minyak berkualitas dari Toko Barokah Balikpapan.",
    },
    {
      name: "Tepung terigu",
      desc: "Tepung terigu, dasar segala kue lezat. Temukan tepung terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Mie instan",
      desc: "Mie instan, solusi cepat untuk kelaparan. Dapatkan pilihan mie instan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Telur",
      desc: "Telur, sumber protein berkualitas. Beli telur segar di Toko Barokah Balikpapan.",
    },
    {
      name: "Susu kaleng",
      desc: "Susu kaleng, kelezatan kesehatan dalam kemasan. Temukan pilihan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Kecap manis",
      desc: "Kecap manis, sentuhan manis pada masakan Anda. Dapatkan kecap berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Saus tomat",
      desc: "Saus tomat, pelengkap sempurna untuk hidangan favorit Anda. Beli saus tomat terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Bumbu masak",
      desc: "Bumbu masak (bawang putih, bawang merah, cabai, jahe), rahasia kelezatan masakan Anda. Temukan bumbu berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Kopi",
      desc: "Kopi, kenikmatan hitam yang mendalam. Dapatkan biji kopi terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Teh",
      desc: "Teh, kehangatan dalam secangkir. Temukan teh pilihan di Toko Barokah Balikpapan.",
    },
    {
      name: "Gula pasir",
      desc: "Gula pasir, sentuhan manis setiap hari. Beli gula berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Kopi instan",
      desc: "Kopi instan, nikmati kopi cepat tanpa ribet. Temukan kopi instan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Teh celup",
      desc: "Teh celup, kenyamanan teh dalam kecepatan. Dapatkan teh celup berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Makanan kaleng",
      desc: "Makanan kaleng (sarden, kornet, dll.), kenyamanan dalam setiap kaleng. Temukan pilihan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Biskuit",
      desc: "Biskuit, camilan renyah untuk segala usia. Dapatkan biskuit terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Kerupuk",
      desc: "Kerupuk, kelezatan yang renyah. Temukan kerupuk terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Keripik kentang",
      desc: "Keripik kentang, camilan yang gurih. Dapatkan keripik kentang terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Tepung maizena",
      desc: "Tepung maizena, penyelamat setiap masakan. Beli tepung maizena berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Santan kaleng",
      desc: "Santan kaleng, kelembutan rasa dalam setiap santannya. Temukan santan kaleng terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Sirup",
      desc: "Sirup, kelezatan rasa manis untuk minuman Anda. Dapatkan sirup berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Madu",
      desc: "Madu, kelezatan alami dengan manfaat kesehatan. Beli madu berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Kacang-kacangan",
      desc: "Kacang-kacangan (kacang tanah, kacang almond, dll.), sumber nutrisi yang lezat. Temukan pilihan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Garam dapur",
      desc: "Garam dapur, penyempurna rasa setiap hidangan. Dapatkan garam dapur berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Makanan beku",
      desc: "Makanan beku (ayam nugget, sosis, dll.), kenyamanan dalam setiap sajian. Temukan pilihan terbaik di Toko Barokah Balikpapan.",
    },
    {
      name: "Sabun mandi",
      desc: "Sabun mandi, keharuman dan kelembutan untuk kulit Anda. Dapatkan sabun mandi berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Sabun cuci piring",
      desc: "Sabun cuci piring, bersih sempurna untuk peralatan dapur Anda. Beli sabun cuci piring berkualitas di Toko Barokah Balikpapan.",
    },
    {
      name: "Sabun laundry",
      desc: "Sabun laundry, keharuman yang tahan lama untuk pakaian Anda. Temukan sabun laundry berkualitas di Toko Barokah Balikpapan.",
    },
  ],

  categoryProduct: [
    {
      name: "Bahan Sembako",
      desc: "Berlokasi dekat dengan pemukiman penduduk, Toko Barokah Balikpapan sudah pasti menjual barang-barang sembako seperti beras, tepung terigu, minyak, gula, telur, dan beberapa barang pokok lainnya. Sembako yang dijual di Toko Barokah Balikpapan bisa dalam bentuk eceran maupun sudah dalam bentuk kemasan yang lebih praktis.",
    },
    {
      name: "Kebutuhan Rumah Tangga",
      desc: "Temukan segala kebutuhan rumah tangga Anda di Toko Barokah Balikpapan. Mulai dari peralatan dapur, peralatan kebersihan, hingga barang-barang esensial lainnya untuk membuat rumah Anda lebih nyaman.",
    },
    {
      name: "Alat Tulis",
      desc: "Dapatkan berbagai macam alat tulis berkualitas tinggi di Toko Barokah Balikpapan. Mulai dari pensil, pulpen, buku catatan, dan segala perlengkapan tulis lainnya untuk mendukung produktivitas Anda sehari-hari.",
    },
    {
      name: "Obat-obatan",
      desc: "Jaga kesehatan Anda dengan membeli obat-obatan terpercaya di Toko Barokah Balikpapan. Temukan berbagai jenis obat, vitamin, dan suplemen kesehatan untuk menjaga kondisi tubuh Anda.",
    },
    {
      name: "Jajanan dan Makanan Ringan",
      desc: "Nikmati berbagai pilihan jajanan dan makanan ringan di Toko Barokah Balikpapan. Mulai dari cemilan favorit hingga makanan ringan sehat untuk menemani waktu santai Anda.",
    },
    {
      name: "Gas Elpiji 3KG/5KG/12KG",
      desc: "Sediakan kebutuhan gas elpiji Anda di Toko Barokah Balikpapan. Dapatkan gas elpiji berbagai ukuran untuk memenuhi kebutuhan dapur Anda dengan harga terbaik.",
    },
    {
      name: "Air Isi Ulang",
      desc: "Penuhi kebutuhan air minum Anda dengan mudah di Toko Barokah Balikpapan. Kami menyediakan layanan isi ulang air berkualitas untuk memastikan Anda selalu memiliki air bersih di rumah.",
    },
    {
      name: "Perlengkapan Bayi",
      desc: "Temukan perlengkapan bayi terbaik di Toko Barokah Balikpapan. Dari popok, susu bayi, hingga peralatan mandi, kami memiliki semua yang Anda butuhkan untuk kesejahteraan si kecil.",
    },
    {
      name: "Isi Ulang Pulsa Semua Operator",
      desc: "Isi ulang pulsa dengan mudah di Toko Barokah Balikpapan. Kami mendukung semua operator, sehingga Anda dapat tetap terhubung dengan keluarga dan teman-teman Anda tanpa khawatir kehabisan pulsa.",
    },
    {
      name: "Isi Ulang Paket Internet Semua Operator",
      desc: "Selalu terkoneksi dengan dunia digital. Isi ulang paket internet dari semua operator di Toko Barokah Balikpapan dan nikmati akses internet yang cepat dan stabil.",
    },
    {
      name: "Portal Pembayaran Online",
      desc: "Bayar tagihan dan transaksi online dengan cepat dan aman di Toko Barokah Balikpapan. Gunakan portal pembayaran online kami untuk kenyamanan dalam melakukan transaksi keuangan Anda.",
    },
    {
      name: "Pengiriman Uang",
      desc: "Kirim dan terima uang dengan mudah di Toko Barokah Balikpapan. Layanan pengiriman uang kami memberikan kemudahan dan keamanan dalam melakukan transaksi keuangan Anda.",
    },
    {
      name: "Rokok",
      desc: "Temukan berbagai jenis rokok favorit Anda di Toko Barokah Balikpapan. Dapatkan pilihan rokok terbaik dengan harga yang kompetitif hanya di toko kami.",
    },
  ],
};
