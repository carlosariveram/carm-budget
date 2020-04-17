import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export interface HouseholdMember {
  name: string,
  email: string, 
  baseIncome: number,
  editable: boolean
};

export interface Household {
  members: Array<HouseholdMember>
};

export class HouseholdForm extends Component<null, HouseholdMember>{
}

export class HouseholdView extends Component<HouseholdMember, any>{
  constructor(props: HouseholdMember) {
    super(props);
  }

  render() {
    if (this.props.editable) {
      return (<h1>Editable prop</h1>);
    } else {
      return (<h1>Read Only</h1>);
    }
  }
}

export class HouseHoldIndex extends Component<any, Household>{
  constructor(props: any){
    super(props);

    this.addMembers = this.addMembers.bind(this);

    this.state = {
      members: []
    };
  }

  addMembers() {
    let members = [...this.state.members];
   
    members.push({
      name: '',
      email: '',
      baseIncome: 0,
      editable: true
    });

    this.setState({
      members: members
    });
    console.log(members);
  }

  render() {
    let message : JSX.Element;

    if (this.state.members.length == 0) {
      message = (<div><p>Please add members to this household</p></div>);
    } else {
      let members = this.state.members.map((member, i) => (<HouseholdView key={i} name={member.name} email={member.email} baseIncome={member.baseIncome} editable={member.editable} />));
      message = (<div>{members}</div>);
    }

    return (
      <div className="component-container">
        {message}
        <button onClick={this.addMembers}>Add members</button>
      </div>
    );
  }
}