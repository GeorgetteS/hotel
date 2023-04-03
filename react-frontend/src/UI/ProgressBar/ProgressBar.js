import React from 'react';

const ProgressBar = ({ color, now }) => {
  const containerStyles = {
    height: 6,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 1,
    // margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${now}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  // const { bgcolor, completed } = props;
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
