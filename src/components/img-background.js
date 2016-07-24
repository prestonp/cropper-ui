import React from 'react';

module.exports = ({ url }) => {
  const style = {
    backgroundImage: `url(https://i.ytimg.com/vi/${url}/maxresdefault.jpg)`
  }
  return (
    <div className="img-background-parent">
      <div className="img-background" style={style}></div>
      <div className="img-background blur" style={style}></div>
    </div>
  );
};
