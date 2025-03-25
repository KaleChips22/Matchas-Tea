import { Button, Card, Col, Container, Row } from "react-bootstrap"
import menu from '../menu.json'
import MatchasMenuCard from "../components/MatchasMenuCard"
import { useEffect, useState } from "react"
import { ShoppingCart, X } from "lucide-react"
import CartItem from "../components/CartItem"
import useLocalStorage from "../hooks/useLocalStorage"
import { formatPrice } from "../util"
import toast from "react-hot-toast"

export default function Order() {
  const [cart, setCart] = useLocalStorage('cart', [])

  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = item => {
    setCart(prev => {
      if (prev.find(i => i.name === item.name)) {
        return prev.map(i => {
          if (i.name === item.name) {
            return { ...i, count: i.count + 1 }
          }
          return i
        })
      }
      
      return [...prev, {
        ...item,
        count: 1
      }]
    })
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const tryOpenCart = e => {
    if (!e.target.toString().includes('Div')) return
    setCartOpen(true)
  }

  const getTotal = () => {
    return cart.reduce((prev, curr) => prev + curr.price * curr.count, 0)
  }

  const orderCart = () => {
    toast('Placed your order')
    setCart([])
  }

  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
        <Container>
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
              Order
            </h1>
            {/* <p className="fs-5 mx-auto" style={{ color: "#5f6e5c", maxWidth: "800px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem non sint repudiandae dolore harum.
            </p> */}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <Row className="align-items-begin gap-2">
            <Col xl={8}>
              <Container>
                {menu.categories.map(({ name: categoryName, items }) => (
                  <div key={categoryName} className="mb-5">
                    <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2" style={{ color: "#3a5a34" }}>
                      {categoryName}
                    </h3>
                    <Row className="g-4">
                      {items.map((item, index) => (
                        <Col key={`${categoryName}-${index}`} md={6} lg={4}>
                          <MatchasMenuCard item={item} fullMode buyMode buyClickHandle={() => addToCart(item)} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
                </Container>
              </Col>
            <Col style={{ backgroundColor: "#eae3d7" }} onClick={tryOpenCart} className={`rounded-3 px-4 pb-4 | cart ${cartOpen && 'opened'}`}>
              <div className="mb-4 py-3 d-flex align-items-start justify-content-between">
                <h3 className="fs-3 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                  Your Cart
                </h3>
                <ShoppingCart size={32} style={{ color: "#3a5a34" }} className="d-none d-xl-block" />
                <X size={32} style={{ color: "#3a5a34" }} className="d-block d-xl-none" onClick={() => setCartOpen(false)} />
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                {cart.length ? (
                  <>
                    {cart.map((item, index) => (
                      <CartItem key={index} item={item} setCart={setCart} />
                    ))}
                    <Card className="p-3 w-100 shadow-sm d-flex flex-row align-items-center justify-content-between" style={{ border: "none", backgroundColor: "rgb(248, 245, 240)" }}>
                      <h3 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>Total</h3>
                      <p className="fs-5 fw-medium" style={{ color: "#5a8c51" }}>{ formatPrice(getTotal()) }</p>
                    </Card>
                    <Button className="w-100 rounded-pill fs-5 fw-semibold" style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }} onClick={() => orderCart()}>Order</Button>
                    <Button className="w-100 rounded-pill fs-6 fw-medium" style={{ backgroundColor: "rgb(248, 245, 240)", borderColor: "#5a8c51", color: "#5a8c51" }} onClick={() => setCart([])}>Clear Cart</Button>
                  </>
                ) : (
                  <p className="fs-6 mt-5" style={{ color: "#5f6e5c" }}>There is nothing in your cart...</p>
                )}
              </div>
            </Col>
            </Row>
          </Container>
      </section>
    </>
  )
}