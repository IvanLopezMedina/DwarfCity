import React from 'react';
import './DwarfItem.scss';

const DwarfItem = ({dwarf}) => {
  const dwarfProfessions = () => {
    return dwarf.professions.map((profession) => <span> {profession} </span>);
  };
  return (
    <div className="dwarf-item">
      <img className="dwarf-image" src={dwarf.thumbnail} alt={dwarf.thumbnail} />
      <div className="dwarf-item-content">
        <p className="dwarf-name">{dwarf.name}</p>
        <p className="dwarf-profession">
          <b>Professions:</b>
          {dwarfProfessions()}
        </p>
      </div>
    </div>
  );
};

export default DwarfItem;
