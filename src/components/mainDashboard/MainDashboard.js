import React, { useState } from "react";
import { Row, Col } from "antd";
import classes from "./MainDashboard.module.css";
import smallBottomArr from "../../images/smallBottomArr.png";
import BarChart from "../barChart/BarChart";
import PieChart from "../pieChart/PieChart";
import wavingHand from "../../images/waving-hand.png";

function MainDashboard() {
    const [isChosed, setIsChosed] = useState("analyze");
    const handleChosed = (val) => {
        if (val === "analyze") {
            setIsChosed(val);
        }
        if (val === "campaign") {
            setIsChosed(val);
        }
        if (val === "configure") {
            setIsChosed(val);
        }
        if (val === "customize") {
            setIsChosed(val);
        }
        if (val === "research") {
            setIsChosed(val);
        }
        if (val === "inspect") {
            setIsChosed(val);
        }
    };

    return (
        <div>
            <div className={classes.main}>
                {/* <div className={classes.topWrap}>
                    <div className={classes.innerDivLeft}>
                        <div className={isChosed === "analyze" && classes.chosedVal} onClick={() => handleChosed("analyze")}>
                            Analyze
                        </div>
                        <div className={isChosed === "campaign" && classes.chosedVal} onClick={() => handleChosed("campaign")}>
                            My campaigns
                        </div>
                        <div className={isChosed === "configure" && classes.chosedVal} onClick={() => handleChosed("configure")}>
                            Configure
                        </div>
                        <div className={isChosed === "customize" && classes.chosedVal} onClick={() => handleChosed("customize")}>
                            Customize
                        </div>
                        <div className={isChosed === "research" && classes.chosedVal} onClick={() => handleChosed("research")}>
                            Research
                        </div>
                        <div className={isChosed === "inspect" && classes.chosedVal} onClick={() => handleChosed("inspect")}>
                            Inspect
                        </div>
                    </div>
                    <div className={classes.innerDivRight}>
                        <div>Aug 21, 2016</div>
                        <div>Sep 21 2016</div>
                        <img alt="" src={smallBottomArr} />
                    </div>
                </div> */}
                <div className={classes.mainHeading}>Dashboard</div>
                <div className={classes.wrapText}>
                    <div className={classes.wrapTextInner}>
                        <img src={wavingHand} alt="" />
                        <div>Hey Anddy!</div>
                    </div>
                    <div className={classes.textInner}>You earned NGN 3 ,000,000 this month.</div>
                </div>
                <div className={classes.statsWrap}>
                    <Row>
                        <Col xxl={8} xl={12} lg={24} md={24} sm={24} className={classes.columnDiv}>
                            <div className={classes.chartContainer}>
                                <PieChart />
                            </div>
                        </Col>
                        <Col xxl={8} xl={12} lg={24} md={24} sm={24} className={classes.columnDiv}>
                            <div className={classes.tableWrap}>
                                <div className={classes.tableContent}>
                                    <div className={classes.headCont}>Type of Action</div>
                                    <div className={classes.headCont}>Value Two</div>
                                    <div className={classes.headCont}>Value One</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Videos Played</div>
                                    <div>10</div>
                                    <div>10</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Type of Action</div>
                                    <div>1000</div>
                                    <div>1000</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Type of Action</div>
                                    <div>100</div>
                                    <div>100</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Type of Action</div>
                                    <div>1000</div>
                                    <div>10000</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div className={classes.total}>Type of Action</div>
                                    <div className={classes.total}>2000</div>
                                    <div className={classes.total}>12210</div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={8} xl={12} lg={24} md={24} sm={24} className={classes.columnDiv}>
                            <div className={classes.tableWrap}>
                                <div className={classes.tableContent}>
                                    <div className={classes.headCont}>Last Purchased</div>
                                    <div className={classes.headCont}>When</div>
                                    <div className={classes.headCont}>Earned</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Mockups for Figma</div>
                                    <div>16 mins</div>
                                    <div>$ 0</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Material Icons Set</div>
                                    <div>2 hours</div>
                                    <div>$ 14.40</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Material Design System</div>
                                    <div>1 day</div>
                                    <div>$ 68.00</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>Material Desktop System</div>
                                    <div>1 day</div>
                                    <div>$ 128.50</div>
                                </div>
                                <div className={classes.tableContent}>
                                    <div>iOS toolkit for Figma</div>
                                    <div>2 days</div>
                                    <div>$ 58.00</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default MainDashboard;
