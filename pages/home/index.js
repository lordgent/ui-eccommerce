import Layout from "@/components/layouts/layouts";
import React from "react";
import { services, categories, products, promo } from "../../data";
import {
  ServiceComponent,
  CategoryComponent,
  ProductsComponent,
  FlashSaleComponent,
} from "./components";

const HomePage = () => {
  console.log(services);
  return (
    <Layout>
<div className="flex flex-col lg:flex-row gap-4">
  <div className="w-full lg:w-2/3">
    <img src="/images/banner-big.png" alt="My Image" className="w-full h-auto" />
  </div>
  <div className="w-full lg:w-1/3">
    <div className="grid gap-6 sm:grid-cols-2">
      <img src="/images/banner-small-1.png" alt="My Image" className="w-full h-auto" />
      <img src="/images/banner-small-2.png" alt="My Image" className="w-full h-auto" />
    </div>
  </div>
</div>

      <ServiceComponent services={services} />
      <br />
      <h2 className="text-[28px]">Popular Categories</h2>
      <CategoryComponent categories={categories} />
      <br />
      <h2 className="text-[28px]">Popular Products</h2>
      <ProductsComponent products={products} />
      <br />
      <FlashSaleComponent promo={promo} />
      <br />
    </Layout>
  );
};

export default HomePage;
