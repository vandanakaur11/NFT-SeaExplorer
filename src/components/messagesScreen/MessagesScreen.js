import React, { useState, useEffect } from "react";
import classes from "./MessagesScreen.module.css";
import search from "../../images/search.svg";
import sendBtn from "../../images/Group 27721.svg";
const MessagesScreen = () => {
    const [msgClicked, setMsgClicked] = useState(false);
    useEffect(() => {
        setMsgClicked(false);
    }, []);
    return (
        <div>
            <div className={classes.forDesktop}>
                <div className={classes.MainHeading}>Messages</div>
                <div className={classes.chatapp}>
                    <div>
                        <div className={classes.contactSection}>
                            <div className={classes.searchDiv}>
                                <img src={search} className={classes.searchIcon} alt=""></img>
                                <input type="text" placeholder="Search Contact" className={classes.searchInput}></input>
                            </div>
                            <div className={classes.contactlist}>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                                <div className={classes.signleContact}>
                                    {/* <div className={classes.Avatar}>JS</div> */}
                                    <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                    <div>
                                        <div className={classes.name}>John Stark</div>
                                        <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.chatContainer}>
                        <div className={classes.InnerContainer}>
                            <div className={classes.chatname}>John Stark</div>
                            <div className={classes.you}>
                                {/* <div className={classes.messageAvatar}>JS</div> */}
                                <img alt="" src={require("../../images/msgPic.png")} className={classes.messageAvatar} />
                                <div className={classes.YoumessageContainer}>
                                    <div className={classes.Youmessage}>Hello i am john. i want to ask something</div>
                                </div>
                            </div>
                            <div className={classes.me}>
                                <div className={classes.YoumessageContainer}>
                                    <div className={classes.MEmessage}>
                                        Hello i am john. i want to ask something ,how i start generating NFT's
                                    </div>
                                </div>
                                {/* <div className={classes.MemessageAvatar}>AM</div> */}
                                <img alt="" src={require("../../images/msgPic.png")} className={classes.MemessageAvatar} />
                            </div>
                        </div>
                        <div className={classes.messageTpyeContainer}>
                            <input type="text" className={classes.typeMessage} placeholder="Type your message here...."></input>
                            <img src={sendBtn} className={classes.sendBtn} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.forMobile}>
                <div className={classes.contactSectionMobile}>
                    {!msgClicked && (
                        <div className={classes.searchDivMobile}>
                            <img src={search} className={classes.searchIcon} alt=""></img>
                            <input type="text" placeholder="Search Contact" className={classes.searchInput}></input>
                        </div>
                    )}
                    {msgClicked && (
                        <div onClick={() => setMsgClicked(false)}>
                            <img
                                alt=""
                                src="https://www.nicepng.com/png/detail/87-875944_download-your-free-app-from-for-purple-back.png"
                                style={{ height: "30px", margin: "10px" }}
                            />
                        </div>
                    )}
                    <div className={classes.contactlistMobile}>
                        {!msgClicked && (
                            <div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.signleContactMobile} onClick={() => setMsgClicked(true)}>
                                    <div className={classes.signleContactInner}>
                                        {/* <div className={classes.Avatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.Avatar} />
                                        <div>
                                            <div className={classes.name}>John Stark</div>
                                            <div className={classes.frontMessage}>Hello i am John, I want to ask</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {msgClicked && (
                            <div className={classes.chatContainerMobile}>
                                <div className={classes.InnerContainerMobile}>
                                    <div className={classes.chatname}>John Stark</div>
                                    <div className={classes.you}>
                                        {/* <div className={classes.messageAvatar}>JS</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.messageAvatar} />
                                        <div className={classes.YoumessageContainer}>
                                            <div className={classes.Youmessage}>Hello i am john. i want to ask something</div>
                                        </div>
                                    </div>
                                    <div className={classes.me}>
                                        <div className={classes.YoumessageContainer}>
                                            <div className={classes.MEmessage}>
                                                Hello i am john. i want to ask something ,how i start generating NFT's
                                            </div>
                                        </div>
                                        {/* <div className={classes.MemessageAvatar}>AM</div> */}
                                        <img alt="" src={require("../../images/msgPic.png")} className={classes.MemessageAvatar} />
                                    </div>
                                </div>
                                <div className={classes.messageTpyeContainerMobile}>
                                    <input type="text" className={classes.typeMessage} placeholder="Type your message here...."></input>
                                    <img src={sendBtn} className={classes.sendBtn} alt=""></img>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesScreen;
