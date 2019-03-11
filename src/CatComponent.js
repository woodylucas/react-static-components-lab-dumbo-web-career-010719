import React from 'react';

export default class CatComponent extends React.Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
