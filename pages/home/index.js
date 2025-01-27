import Layout from "@/components/layouts/layouts";
import React from "react";
import { services, categories, products, promo } from "../../data";
import {
  ServiceComponent,
  CategoryComponent,
  ProductsComponent,
  FlashSaleComponent,
} from "../../components/pages/home";

const HomePage = () => {
  console.log(services);
  return (
    <Layout>
<div className="flex gap-4">
  <div className="">
    <img src="/images/banner-big.png" alt="My Image"  />
  </div>
  <div className="">
    <div className="grid gap-6 ">
      <img src="/images/banner-small-1.png" alt="My Image" />
      <img src="/images/banner-small-2.png" alt="My Image" />
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
