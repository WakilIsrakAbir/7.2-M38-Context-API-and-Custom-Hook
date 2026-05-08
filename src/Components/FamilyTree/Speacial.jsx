import { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Speacial = ({ name, asset }) => {
    const newAssset = useContext(AssetContext);
    // console.log(newAssset);
  return (
    <div>
      <h3>Special: {name} </h3>
      <p>Asset:{asset} </p>
      <p>New Asset: {newAssset} </p>
    </div>
  );
};

export default Speacial;