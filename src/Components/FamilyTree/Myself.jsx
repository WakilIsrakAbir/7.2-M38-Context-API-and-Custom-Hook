import {} from 'react';
import Speacial from './Speacial';

const Myself = ({ asset }) => {
  return (
    <div>
      <h3>Myself</h3>
      <Speacial asset={asset}></Speacial>
    </div>
  );
};

export default Myself;