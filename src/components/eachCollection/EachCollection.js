import React, { useEffect, useState } from "react";
import classes from "./EachCollection.module.css";
import { Row, Col } from "antd";
import cardImg1 from "../../images/cardImg1.png";
import nftone from "../../images/nftone.png";
import nfttwo from "../../images/nfttwo.png";
import nftthree from "../../images/nftthree.png";
import axios from "axios";

function EachCollection() {
    const [collectionData, setCollectionData] = useState({});
    const [collectionDataThumb, setCollectionDataThumb] = useState({})
    useEffect(async () => {
        let collection_id = localStorage.getItem('collection_id');
        const { data: { message, Error } } = await axios.post('http://localhost:3030/api/v1/nft/get-collection', { collection_id: collection_id });
        if (!Error) {
            console.log(message)
            setCollectionData(message);
        }

        return () => localStorage.removeItem('collection_id')

    }, [])
    return (
        <div className={classes.main}>
            {collectionData?.collectionName && (
                <div>
                    <div className={classes.heading}>
                        <h1>
                            <span></span>My Collection
                        </h1>
                    </div>
                    <div className={classes.wrap}>
                        {/* <Row> */}
                        <div className={classes.colImg}>
                            {/* <img src={cardImg1} alt="mainpic" /> */}
                            <div className={classes.thumbnail}>
                                <img src={collectionData?.images[0]} alt="mainpic" className={classes.thumbnailimage} />
                                <div className={classes.thumbnailtitle}>
                                    <img src={collectionData?.images[0]} alt="mainpic" className={classes.thumbnailinnerimage} />
                                    <div>{collectionData?.collectionName}</div>
                                </div>
                            </div>
                        </div>
                        {/* <div > */}
                        <div className={classes.inner}>
                            <h2>{collectionData?.collectionName}</h2>
                            <div>
                                {collectionData?.discription}
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </Row> */}
                    </div>
                    <div className={classes.bottomWrap}>
                        <div className={classes.allCollect}>
                            {
                                collectionData?.images?.map((ele, i) => (
                                    <div key={i} lg={3} className={classes.colImg2}>
                                        <img alt="" src={ele} />
                                    </div>
                                ))
                            }
                            {/* <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftone} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nfttwo} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col>
                    <Col lg={3} className={classes.colImg}>
                        <img alt="" src={nftthree} />
                    </Col> */}
                        </div>
                    </div>
                </div>
            )

            }

        </div>
    );
}

export default EachCollection;
