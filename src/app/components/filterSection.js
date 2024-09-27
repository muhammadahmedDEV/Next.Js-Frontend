import styles from "../page.module.css";
import { Col, Row, Select } from "antd";
import Image from "next/image";
import { CloseOutlined, AimOutlined } from "@ant-design/icons"

export default function FilterSection(props) {
    return (
        <Row>
            <Col xl={24}>
                <Row className={styles.tileConatiner}>
                    <Col className={styles.filterPad} xs={12} xl={12}>
                        <h2>Filters</h2>
                    </Col>
                    <Col className={styles.filterClose} xs={12} xl={12}>
                        <CloseOutlined onClick={props.onClickClose} />
                    </Col>
                    <Col className={styles.filterPadOperat} xs={24} xl={24}>
                        <h4>Operating in</h4>
                        <Select
                            defaultValue={{
                                value: 'greece ',
                                label: (<><AimOutlined className={styles.marginRightIcon} /> Select a country</>),
                            }}
                            className={styles.selectCountryWidth}
                            options={[
                                {
                                    value: 'greece',
                                    label: (<><Image src={"/greece-flag.png"} alt={"greece flag"} width={22} height={15} /> Greece</>),
                                },
                                {
                                    value: 'itlay',
                                    label: (<><Image src={"/itlay.png"} alt={"itlay flag"} width={22} height={15} /> Itlay</>),
                                }
                            ]}
                        />
                    </Col>
                    <Col className={styles.filterPad} xl={24}>
                        <h4>Ferry Types</h4>
                        <div className={styles.flexCenter}>
                            <input className={styles.checkFery} type="checkbox" id="normal" name="terms" />
                            <label for="normal">{props.ferryTypeName}</label>
                        </div>
                        {props.ferryTypeName2 &&
                            <div className={styles.flexCenter}>
                                <input className={styles.checkFery} type="checkbox" id="high" name="terms" />
                                <label for="high">{props.ferryTypeName2}</label>
                            </div>}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
