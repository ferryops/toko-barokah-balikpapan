import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import MainItem from "@/components/main-item";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center h-screen gap-4 py-8 md:py-10">
        <div className=" max-w-lg text-center justify-center">
          <h1 className={title()}>Temukan&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>kebutuhan&nbsp;</h1>
          <br />
          <h1 className={title()}>sembako terlengkap dan harga terbaik di toko barokah Balikpapan</h1>
          <h2 className={subtitle({ class: "mt-4" })}>Hemat dan Praktis! Temukan Semua Kebutuhan Sembako Anda di Toko Kami.</h2>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <MainItem />
      </section>
      <section className="flex justify-center h-screen items-end">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.682837447115!2d116.82429546196119!3d-1.2203250403432375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147df14acaf77%3A0xffae1c109e093a2c!2sToko%20Barokah!5e0!3m2!1sid!2sid!4v1692978637530!5m2!1sid!2sid"
          width="600"
          height="450"
          className="rounded-md"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
