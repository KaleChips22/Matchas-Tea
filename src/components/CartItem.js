import { Badge, Card } from "react-bootstrap"
import { formatPrice } from "../util"

const CartItem = ({ item, setCart }) => {
  const incItem = () => {
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

  const decItem = () => {
    setCart(prev => {
      if (prev.find(i => i.name === item.name)) {
        return prev.map(i => {
          if (i.name === item.name) {
            return { ...i, count: i.count - 1 }
          }
          return i
        }).filter(i => i.count > 0)
      }

      return [...prev, {
        ...item,
        count: 1
      }]
    })
  }

  return (
    <Card className="p-3 w-100 shadow-sm" style={{ border: "none", backgroundColor: "rgb(248, 245, 240)" }}>
      <div className="d-flex position-relative mb-2">
        {item.count && (
          <Badge className="rounded-pill bg-success position-absolute bottom-0 left-0 p-0 d-flex flex-row gap-2 align-items-center justify-content-center overflow-hidden fs-6">
            <div className="p-2" style={{ backgroundColor: "#ffffff33", cursor: "pointer" }} onClick={decItem}>-</div>
            <div>
              {item.count}
            </div>
            <div className="p-2" style={{ backgroundColor: "#ffffff33", cursor: "pointer" }} onClick={incItem}>+</div>
          </Badge>
        )}
        <img src={item.image_src} alt={item.name} style={{ aspectRatio: "1 / 1", maxWidth: "30%" }} />
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>
              {item.name}
            </h4>
            <p className="fs-6 fw-medium" style={{ color: "rgb(95, 110, 92)" }}>{formatPrice(item.price)}</p>
          </div>
          <p className="fs-6 fw-medium" style={{ color: "rgb(95, 110, 92)" }}>{item.description}</p>
        </div>
      </div>
      {item.flavors ? (
        <>
          <div className="my-2 fw-semibold fs-5" style={{ color: "#3a5a34" }}>
            More Options:
          </div>
          <div className="fs-6 fw-medium ms-4" style={{ color: "rgb(95, 110, 92)" }}>
            {item.flavors.map(f => (
              <div className="d-flex flex-row gap-2">
                <input type="checkbox" key={f} value={f} id={`${item.name}-${f}`} style={{ accentColor: "#3a5a34" }} />
                <label htmlFor={`${item.name}-${f}`}>{f}</label>
              </div>
            ))}
          </div>
        </>
      ) : <></> }
    </Card>
  )
}
export default CartItem