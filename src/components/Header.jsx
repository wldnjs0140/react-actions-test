export const Header = ({ setShowModal }) => {
  return (
    <div>
      <div className="header">
        <h1>음식블로그</h1>
        <button className="addButton" onClick={() => setShowModal(true)}>
          추가
        </button>
      </div>
    </div>
  );
};
