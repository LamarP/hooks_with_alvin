import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name="Desktop" isOpen={false}>
        <Folder name="music">
        <File name="all_star.mp4" />
        <File name="express_file.mp4" />

        </Folder>
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications"></Folder>
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const handleClick = () => setIsOpen(!isOpen);
  const direction = isOpen ? 'down' : 'right';
  return (
    <div>
      <span onClick={handleClick}>
        <i className='blue folder icon'></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{marginLeft: '17px'}}>
        {isOpen ? children : null}

      </div>
    </div>
  );
};

const File = (props) => {
  return <div>{props.name}</div>;
};

export default App;
