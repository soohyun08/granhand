import { Navigate, useParams } from "react-router-dom";
import { getItemCategory } from "../../assets";
import "../../pages/shop.scss";

function CategorizedItem() {
  const path = process.env.PUBLIC_URL;

  const { itemCategory } = useParams();

  const category = getItemCategory(itemCategory);
  console.log(category);

  if (!category) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="shop">
      {/*  <AsideBar />

      <article className="mainContent">
        {MultiPerfumeItems.map((item) => (
          <section key={item.id}>
            <Link to={`/productList/${item.id}`}>
              <img
                src={`${path}/images/shop/${item.imgURL}.jpg`}
                alt={item.name}
              />
              <ul className="itemName">
                <li>{item.name}</li>
                <li>{item.koName}</li>
              </ul>
              <ul className="itemDetail">
                <li>{item.price}</li>
                <li>{item.capacity}</li>
              </ul>
              <div className="stock">{item.stock}</div>
            </Link>
          </section>
        ))}
      </article> */}
    </div>
  );
}

export default CategorizedItem;
