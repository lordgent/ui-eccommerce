import React from 'react'

const ProductsComponent = ({products}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-2">
    {products.map((product) => (
      <div
        key={product.id}
        className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:border-[#2C742F] transition duration-300"
      >
        <img
          className="w-full h-48 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1">${product.price.toFixed(2)}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.429 8.209 1.193-5.938 5.787 1.399 8.168-7.338-3.859-7.338 3.859 1.399-8.168-5.938-5.787 8.209-1.193z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600 text-sm">
              ({product.rating})
            </span>
          </div>
          <button className="mt-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#2C742F] hover:text-white transition duration-300">
              <img src="/icons/bag-small.svg" alt="icon-bag" />
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductsComponent