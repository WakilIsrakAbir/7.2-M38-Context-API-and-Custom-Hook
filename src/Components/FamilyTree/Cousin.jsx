import { } from 'react';
import Speacial from './Speacial';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
      <div>
        <h3> {name} </h3>
        {name === "Rumman" && <Speacial asset={asset}></Speacial>}
        {name === "Saba" && <Friend></Friend>}
      </div>
    );
};

export default Cousin;