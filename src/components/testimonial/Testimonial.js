import React from "react";
import classes from "./Testimonial.module.css";
import CarouselComp from "../carousel/CarouselComp";

function Testimonial() {
    return (
        <div className={classes.main}>
            <div>Testimonials</div>
            <div className={classes.card}>
                <CarouselComp data={"test"} />
            </div>
        </div>
    );
}

export default Testimonial;
