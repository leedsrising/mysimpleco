import React from "react";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";

interface InfoCardProps {
  title: string;
  label: string;
}

const InfoCard = (props: InfoCardProps) => {
  const { title, label } = props;

  return (
    <Card>
      <Card.Header css={{ position: "absolute", top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#0000FF">
            {title}
          </Text>
        </Col>
      </Card.Header>
    </Card>
  );
};

export default InfoCard;
