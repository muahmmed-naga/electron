import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { Accordion, Card } from 'react-bootstrap';

// Styles
import './categories-page-left.styles.scss';

const CategoriesPageLeftSide = () => {
  return (
    <div className="categories-page-left-wrapper">
      <div className="title">Categories</div>
      <Accordion>
        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="0">
            Accessories
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="1">
            All in One
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="2">
            Gadgets
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="3">
            Gaming
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="4">
            Others
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Link to="#" className="list-item">
        MAC Computer
      </Link>
      <Link to="#" className="list-item">
        TV & Audio
      </Link>
      <Link to="#" className="list-item">
        Printers & Ink
      </Link>
    </div>
  );
};

export default CategoriesPageLeftSide;
