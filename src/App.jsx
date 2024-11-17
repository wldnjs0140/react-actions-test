import { useState, useRef } from 'react';
import './App.css';
import { Header } from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import ChkBox from './components/ChkBox.jsx';
import Modal from './components/Modal.jsx';

function App() {
  const [foods, setFoods] = useState([
    { foodType: '한식', foodMenu: ['김밥', '라면', '부침개'] },
    { foodType: '중식', foodMenu: ['짜장', '짬뽕', '탕수육'] },
    { foodType: '일식', foodMenu: ['돈카츠', '우동', '초밥'] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState('add');
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <Header
        setShowModal={(value) => {
          setShowModal(value);
          setMode('add');
        }}
      />
      <Menu
        foods={foods}
        setFoods={setFoods}
        setShowModal={setShowModal}
        setMode={setMode}
        setEditData={setEditData}
      />
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setFoods={setFoods}
          mode={mode}
          editData={editData}
        />
      )}
    </div>
  );
}

export default App;
