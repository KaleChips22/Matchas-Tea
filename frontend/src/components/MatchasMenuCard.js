import React, { Fragment } from 'react'
import { Card, Image, Badge, Button } from 'react-bootstrap'
import { formatPrice } from '../util'
import { Flame, Snowflake, WheatOff } from 'lucide-react'

export default function MatchasMenuCard({ item, fullMode, buyMode, buyClickHandle }) {

    const iconKey = {
        'hot': <Flame size={20} />,
        'gluten-free': <WheatOff size={20} />,
        'cold': <Snowflake size={20} />
    }

    const iconColorKey = {
        'hot': 'bg-danger',
        'cold': 'bg-primary',
        'gluten-free': 'bg-warning'
    }

    const PriceWrapper = buyMode ? Button : Fragment

    return (
        <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="position-relative" style={{ height: "200px" }}>
                <Image
                    src={item.image_src}
                    alt={item.name}
                    fill
                    className="object-fit-cover w-100 h-100 position-absolute"
                />
                {fullMode || (
                    <Badge className="position-absolute top-0 start-0 m-3 rounded-pill bg-success">
                        {item.category}
                    </Badge>
                )}
                {fullMode && (
                    <div className="d-flex position-absolute top-0 start-0 m-3 gap-1">
                        {item.icons.map(icon => (
                            <Badge key={icon} className={`rounded-pill ${iconColorKey[icon]}`}>
                                {iconKey[icon]}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
            <Card.Body className="d-flex flex-column">
                <div className={`d-flex justify-content-between align-items-center ${fullMode && 'border-bottom pb-3 mb-2'}`}>
                    <h3 className="fs-5 fw-bold mb-0" style={{ color: "#3a5a34" }}>
                        {item.name}
                    </h3>
                    <PriceWrapper className='rounded-pill color' style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }} onClick={buyMode ? buyClickHandle : () => {}}>
                        <span className="fs-5 fw-medium" style={{ color: buyMode ? 'white' : "#5a8c51" }}>
                            {formatPrice(item.price)}
                        </span>
                    </PriceWrapper>
                </div>
                {fullMode && (
                    <p className="m-0 p-0 text-black-50 small">
                        {item.description}
                        
                        {item.allergens.length > 0 && (
                            <>
                            <br /><br />
                            Allergens: {item.allergens.join(", ")}
                            </>
                        )}
                    </p>
                )}
            </Card.Body>
        </Card>
    )
}
