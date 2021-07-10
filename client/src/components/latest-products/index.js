import { useEffect } from "react";

// Components
import TinyProduct from "../tiny-product";
import AliceCarousel from "react-alice-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productActions";

const LatestProducts = () => {
  const {
    data: { products },
  } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const items = products?.map(item => <TinyProduct key={item._id} {...item} />);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  useEffect(() => {
    dispatch(fetchAllProducts("/api/v1/products"));
  }, [dispatch]);

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={5000}
      />
    </div>
  );
};

export default LatestProducts;
