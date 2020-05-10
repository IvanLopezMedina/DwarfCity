import React from 'react';
import './DwarfItem.scss';
import {Dwarf} from '../../../models';
import Modal from '../../common/Modal';
import Card from './Card';

interface DwarfProps {
  dwarf: Dwarf;
}

const DwarfItem: React.FC<DwarfProps> = ({dwarf}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dwarfProfessions: () => JSX.Element[] = () => {
    let professions: JSX.Element[] = dwarf.professions.map(
      (profession, index) => <span key={index}> {profession} </span>,
    );

    return professions;
  };

  const card: JSX.Element = <Card dwarf={dwarf} />;

  return (
    <>
      <div className="dwarf-item" onClick={handleOpen}>
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
      <Modal openModal={open} handleClose={handleClose} card={card} />
    </>
  );
};

export default DwarfItem;
