import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height={100}
          width={100}
          className="rounded-circle img-thumbnail border-danger"
          alt="img"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>  
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
        </CardText>
        <CardText>
          <FaPhone />
          <h4>{details.phone}</h4>
          <FaEnvelope />
          <h4>{details.email}</h4>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
