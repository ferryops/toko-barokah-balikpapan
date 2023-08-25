import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ size: "md" })}>Tentang Toko Barokah</h1>
      <h2 className="mt-2">
        Toko Barokah merupakan toko sembako yang menjual berbagai macam jenis kebutuhan tumah tangga. Awalnya hanya berfokus pada
        menjual beras, gula, dan minyak, namun seiring waktu, toko ini berkembang menjadi pusat kebutuhan sehari-hari bagi warga
        sekitar. Melalui pelayanan yang baik dan harga yang terjangkau, toko barokah ini berhasil bertahan dan terus berkembang
        hingga hari ini dalam memenuhi kebutuhan masyarakat sekitar.
      </h2>
    </div>
  );
}
