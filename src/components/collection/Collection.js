import React, { useEffect, useState } from "react";
import classes from "./Collection.module.css";
import { Row, Col } from "antd";
import cardImg1 from "../../images/cardImg1.png";
import cardImg2 from "../../images/cardImg2.png";
import cardImg3 from "../../images/cardImg3.png";
import axios from "axios";

function Collection({ setData }) {
    const [thumbnails, setThumbnails] = useState([]);
    useEffect(async () => {
        let user = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
            let { _id } = user;
            const {
                data: { message },
            } = await axios.post("http://localhost:3030/api/v1/nft/get-thumbnails", { id: _id });
            setThumbnails(message);
        }
    }, []);
    return (
        <div className={classes.main}>
            <div className={classes.heading}>
                <h1>My Collection</h1>
            </div>
            <div className={classes.wrap}>
                {/* <Row> */}
                {!!thumbnails && <div className={classes.wrapNo}>No Collection Generated</div>}
                {thumbnails?.map((ele) => (
                    // <Col xl={4} lg={8} md={12} sm={24} className={classes.colImg}>
                    <div className={classes.wrapInner}>
                        <img src={ele.thumbnail} alt="" onClick={() => setData(ele.collectionRef)} />
                        <div className={classes.bottomCard}>
                            <img alt="" src={ele.thumbnail} className={classes.smallThumnail} />
                            <div>{ele.collectionName}</div>
                        </div>
                    </div>
                    // </Col>
                ))}
                {/* <Col lg={8} md={12} sm={24} className={classes.colImg}>
                    <img src={cardImg1} alt="" onClick={() => setShowPage("eachcollection")} />
                </Col> */}
                {/* <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg1} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col>
                    <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg2} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col>
                    <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg3} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col>
                    <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg1} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col>
                    <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg2} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col>
                    <Col lg={8} md={12} sm={24} className={classes.colImg}>
                        <img src={cardImg3} alt="" onClick={() => setShowPage("eachcollection")} />
                    </Col> */}
                {/* </Row> */}
            </div>
        </div>
    );
}

export default Collection;
