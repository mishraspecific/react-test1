import React  from 'react';
import './card-list.styles.css';
import { Card } from '../card/card';

export const CardList = props => (
  <div className = 'card-list'> 
       {props.names.map(user => (
        <Card key = {user.id} monster = {user} /> ))}
    </div>
)