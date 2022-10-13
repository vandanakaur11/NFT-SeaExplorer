import React from "react";
import classes from "./FeaturedProject.module.css";
import CarouselComp from "../carousel/CarouselComp";
// import "react-multi-carousel/lib/styles.css";
import downtriangle from "../../images/downtriangle.png";
import uptriangle from "../../images/uptriangle.png";

function FeaturedProject() {
    return (
        <div className={classes.wrapper}>
            <img src={uptriangle} style={{ width: "100%" }} alt="" className={classes.cutImg} />
            <div className={classes.mainWrap}>
                <div className={classes.main}>
                    <h1>Featured Projects</h1>
                    <div className={classes.card}>
                        <CarouselComp data={"fp"} />
                    </div>
                </div>
            </div>
            <img src={downtriangle} style={{ width: "100%" }} alt="" className={classes.cutImg} />
        </div>
    );
}

export default FeaturedProject;
