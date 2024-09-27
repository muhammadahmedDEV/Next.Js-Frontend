import Image from "next/image";
import styles from "../page.module.css";
import { Col, Row, Rate } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"

export default function FerryDetail(props) {
    return (
        <Row>
            <Col xl={24}>
                <Row className={styles.tileConatiner}>
                    <Col xl={24}>
                        <Row className={styles.headContainer}>
                            <Col className={styles.starContainer} xs={24} xl={12}>
                                <div className={styles.padHeading}>
                                    <h2 className={styles.mobFont}>{props.ferryName}</h2>
                                </div>
                                <div className={styles.justityEnd}>
                                    <Rate className={styles.starFont} allowHalf defaultValue={props.starValue} /><p className={styles.mlStar}><span className={styles.byFont}>by</span> {props.totalCustomers} customers</p>
                                </div>
                            </Col>
                            <Col className={styles.imgAlignRight} xs={24} xl={12}>
                                <Image
                                    src={props.imgSrc}
                                    alt={props.imgAlt}
                                    width={260}
                                    height={50}
                                />
                            </Col>
                        </Row>
                        <Row className={styles.descContainer}>
                            <Col className={styles.mbDesc} xl={8}>
                                <p className={styles.flagTitle}>Operates in</p>
                                <div className={styles.justityStart}>
                                    <Image
                                        src={props.imgFlag}
                                        alt={props.flagImgAlt}
                                        width={22}
                                        height={15}
                                    />&nbsp;
                                    <p className={styles.flagCountryName}> {props.countryName}</p>&nbsp;
                                    {props.imgFlag2 &&
                                        <>
                                            <Image
                                                src={props.imgFlag2}
                                                alt={props.flagImgAlt2}
                                                width={22}
                                                height={15}
                                            />&nbsp;
                                            <p className={styles.flagCountryName}> {props.countryName2}</p>
                                        </>}
                                </div>
                                <br />
                                <p className={styles.flagTitle}>Vessels number: <span className={styles.flagDesc}>&nbsp; {props.vesselsNo}</span> </p>
                                <p className={styles.flagTitle}>Ferry types: <span className={styles.flagDesc}>&nbsp; {props.ferryTypes}</span></p>
                                <br />
                                <p className={styles.flagTitle}>Popular Vessels: </p>
                                <a href="#" className={styles.flagDescLink}>{props.popularVessels} </a>
                            </Col>
                            <Col className={styles.descContainerParag} xl={16}>
                                <p className={styles.flagDescBorder}>
                                    {props.desc}
                                </p>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.moreButton}>More about {props.ferryName} <span className={styles.iconContianer}><ArrowRightOutlined /></span></button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
