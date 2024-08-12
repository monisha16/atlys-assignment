// import React from 'react';

const AtlysModal = (props) => {
  const { children } = props;

  return (
    <div className='relative blur-sm bg-black'>
      <div>{children}</div>
    </div>
  );
};

export default AtlysModal;
