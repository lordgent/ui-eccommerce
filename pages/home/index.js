import Layout from "@/components/layouts/layouts";
import React from "react";
import { services, categories, products, promo } from "../../data";
import {
  ServiceComponent,
  CategoryComponent,
  ProductsComponent,
  FlashSaleComponent,
} from "../../components/pages/home";
import ModalDetailProduct from "@/components/modal-product/modal_detail_product";

const HomePage = () => {
  const [showModalDetail, setShowModalDetail] = React.useState(false);
  const [showItemSelected, setShowItemSelected] = React.useState(false);
  const handleAddToCart = (i) => {
    setShowItemSelected(i);
    setShowModalDetail(true);
  };

  return (
    <Layout>
      <div className="flex gap-4">
        <div className="">
          <img
            src="/images/banner-big.png"
            alt="My Image"
            className="sm:h-full"
          />
        </div>
        <div>
          <div className="grid md:gap-6 gap-2">
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
      <ProductsComponent
        products={products}
        handleAddToCart={handleAddToCart}
      />
      <br />
      <FlashSaleComponent promo={promo} />
      <br />

      <ModalDetailProduct
        item={showItemSelected}
        show={showModalDetail}
        handleClose={() => setShowModalDetail(false)}
      />
    </Layout>
  );
};

export default HomePage;
