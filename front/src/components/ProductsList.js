import { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography } from "@mui/material";
export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [cantidad, setCantidad] = useState([]);
    const loadProducts = async () => {
        const response = await fetch("http://localhost:4000/")
        const data = await response.json()
        setProducts(data);
    }
    useEffect(() => {
        loadProducts()
    }, [])
    const handleDelete = async (sku) => {
        await fetch(`http://localhost:4000/${sku}`, {
            method: "DELETE",
        });
        setProducts(products.filter((product) => product.cantidad > 0));
        setCantidad(products.filter((product) =>{
        if (product.sku == sku) {
            product.cantidad = product.cantidad - 1

        }}
        ))
    }
    return (
        <>
            <h1>Products in inventory</h1>
            {products.map((product) => (
                <Card style={{
                    marginBottom: ".7rem",
                    backgroundColor: "#eee",
                }}>
                    <CardContent style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <div>

                            <Typography>
                                Title:  {product.title}
                            </Typography>
                            <Typography>
                                Price ${product.precio}
                            </Typography>
                            <Typography>
                                amount: {product.cantidad}
                            </Typography>
                        </div>
                        <div>

                            <Button variant="contained"
                                color="warning"
                                onClick={() => handleDelete(product.sku)}
                                style={{ marginLeft: ".5rem" }}>
                                Agregar
                            </Button>
                        </div>
                    </CardContent>
                </Card >

            ))
            }

        </>


    )
}
