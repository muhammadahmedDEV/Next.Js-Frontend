import { useState } from "react";
import styles from "../page.module.css";
import { Col, Row } from "antd";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import FerryDetail from "../components/ferryDetail";
import FilterSection from "../components/filterSection";

export default function MainPage() {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <Row>
      <Col xl={2} />
      <Col xl={20}>
        <Row className={styles.mainHead}>
          <Col xl={24}>
            <h1>Ferry operators</h1>
            <p className={styles.headPara}>Discover the <span className={styles.headParaBold}>57 ferry operators</span> we work with</p>
          </Col>
          <Col xl={24}>
            <button onClick={() => setShowFilter(true)} className={styles.filterBtn}> <MenuUnfoldOutlined /> Filters</button>
            <select className={styles.sortBtn}>
              <option> Sort by: Reviews</option>
            </select>
            <button className={styles.searchBtn}><SearchOutlined /> Search</button>
          </Col>
        </Row>
        <Row>
          {showFilter &&    // to show and hide filter section
            <>
              <Col xl={6}>
                <FilterSection
                  onClickClose={() => setShowFilter(false)}   //update state to open and close filter section
                  ferryTypeName={"Normal Ferries"}
                  ferryTypeName2={"High-Speed Ferries"}
                />
              </Col>
            </>
          }
          {/* show ferries sections individually by passing data via props */}
          <Col xl={showFilter ? 18 : 24}>
            <FerryDetail
              imgSrc={"/blue-star.png"}
              imgAlt={"blue star image"}
              ferryName={"Blue Star Ferries"}
              totalCustomers={"1,342"}
              imgFlag={"/greece-flag.png"}
              flagImgAlt={"greece flag"}
              countryName={"Greece"}
              vesselsNo={8}
              ferryTypes={"8 normal"}
              moreDetail={"Blue Star Ferries"}
              starValue={4.5}
              popularVessels={"Blue Star Delos, Blue Star Naxos"}
              desc={`Blue Star Ferries is currently the biggest ferry company in Greece.
              It is a member of Attica Group, one of the most significant companies in the Greek shipping industry.
              Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ...`}
            />
            <FerryDetail
              imgSrc={"/seajets.png"}
              imgAlt={"sea jet image"}
              ferryName={"Seajets"}
              totalCustomers={"2,467"}
              imgFlag={"/greece-flag.png"}
              flagImgAlt={"greece flag"}
              countryName={"Greece"}
              vesselsNo={17}
              ferryTypes={"10 normal and 7 high-speed ferries"}
              moreDetail={"Blue Star Ferries"}
              starValue={2.5}
              popularVessels={"WorldChampion jet, Seajet 2"}
              desc={`Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services.
              The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.
              Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion)`}
            />
            <FerryDetail
              imgSrc={"/anek.png"}
              imgAlt={"anek image"}
              ferryName={"Anek-Superfast"}
              totalCustomers={667}
              imgFlag={"/greece-flag.png"}
              flagImgAlt={"greece flag"}
              countryName={"Greece"}
              imgFlag2={"/itlay.png"}
              flagImgAlt2={"itlay flag"}
              countryName2={"Itlay"}
              vesselsNo={6}
              ferryTypes={"Normal ferries"}
              moreDetail={"Blue Star Ferries"}
              starValue={2.5}
              popularVessels={"Superfast Xll, Superfast Xl"}
              desc={`Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries.
              The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology.
              The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu`}
            />
          </Col>
        </Row>
      </Col>
      <Col xl={2} />
    </Row>
  );
}
