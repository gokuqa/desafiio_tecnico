import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography  variant="h5"sx={{ flexGrow: 1 }}>
                            <Link to={"/"} style={{ textDecoration: "none", color: "#eee" }}>
                                Inventory sistem
                            </Link>
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => { navigate("/new") }}>
                            New Product
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}
