import "./allproducts.css";
import useAllProducts from "./useAllProducts";
const Product = ({ product }) => {
  const { onDelete, onEdit, onViewProduct, restoreProduct } = useAllProducts();

  return (
    <div className="product">
      <div className="product-data-container">
        <div className="product-data">
          <input type="checkbox" name="productimage" />
        </div>
        <div className="product-data">
          <img
            className="product-image"
            src={`/product-uploads/${product.product_image}`}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <p className="product-data">{product.product_name}</p>
        <p className="product-data">{product.product_sku}</p>
        <p className="product-data">{product.product_category}</p>
        <p className="product-data">${product.product_price}</p>
        <p className="product-data">{product.product_stock}</p>
        <p className="product-data" style={{ fontSize: ".9rem" }}>
          {product.createdAt}
        </p>
      </div>
      <div className="product-options">
        <p className="product-options-icons" onClick={() => onEdit(product)}>
          <i className="far fa-edit fa-sm icon"></i>
        </p>
        <p
          className="product-options-icons"
          onClick={() => onDelete(product.id)}
        >
          <i className="fas fa-trash fa-sm icon"></i>
        </p>
        <p
          className="product-options-icons"
          onClick={() => onViewProduct(product)}
        >
          <i className="far fa-eye"></i>
        </p>
        <p
          className="product-options-icons"
          onClick={() => restoreProduct(product.id)}
        >
          <i class="fas fa-redo"></i>
        </p>
      </div>
    </div>
  );
};

export default Product;
