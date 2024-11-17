import { useState, useRef } from 'react';
import './App.css';
import viteLogo from '/vite.svg';
import { Header } from './components/Header';
import Menu from './components/Menu';
import ChkBox from './components/ChkBox';
import Modal from './components/Modal';

function App() {
  // Menu 에 foods라는 props 주기
  const [foods, setFoods] = useState([
    { foodType: '한식', foodMenu: ['김밥', '라면', '부침개'] },
    { foodType: '중식', foodMenu: ['짜장', '짬뽕', '탕수육'] },
    { foodType: '일식', foodMenu: ['돈카츠', '우동', '초밥'] },
  ]);

  // 모달 펑션
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState('add'); // 모달 모드 상태 추가
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <Header
        setShowModal={(value) => {
          setShowModal(value);
          setMode('add'); // 추가 모드로 설정
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
