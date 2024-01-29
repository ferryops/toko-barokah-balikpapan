import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="w-full px-8 flex-col gap-6">
      <h1 className={title({ size: "md" })}>Tentang Toko Barokah</h1>
      <h2 className="mt-2">
        Toko Barokah merupakan toko sembako yang menjual berbagai macam jenis kebutuhan tumah tangga. Awalnya hanya berfokus pada
        menjual beras, gula, dan minyak, namun seiring waktu, toko ini berkembang menjadi pusat kebutuhan sehari-hari bagi warga
        sekitar. Melalui pelayanan yang baik dan harga yang terjangkau, toko barokah ini berhasil bertahan dan terus berkembang
        hingga hari ini dalam memenuhi kebutuhan masyarakat sekitar.
      </h2>
      <section className="flex justify-center h-auto mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.682837447115!2d116.82429546196119!3d-1.2203250403432375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147df14acaf77%3A0xffae1c109e093a2c!2sToko%20Barokah!5e0!3m2!1sid!2sid!4v1692978637530!5m2!1sid!2sid"
          width="100%"
          height="500px"
          className="rounded-xl"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
