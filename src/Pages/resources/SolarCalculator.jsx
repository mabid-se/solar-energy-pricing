import React from "react";

import ResourcesNavbar from "../../Components/Resources/ResourcesNavbar";
import CalculatorForm from "../../Components/Resources/SolarCalculator/CalculatorForm";
import Footer from "../../Components/Footer";
import { Container } from "@mui/material";

const SolarCalculator = () => {
    return (
        <>
            <ResourcesNavbar />

            <Container sx={{ marginTop: 28, paddingBottom: 5 }}>                
                <CalculatorForm />
            </Container>

            <Footer />
        </>
    );
};

export default SolarCalculator;
