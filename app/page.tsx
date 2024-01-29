import { title, subtitle } from "@/components/primitives";
import MainItem from "@/components/main-item";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center h-screen gap-4 py-8 px-10 md:py-10">
        <div className="w-full max-w-lg text-center justify-center text-wrap">
          <h1 className={title()}>Temukan Kebutuhan</h1>
          <br />
          <h1 className={title()}>sembako terlengkap dan harga terbaik di toko barokah Balikpapan</h1>
          <h2 className={subtitle({ class: "mt-4" })}>Hemat dan Praktis! Temukan Semua Kebutuhan Sembako Anda di Toko Kami.</h2>
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center justify-center">
        <MainItem />
      </section>
      <section className="flex justify-center h-auto p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.682837447115!2d116.82429546196119!3d-1.2203250403432375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147df14acaf77%3A0xffae1c109e093a2c!2sToko%20Barokah!5e0!3m2!1sid!2sid!4v1692978637530!5m2!1sid!2sid"
          width="100%"
          height="500px"
          className="rounded-xl"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
