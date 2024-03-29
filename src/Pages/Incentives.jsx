import { Typography } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/MainNavbar";

const Incentives = () => {
    return (
        <>
            <MainNavbar />

            <Typography variant="h2" marginY={12} paddingY={12} textAlign="center">
                You're on Incentives Page
            </Typography>

            <Footer />
        </>
    );
};

export default Incentives;
