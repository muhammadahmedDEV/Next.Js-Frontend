import Image from "next/image";
import styles from "../page.module.css";
import { Col, Row, Rate } from "antd";
import { ArrowRightOutlined} from "@ant-design/icons"

export default function FerryDetail(props) {
    return (
        <Row>
            <Col xl={24}>
                <Row className={styles.tileConatiner}>
                    <Col xl={24}>
                        <Row className={styles.headContainer}>
                            <Col xl={10}>
                                <Image
                                    src={props.imgSrc}
                                    alt={props.imgAlt}
                                    width={350}
                                    height={60}
                                />
                            </Col>
                            <Col className={styles.starContainer} xl={14}>
                                <div className={styles.padHeading}>
                                    <h2 className={styles.mobFont}>{props.ferryName}</h2>
                                </div>
                                <div className={styles.justityEnd}>
                                    <Rate allowHalf defaultValue={props.starValue} /><p className={styles.mlStar}>by {props.totalCustomers} customers</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className={styles.descContainer}>
                            <Col className={styles.mbDesc} xl={10}>
                                <p className={styles.flagTitle}>Operates in</p>
                                <div className={styles.justityStart}>
                                    <Image
                                        src={props.imgFlag}
                                        alt={props.flagImgAlt}
                                        width={30}
                                        height={20}
                                    />&nbsp;
                                    <p className={styles.flagDesc}> {props.countryName}</p>
                                   {props.imgFlag2 &&
                                   <>
                                   <Image
                                        src={props.imgFlag2}
                                        alt={props.flagImgAlt2}
                                        width={30}
                                        height={20}
                                    />&nbsp;
                                    <p className={styles.flagDesc}> {props.countryName2}</p>
                                    </>}
                                </div>
                                <br />
                                <div className={styles.justityStart}>
                                    <p className={styles.flagTitle}>Vessels number: </p>
                                    <p className={styles.flagDesc}>&nbsp; {props.vesselsNo}</p>
                                </div>
                                <div className={styles.justityStart}>
                                    <p className={styles.flagTitle}>Ferry types: </p>
                                    <p className={styles.flagDesc}>&nbsp; {props.ferryTypes}</p>
                                </div>
                                <br />
                                <p className={styles.flagTitle}>Popular vessels: </p>
                                <a href="#" className={styles.flagDescLink}>{props.popularVessels} </a>
                            </Col>
                            <Col className={styles.descContainerParag} xl={14}>
                                <p className={styles.flagDescBorder}>
                               {props.desc}
                                </p>
                                <div className={styles.buttonContainer}>
                                   <button className={styles.moreButton}>More about {props.moreDetail} <span className={styles.iconContianer}><ArrowRightOutlined /></span></button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
