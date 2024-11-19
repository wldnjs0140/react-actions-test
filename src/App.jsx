import "./App.css";
import { Header } from "./components/Header";
import Menu from "./components/Menu";
import { useState } from "react";
import Modal from "./components/Modal";
import { Routes, Route, useNavigate } from "react-router-dom";
import Join from "./components/Join";
import FoodMenu from "./components/FoodMenu";
import Login from "./components/Login";

function App() {
  const [foods, setFoods] = useState([
    { foodType: "한식", foodMenu: ["김밥", "라면", "불고기"] },
    { foodType: "중식", foodMenu: ["짜장", "짬뽕", "탕수육"] },
    { foodType: "일식", foodMenu: ["우동", "스시", "돈카츠"] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [modalMode, setModalMode] = useState();

  const navigate = useNavigate();

  const goToJoin = () => {
    navigate("/Join");
  };

  const goToLogin = () => {
    navigate("/Login");
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToMenu = () => {
    navigate("/foodMenu");
  };

  return (
    <div className="app">
      {/* {JSON.stringify(fetchDataFoods)} */}

      {/* 상단 헤더 */}
      <Header
        goToHome={goToHome}
        goToJoin={goToJoin}
        goToLogin={goToLogin}
        goToMenu={goToMenu}
        setModalMode={setModalMode}
        setShowModal={setShowModal}
      />
      {/* 라우팅 처리 */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu
                setDetailData={setDetailData}
                foods={foods}
                setFoods={setFoods}
                setShowModal={setShowModal}
                setModalMode={setModalMode}
              />
              {showModal && (
                <Modal
                  detailData={detailData}
                  setShowModal={setShowModal}
                  setFoods={setFoods}
                  modalMode={modalMode}
                />
              )}
            </>
          }
        />
        <Route path="/Join" element={<Join goToHome={goToHome} />} />
        <Route path="/Login" element={<Login goToHome={goToHome} />} />
        <Route path="/foodMenu" element={<FoodMenu goToHome={goToHome} />} />
        {/* <Route path="*" element={<>사용할수 없는 URL입니다.</>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
