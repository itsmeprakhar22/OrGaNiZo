import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
      className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Click to know selected option!
      </button>
    </div>
  );
};

export default Action;
