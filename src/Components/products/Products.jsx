import Product from "../Product/Product"


export default function Products({ products }) {

  return (
    <div className="Product">
      {products.map((elem) => (
        <Product key={elem.id} elem={elem} />
      ))}
    </div>
  );
}
