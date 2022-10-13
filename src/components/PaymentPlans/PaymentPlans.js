import React from "react";
import classes from "./PaymentPlans.module.css";
import plan1 from "../../images/plan1 1.svg";
import plan2 from "../../images/plan2 1.svg";
import plan3 from "../../images/plan3 1.svg";

const PaymentPlans = () => {
    return (
        <div className={classes.main}>
            <div className={classes.heading}>Payment Plans</div>
            <div className={classes.CardContainer}>
                <div className={classes.card}>
                    <img src={plan1} className={classes.image}></img>
                    <div className={classes.plantype}>Starter Plan</div>
                    <div className={classes.planDis}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </div>
                    <div className={classes.price}>$179</div>
                    <div className={classes.planDis}>Upto</div>
                    <div className={classes.quantity}>1000</div>
                    <div className={classes.planDis}>Assest Generated</div>
                    <button className={classes.btn}>Buy Plan</button>
                </div>
                <div className={classes.card}>
                    <img src={plan2} className={classes.image}></img>
                    <div className={classes.plantype}>Pro Plan</div>
                    <div className={classes.planDis}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </div>
                    <div className={classes.price}>$279</div>
                    <div className={classes.planDis}>Upto</div>
                    <div className={classes.quantity}>5000</div>
                    <div className={classes.planDis}>Assest Generated</div>
                    <button className={classes.btn}>Buy Plan</button>
                </div>
                <div className={classes.card}>
                    <img src={plan3} className={classes.image}></img>
                    <div className={classes.plantype}>EnterPrise Plan</div>
                    <div className={classes.planDis}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </div>
                    <div className={classes.price}>$379</div>
                    <div className={classes.planDis}>Upto</div>
                    <div className={classes.quantity}>10000</div>
                    <div className={classes.planDis}>Assest Generated</div>
                    <button className={classes.btn}>Buy Plan</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPlans;
