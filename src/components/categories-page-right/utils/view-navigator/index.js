import React from "react";

// Components
import { Form } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";

// Styles
import "./index.scss";

const ViewNavigator = () => {
  return (
    <div className="view-navigator-wrapper flex-align-center flex-justify-between">
      <div className="view-controller">
        <AiOutlineUnorderedList className="active-view" />
        <BsGrid3X3GapFill />
        <BsFillGridFill />
      </div>
      <div className="middle-wrapper">
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom>
              <option>Sort by Name A-Z</option>
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
              <option>Date - New to Old</option>
              <option>Date - Old to New</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className="right-side">Showing 1 - 16 of 30 Items</div>
    </div>
  );
};

export default ViewNavigator;
