import React from 'react';


export default class GridItem extends React.Component {
  render() {
    return (
      <div data-id={this.props.id}>
      {this.props.name}
      </div>
    );
  }
}

