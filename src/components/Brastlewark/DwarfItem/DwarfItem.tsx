import React from 'react';
import './DwarfItem.scss';
import {Dwarf} from '../../../models';

interface DwarfProps {
  dwarf: Dwarf;
}

const DwarfItem: React.FC<DwarfProps> = ({dwarf}) => {
  const dwarfProfessions: () => JSX.Element[] = () => {
    let professions: JSX.Element[] = dwarf.professions.map(
      (profession, index) => <span key={index}> {profession} </span>,
    );

    return professions;
  };

  return (
    <div className="dwarf-item">
      <img
        className="dwarf-image"
        src={dwarf.thumbnail}
        alt={dwarf.thumbnail}
      />
      <div className="dwarf-item-content">
        <p className="dwarf-name">{dwarf.name}</p>
        <p key={dwarf.id} className="dwarf-profession">
          <b>Professions:</b>
          {dwarfProfessions()}
        </p>
      </div>
    </div>
  );
};

export default DwarfItem;
