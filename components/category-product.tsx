import React from "react";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { siteConfig } from "@/config/site";
export default function CategoryProduct() {
  return (
    <>
      <h3 className="text-white font-medium text-large text-center pb-6">Kategori Produk</h3>
      <div className="w-full gap-6 grid md:grid-cols-3 grid-cols-1 px-8">
        {siteConfig.categoryProduct.map((item, index) => (
          <Card key={index} className="w-full h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">{item.name}</h4>
              <p className="text-tiny text-white/60">{item.desc}</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/images/card-example-4.jpeg"
            />
          </Card>
        ))}
      </div>
    </>
  );
}
