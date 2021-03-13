// Components
import AliceCarousel from 'react-alice-carousel'

// Styles
import 'react-alice-carousel/lib/alice-carousel.css'
import './new-arrivals.styles.scss'
import TinyProduct from '../tiny-product/tiny-product.comp'

const NewArrivals = () => {
  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 6 },
  }

  const items = [
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct productImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
  ]

  return (
    <div className="custom-container new-arrivals-wrapper m-top-50">
      <div className="tabs-navigator flex-center-between">
        <div className="title">New Arrivals</div>
        <div className="carousel-navigator"></div>
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
      />
    </div>
  )
}

export default NewArrivals
