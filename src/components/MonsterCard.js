import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import fantasyImage from '../assets/creature-default.jpg';
import potionIcon from '../assets/potion_24.png';
import woodShield from '../assets/shield.png';
import sword from '../assets/sword.png';
import magicWand from '../assets/magic-wand.png';
import magicShield from '../assets/shield_magic.png';
import gold from '../assets/gold_24.png';
import styled from 'styled-components';

class MonsterCard extends Component {
    constructor(props) {
        super(props);
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    onClick = (id) => {
        alert(id);
    }

    render() {
        return (
            <Card width="100%" style={{ marginBottom: 20 }}>
                <CardImg top width="90%" src={fantasyImage} alt="Creature default image" />
                <CardTitle style={style.levelText}>Level {this.props.monster.level}</CardTitle>
                <CardTitle style={style.nameText}>{this.capitalize(this.props.monster.name)}</CardTitle>
                <CardBody>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-4"><img width="100%" src={potionIcon} height="26" width="26" alt="Card image potion" />
                                <p>{this.props.monster.hp}</p></div>
                            <div class="col-sm-4"><img width="100%" src={sword} height="26" width="26" alt="Card image sword" />
                                <p>{this.props.monster.patk}</p></div>
                            <div class="col-sm-4"><img width="100%" src={magicWand} height="26" width="26" alt="Card image magic wand" />
                                <p>{this.props.monster.matk}</p></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4"><img width="100%" src={woodShield} height="26" width="26" alt="Card image wooden shield" />
                                <p>{this.props.monster.pdef}</p></div>
                            <div class="col-sm-4"><img width="100%" src={magicShield} height="26" width="26" alt="Card image magic shield" />
                                <p>{this.props.monster.mdef}</p></div>
                            <div class="col-sm-4"><img width="100%" src={gold} height="26" width="26" alt="Card image magic wand" />
                                <p>{this.props.monster.gold}</p></div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

const style = {
    levelText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2766bd',
        fontSize: 15,
        padding: 0
    },
    nameText: {
        textAlign: 'center',
        margin: 0,
        fontSize: 17,
        padding: 0
    }
}

export default MonsterCard;