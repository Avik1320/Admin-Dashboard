import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../Theme";
import { FiSettings } from "react-icons/Fi";
import {
    RiChat1Line,
    RiChat3Line,
    RiFileSettingsFill,
    RiFolderSettingsFill,
    RiListSettingsLine,
    RiMailSettingsFill,
    RiMailSettingsLine,
    RiSettingsLine,
    RiToolsLine,
    RiTwitterFill,
    RiTwitterLine,
    RiUserSettingsLine,
} from "react-icons/Ri";
import {
    AiOutlineEdit,
    AiOutlineGroup,
    AiOutlineLike,
    AiOutlineUserSwitch,
    AiOutlineUsergroupAdd,
} from "react-icons/Ai";
import { GiSettingsKnobs } from "react-icons/Gi";
import { FaDribbble, FaInstagram, FaWhatsapp } from "react-icons/Fa";
import Card from "../../CardTemplate/Card";
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import Analytics from "../../AnalyticsTemplate/Analytics";
import img from "../../../assets/illustration.png";
import Image1 from "../../../assets/user-pic.jpg";
import CircularProgress from "../../CircularProgress/CircularProgress";

const Content = () => {
    const { DarkTheme } = useContext(ThemeContext);

    const [value_i] = useState(Math.floor(Math.random() * 100));
    const [value_i_offset] = useState(315 - (value_i / 100) * 315);

    const [value_ii] = useState(Math.floor(Math.random() * 100));
    const [value_ii_offset] = useState(315 - (value_i / 100) * 315);

    return (
        <div className={`content-part ${DarkTheme && "dark"}`}>
            <div className="row header">
                <FiSettings className="cog" />
                <h1 className="txt-head">Current Notifications</h1>
                <div className="divider"></div>

                <div className="notifications">
                    <RiChat1Line />
                    <RiChat1Line />
                    <RiChat1Line />
                    <RiChat1Line />
                    <RiChat1Line />
                </div>
            </div>

            <div className="row header">
                <Card Icon={AiOutlineUsergroupAdd} title="Followers" value="None :)" />
                <Card Icon={RiChat1Line} title="Messages" value="+ 0" />
                <Card Icon={AiOutlineLike} title="Likes" value="+ 0 :)" />
                <Card Icon={IoCashOutline} title="Earning" value="$ 0.0" />
            </div>

            <span className="section-title">Breif Overview</span>

            <div className="row square">
                <Analytics chart_i />
            </div>

            <div className="row square">
                <Analytics chart_ii />
            </div>

            <div className="row square">
                <Analytics chart_iii />
            </div>

            <div className="row square">
                <Analytics title="New Followers" value="+ 0" illustration={img} />
            </div>

            <span className="section-title">Analytic Tools</span>

            <div className="row tall-square">
                <span className="tools-section">Frequently Used</span>

                <div className="tools">
                    <Card Icon={RiToolsLine} />
                    <Card Icon={IoSettingsOutline} />
                    <Card Icon={AiOutlineUsergroupAdd} />
                    <Card Icon={RiToolsLine} />
                    <Card Icon={RiMailSettingsLine} />
                    <Card Icon={RiListSettingsLine} />
                </div>
                <div className="divider"></div>

                <span className="tools-section">More Tools</span>

                <div className="tools">
                    <Card Icon={RiUserSettingsLine} />
                    <Card Icon={RiToolsLine} />
                    <Card Icon={AiOutlineUsergroupAdd} />
                    <Card Icon={RiToolsLine} />
                    <Card Icon={AiOutlineUsergroupAdd} />
                    <Card Icon={RiListSettingsLine} />
                    <Card Icon={RiToolsLine} />
                    <Card Icon={AiOutlineUsergroupAdd} />
                    <Card Icon={RiMailSettingsLine} />
                </div>

                <div className="divider"></div>

                <div className="tools-section">Advanced Tools</div>

                <div className="tools">
                    <Card Icon={RiFolderSettingsFill} />
                    <Card Icon={RiFileSettingsFill} />
                    <Card Icon={RiSettingsLine} />
                </div>
            </div>
            <div className="row tall-square inv-bg">
                <header className="tall-square-header">
                    <div className="left">
                        <AiOutlineEdit className="icon" />
                    </div>

                    <div className="right">
                        <GiSettingsKnobs className="icon" />
                        <RiChat3Line className="icon" />
                        <AiOutlineUserSwitch className="icon" />
                    </div>
                </header>

                <div className="admin">
                    <div className="profile">
                        <img
                            src={Image1}
                            alt=""
                            className="profile-img"
                            style={{ width: 100, borderRadius: 50 }}
                        />
                    </div>

                    <div className="info">
                        <h2 className="admin-name">Creative Ambition</h2>
                        <span className="admin-about">Full Stack Developer</span>
                    </div>

                    <div className="admin-socials">
                        <Card Icon={FaWhatsapp} />
                        <Card Icon={FaInstagram} />
                        <Card Icon={RiTwitterLine} />
                        <Card Icon={FaDribbble} />
                    </div>
                </div>
            </div>

            <div className="row side-rect">
                <section>
                    <CircularProgress
                        color="#810551"
                        value={value_i}
                        offset={value_i_offset}
                    />
                    <div className="summary">
                        <h2 className="summary-title">Performance</h2>
                        <span className="summary-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aspernatur voluptatibus quam adipisci error facere! Ipsam in vitae
                            expedita omnis quasi.
                        </span>
                    </div>
                </section>
            </div>
            <div className="row side-rect">
                <section>
                    <CircularProgress
                        color="#810551"
                        value={value_ii}
                        offset={value_ii_offset}
                    />
                    <div className="more-details">
                        <h1 className="title"> Detailed Analysis</h1>
                        <span className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                            ipsam quis perspiciatis officiis illo. Magni voluptas molestias
                            iure, adipisci, consectetur quia sint cum earum odit architecto
                            provident nulla. Ipsum, reprehenderit!
                        </span>
                    </div>
                </section>
            </div>
            <div className="row side-rect">
                <section>
                    <CircularProgress
                        color="#810551"
                        value={value_ii}
                        offset={value_ii_offset}
                    />
                    <div className="more-details">
                        <h1 className="title"> Detailed Analysis</h1>
                        <span className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                            ipsam quis perspiciatis officiis illo. Magni voluptas molestias
                            iure, adipisci, consectetur quia sint cum earum odit architecto
                            provident nulla. Ipsum, reprehenderit!
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Content;
