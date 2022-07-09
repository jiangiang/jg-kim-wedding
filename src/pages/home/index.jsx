import React from "react";
import { Row, Col, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ICalendarLink from "react-icalendar-link";

import AttendanceForm from "./AttendanceForm";
import image from "./image.jpg";
import "./style.css";

const Home = () => {
  const onFinish = (input) => {
    console.log(input);
    // save into database
  };

  const event = {
    title: "My Title",
    description: "My Description",
    startTime: "2018-10-07T10:30:00+10:00",
    endTime: "2018-10-07T12:00:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia",
    attendees: ["Hello World <hello@world.com>", "Hey <hey@test.com>"],
  };

  return (
    <>
      <Row>
        <Col
          span={8}
          style={{
            textAlign: "center",
            minHeight: "400px",
            backgroundColor: "#FFFDF6",
          }}
        >
          {/* Jian Giang and Kimberly Wedding Invitation */}
          <Image
            src={image}
            style={{ width: "auto", height: "400px", display: "block" }}
          />
        </Col>
        <Col
          span={16}
          style={{
            textAlign: "center",
            minHeight: "400px",
            backgroundColor: "#FFFDF6",
          }}
        >
          <div className="main-title">Jian Giang and Kimberly</div>
          <div className="main-title-2">Wedding Invitation</div>
          <div className="main-title-detail">
            <Row
              style={{ minHeight: "150px", margin: "30px", lineHeight: "30px" }}
            >
              <Col offset={3} span={1} style={{marginTop: '6px'}}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="3x"
                  className="info-icon"
                />
              </Col>
              <Col span={6} style={{textAlign: 'left', paddingLeft: '15px'}}>
                <div className="detail-font-main">18 December 2022</div>
                <div className="detail-font">Cocktail: 6pm</div>
                <div className="detail-font">Dinner: 7pm</div>
                <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
              </Col>
              <Col offset={2} span={1}>
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  size="3x"
                  className="info-icon"
                />
              </Col>
              <Col span={8} style={{textAlign: 'left', paddingLeft: '15px'}}>
                <div className="detail-font-main">
                  Pullman Kuala Lumpur City Centre - Hotel & Residence
                </div>
                <div className="detail-font">Pullman 3 - 8, Level 3</div>
                <div>
                  <a href="#direction">Direction</a>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/* <Row style={{ minHeight: "150px", margin: "30px", lineHeight: "30px" }}>
        <Col offset={4} span={1}>
          <FontAwesomeIcon icon={faCalendar} size="3x" className="info-icon" />
        </Col>
        <Col span={6}>
          <div className="detail-font">18 Dec 2022</div>
          <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
        </Col>
        <Col offset={4} span={1}>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            size="3x"
            className="info-icon"
          />
        </Col>
        <Col span={6}>
          <div className="detail-font">Pullman Kuala Lumpur City Centre Hotel & Residence</div>
          <div className="detail-font">Pullman 3 - 8, Level 3</div>
          <div>
            <a href="#direction">Direction</a>
          </div>
        </Col>
      </Row> */}
      <Row style={{ textAlign: "center" }}>
        <Col span={12}>
          <Image
            src="https://thepaperpapers.com/wp-content/uploads/cover-hello-burgundy-iv-1.jpg"
            alt="invitation card"
          />
        </Col>
        <Col span={12}>
          <div style={{ margin: "10%", textAlign: "left" }}>
            <h1 className="rsvp-title">Will you be joining us?</h1>
            <AttendanceForm />
          </div>
        </Col>
      </Row>

      <Col span={9} offset={3}></Col>

      <Row style={{backgroundColor: "#f9f9fb", textAlign: 'center' }}>
        <Col span={24}>
          {/* <div>
            <FontAwesomeIcon icon={faMapLocationDot} size="3x" />
          </div> */}
          {/* <div>Pullman Kuala Lumpur</div> */}
          <a id="direction" href="#direction"><h2>How to get there!</h2></a>
            <div>
              <iframe
                title="venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.78806793771!2d101.71227031520748!3d3.150529354021651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362d40080999%3A0x1fb2c5dd17d95b91!2sPullman%20Kuala%20Lumpur%20City%20Centre%20-%20Hotel%20%26%20Residences!5e0!3m2!1sen!2smy!4v1657344818522!5m2!1sen!2smy"
                style={{ border: 0, width: "100%", height: 450 }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          
        </Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  );
};

export default Home;
