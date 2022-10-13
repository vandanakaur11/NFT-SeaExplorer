import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./CarouselComp.module.css";
import cardImg1 from "../../images/cardImg1.png";
import cardImg2 from "../../images/cardImg2.png";
import cardImg3 from "../../images/cardImg3.png";
import Sean from "../../images/Sean.png";

const Data = [{ name: cardImg1 }, { name: cardImg2 }, { name: cardImg3 }, { name: cardImg1 }, { name: cardImg2 }, { name: cardImg3 }];

const Data2 = [
    {
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetodio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur tempus urna at turpis condimentum lobortis.",
        name: "John Cary",
        photo: Sean,
    },
    {
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetodio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur tempus urna at turpis condimentum lobortis.",
        name: "John Cary",
        photo: Sean,
    },
    {
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetodio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur tempus urna at turpis condimentum lobortis.",
        name: "John Cary",
        photo: Sean,
    },
    {
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetodio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur tempus urna at turpis condimentum lobortis.",
        name: "John Cary",
        photo: Sean,
    },
    {
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquetodio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur tempus urna at turpis condimentum lobortis.",
        name: "John Cary",
        photo: Sean,
    },
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function CarouselComp({ data }) {
    return (
        <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]} infinite={true}>
            {data === "fp" &&
                Data?.map((data, i) => (
                    <div key={i} className={classes.card}>
                        <img key={i} src={data.name} alt="" />
                    </div>
                ))}
            {data === "test" &&
                Data2?.map((data, i) => (
                    <div key={i} className={classes.testimonial}>
                        <div className={classes.testimonialText}>{data.text}</div>
                        <div className={classes.wrap}>
                            <img src={data.photo} alt="" />
                            <div className={classes.testimonialName}>{data.name}</div>
                        </div>
                    </div>
                ))}
        </Carousel>
    );
}

export default CarouselComp;
