import { SaveCard, SaveStorageToDisk } from "../bitiConverter";

const Card: React.FC<ICardNode> = ({ name, children }) => {
  let nameEl = (
    <div className="Card-header">
      <p className="Card-name">{name}</p>
      {/* <SubInfo subInfo={subInfo}>
          <p className="Card-button">?</p>
        </SubInfo> */}
      <p onClick={Save} style={{ cursor: "pointer" }}>
        💾
      </p>
    </div>
  );

  function getData(): any {
    return "";
  }

  function Save() {
    SaveCard({ name, children });
    SaveStorageToDisk();
  }

  return (
    <div className="Card CardStyle">
      {nameEl}
      <div className="Card-content">{children}</div>
    </div>
  );
};

export default Card;
