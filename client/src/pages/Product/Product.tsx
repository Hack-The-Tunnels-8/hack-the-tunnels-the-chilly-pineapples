import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Product.style.scss";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProduct(id);
      if (json.error !== null) {
        setMessage(json.error);
        return;
      }

      setProduct(json.data.product);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="product-page">
        {message && <p>{message}</p>}
        {product && (
          <>
            <table >
              <tr>
                <td  className = "product">
                   <img src="/public/book.jpg" alt="pineapple" height="500px" width="500px"/>
                </td>

                <td>
                  <div className="text">
                  <h3>Title: pineapple </h3>
                  <p>Cost: $20{}</p>
                  <p>Description: yellow, {product.description}</p>
                  </div>
                </td>
              </tr>

              
            </table>

            

            <div className="product-page__product">
              <h3>Title: knife </h3>
              <p>ID: {id}</p>
              <p>Description: {product.description}</p>
            </div>
            <Link to={`/checkout/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </>
        )}
      </div>
    </Page>
  );
}

export default Product;
