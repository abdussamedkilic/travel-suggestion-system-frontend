import './Suggestion.scss';
import React from 'react';
import dummyData from '../../json/dummy-data.json';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SuggestionCard = (props) => {
    return (
        <div className="suggestion-card">
            {props.suggestions.map((suggestion, index) => {
                return (
                    <Card key={index} className="suggestion">
                        <Card.Header className="suggestion-text tag">
                            {suggestion.tag.toUpperCase()}
                        </Card.Header>
                        <Card.Img
                            className="suggestion-img"
                            variant="top"
                            src={suggestion.image}
                        />
                        <Card.Body>
                            <Card.Title className="suggestion-text title">
                                {suggestion.title}
                            </Card.Title>
                            <Card.Text className="detail">
                                {suggestion.detail}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="suggestion-text location">
                            {suggestion.location}
                        </Card.Footer>
                    </Card>
                );
            })}
        </div>
    );
};

SuggestionCard.prototype = {
    suggestions: PropTypes.array,
};

export const Suggestion = () => {
    toast.success('you successfully find suggestion card type 1', {
        toastId: 'only once',
    });
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Istanbul</h1>
                    <SuggestionCard suggestions={dummyData.istanbul} />
                </Col>
                <Col>
                    <h1>Izmir</h1>
                    <SuggestionCard suggestions={dummyData.izmir} />
                </Col>
            </Row>
        </Container>
    );
};
