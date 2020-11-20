import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MonsterCard from './components/MonsterCard';

class MonstersList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], intervalId: null};
  }

  fetchMonsters = async () => {
    const url = "http://localhost:8080/monster";
    const response = await fetch(url);
    const monstersList = await response.json();
    this.setState({ data: monstersList, loading: false });
  }

  async componentDidMount() {
    await this.fetchMonsters();

    this.state.intervalId = setInterval(() => {
      this.fetchMonsters();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    let monsterCards = this.state.data.map(monster => {
      return (
        <Col sm="3">
          <MonsterCard monster={monster} />
        </Col>
      )
    })

    return (
      <Container fluid={true}>
        <Row>
          {monsterCards}
        </Row>
      </Container>
    );
  }
}

export default MonstersList;