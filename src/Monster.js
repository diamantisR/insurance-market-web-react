import React, { Component } from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import monsterTypes from './monsters/monster-types.json';

class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'outlaw',
      level: 1,
      visible: false
    };

    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  createMonster = async (monster) => {
    let response = await fetch('http://localhost:8080/monster', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(monster)
    });

    if (response.ok) {
      console.log(Object.keys(monsterTypes));
      this.hideAlert();
      this.setState({
        name: 'outlaw',
        level: 1
      })
    };
  }

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value
    })
  }

  onChangeType(e) {
    this.setState({
      name: e.target.value
    })
  }

  hideAlert() {
    this.setState({
      visible: true
    })

    setTimeout(() => {
      this.setState({
        visible: false
      })
    }, 2000);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const monster = {
      name: this.state.name.toLowerCase(),
      level: parseInt(this.state.level)
    }

    this.createMonster(monster);
  }

  render() {
    return (
      <div>
        <Alert color="info" isOpen={this.state.visible} dismissible="true" style={{ marginTop: 25 }}>
          Monster created successfully
        </Alert>
        <div class="row justify-content-center align-items-center h-100">
          <div class="col col-lg-4">
            <div className="form-group">
              <label>Monster level: </label>
              <input type="number"
                required
                min="1"
                className="form-control"
                value={this.state.level}
                onChange={this.onChangeLevel}
              />
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Monster type: </label>
                <select ref="typeInput"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeType}>
                  {(Object.keys(monsterTypes)).map(monster => (
                    <option>
                      {this.capitalize(monster)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input type="submit" value="Create Monster" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Monster;

