import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";

import { useState, useEffect } from "react";

export default function NewProduct() {

    const [product, setProduct] = useState({
        title: "",
        precio: 0,
        cantidad: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            mode: 'cors'
        });
        const data = await response
        console.log(product)
        console.log(data);
    }
    const handleOnChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"

        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: "#1e272e",
                        padding: "1rem"
                    }}
                >
                    <Typography variant="5" textAlign="center" color="white">
                        New Product
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant="filled"
                                label="Product Name"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0"
                                }}
                                name="title"
                                onChange={
                                    handleOnChange
                                }
                                inputProps={
                                    { style: { color: "white" } }
                                }
                                InputLabelProps={
                                    { style: { color: "white" } }
                                }
                            >

                            </TextField>
                            <TextField
                                variant="filled"
                                label="amount"
                                type="number"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0"
                                }}
                                name="precio"

                                onChange={
                                    handleOnChange
                                }
                                inputProps={
                                    { style: { color: "white" } }
                                }
                                InputLabelProps={
                                    { style: { color: "white" } }
                                }>
                            </TextField>

                            <TextField
                                variant="filled"
                                label="price $"
                                type="number"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0"
                                }}
                                name="cantidad"

                                onChange={
                                    handleOnChange
                                }
                                inputProps={
                                    { style: { color: "white" } }
                                }
                                InputLabelProps={
                                    { style: { color: "white" } }
                                }></TextField>

                            <Button variant="contained" color="primary" type="submit">
                                ADD
                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
