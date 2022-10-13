import React, { useContext, useEffect, useState } from "react";
import classes from "./GenerateNFT.module.css";
import { Row, Col } from "antd";
import carbonAdd from "../../images/carbon_add-filled.png";
import question from "../../images/question-circle-outlined.png";
import ModalComp from "../modal/ModalComp";
import UploadComp from "../uploadComp/UploadComp";
import { useForm } from 'react-hook-form';
import { AppContext } from "../../contexrStore/Store";
import axios from "axios";
function GenerateNFT({ showPage }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [layers, setLayers] = useState([]);
    const { appState, applyAction } = useContext(AppContext);
    let nftcollect = "nftcollect";



    const onSubmit = async (form) => {
        if (appState.layers.length) {
            let userId = localStorage.getItem('user');
            userId = JSON.parse(userId);
            userId = userId._id
            const request = {
                ...form,
                userId,
                Layers: appState.layers

            }

            try {
                const genertare = await axios.post('http://localhost:3030/api/v1/nft/generate', request);
                showPage("collection");
            } catch (error) {

            }

        }
    }


    const addLayer = () => {
        const layerName = document.getElementById('layerName').value;
        document.getElementById('layerName').value = '';
        if (layerName) {
            let newLayer = appState.layers;
            console.log(newLayer)
            newLayer.push({ name: layerName, images: [] })
            // setLayers([...newLayer]);
            applyAction('add-layer', newLayer);
        }
    }


    const selectLayer = (layerName) => {
        applyAction('select-action', layerName);
    }


    useEffect(() => {
        return () => applyAction('discard-generate-nft');
    }, [])
    return (
        <div className={classes.main}>
            <div className={classes.heading}>
                <h1>Generate NFT</h1>
            </div>
            <div className={classes.mainWrap}>
                <Row>
                    <Col xxl={6} xl={8} lg={24} md={24} sm={24}>

                        <div className={classes.wrap}>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <div className={classes.nameCont}>
                                    <h3>Project Name</h3>
                                    <input type="text" placeholder="Enter Name" {...register("projectName", { required: true })} />
                                </div>
                                <div className={classes.descCont}>
                                    <h3>Project Description</h3>
                                    <textarea placeholder="Enter Project Description" {...register("discription", { required: true })} />
                                </div>
                                <div className={classes.sizeCont}>
                                    <h3>
                                        Collection Size{" "}
                                        <span>
                                            <img src={question} alt="" />
                                        </span>
                                    </h3>
                                    <input placeholder="1" {...register("collectionSize", { required: true })} />
                                </div>
                                <div className={classes.dimensionCont}>
                                    <h3>
                                        Dimension{" "}
                                        <span>
                                            <img src={question} alt="" />
                                        </span>
                                    </h3>
                                    <div>
                                        <input placeholder="300" {...register("width", { required: true })} />
                                        <input placeholder="200" {...register("height", { required: true })} />
                                    </div>
                                </div>
                                <div className={classes.layerCont}>
                                    <h3>Layers</h3>
                                    {
                                        appState.layers?.map((e) => (
                                            <div className={classes.layerContInner} onClick={() => selectLayer(e.name)}>
                                                <div id={e.name} >{e.name}</div>
                                                <div>100%</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* <div className={classes.layerCont}>
                                    <h3>Layers</h3>
                                    <div className={classes.layerContInner}>
                                        <div>Body</div>
                                        <div>100%</div>
                                    </div>
                                </div> */}
                                <div className={classes.newLayerCont}>
                                    <input placeholder="New Layer" id="layerName" />
                                    <img alt="" src={carbonAdd} onClick={addLayer} />
                                </div>
                                <div className={classes.btnCont}>
                                    <div>Preview</div>
                                    {/* <ModalComp chooseData={nftcollect} /> */}

                                    <input type='submit' value="Generate" />

                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col xxl={18} xl={16} lg={24} md={24} sm={24}>
                        <div className={classes.topBtnDiv}>
                            <div className={classes.topBtnDivInner}>
                                <div>Layer: {appState.selectedLayer}</div>
                                <div>Images:0</div>
                            </div>
                            <div className={classes.previewBtn}>Preview All</div>
                        </div>
                        <div className={classes.upload}>
                            <UploadComp />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default GenerateNFT;
