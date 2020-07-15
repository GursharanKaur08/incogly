import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
import { ArrowRight } from "react-feather";
import Header from '../containers/Header/Header';

import imgs from '../assets/images/illustation.svg'
import imag from '../assets/images/connect.svg'

const Home = (props) => {
  return (
    <>
    <Header/>
    <div className="home">
      {/* <div>
        <p>Please enter a room name.</p>
        <input type="text" name="room" value={ props.roomId } onChange={props.handleChange} pattern="^\w+$" maxLength="10" required autoFocus title="Room name should only contain letters or numbers."/>
        <Link className="primary-button" to={ '/colab/r/' + props.roomId }>Join</Link>
        <Link className="primary-button" to={ '/colab/r/' + props.defaultRoomId }>Random</Link>
        { props.rooms.length !== 0 && <div>Recently used rooms:</div> }
        { props.rooms.map(room => <Link key={room} className="recent-room" to={ '/colab/r/' + room }>{ room }</Link>) }
      </div> */}
      <Container>
        <Row className="brand">
          <div className="container-images">
            <img src={imgs} className="illustration"/>
            <img src={imag} className="illustration"/>
          </div>
          <h3>Try incog.ly</h3>
          <h4 className="recent-text">Connect & Collaborate! Go anonymous</h4>
        </Row>
        <Row className="card-row">
          <Card>
            <Card.Body>
              <Row className="user-input">
                <input
                  className="room-input"
                  placeholder="Enter room name"
                  name="room"
                  // value={props.roomId}
                  onChange={props.handleChange}
                  pattern="^\w+$"
                  maxLength="10"
                  required
                  autoFocus
                  title="Room name should only contain letters or numbers."
                  type="text"
                />
                <Link
                  to={"/colab/r/" + props.roomId}
                  style={{ textDecoration: "none" }}
                >
                  <ArrowRight className="icon-right" />
                </Link>
              </Row>
              {props.rooms.length !== 0 && (
                <h4 className="recent-text">Recently active rooms :</h4>
              )}
              <Row className="card-content">
                {props.rooms.map((room) => (
                  <Col lg={2} className="recent-input"> 
                  <Link
                    key={room}
                    className="recent-room"
                    to={"/colab/r/" + room}
                  >
                   {room}
                  </Link>
                    </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
    </>
  );
};

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({ rooms: store.rooms });

export default connect(mapStateToProps)(Home);
