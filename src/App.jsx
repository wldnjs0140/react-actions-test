import "./App.css";
import { Header } from "./components/Header";
import Menu from "./components/Menu";
import { useContext, useState } from "react";
import { Modal } from "./components/Modal";
import { Routes, Route, useNavigate } from "react-router-dom";
import Join from "./components/Join";
import FoodMenu from "./components/FoodMenu";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const [foods, setFoods] = useState([
    { foodType: "한식", foodMenu: ["김밥", "라면", "불고기"] },
    { foodType: "중식", foodMenu: ["짜장", "짬뽕", "탕수육"] },
    { foodType: "일식", foodMenu: ["우동", "스시", "돈카츠"] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [modalMode, setModalMode] = useState();

  const navigate = useNavigate(); // useNavigate 훅 사용

  // 로그인 화면으로 이동
  const goToJoin = () => {
    navigate("/react-actions-test/Join");
  };
  // 로그인 화면으로 이동
  const goToLogin = () => {
    navigate("/react-actions-test/Login");
  };

  // 기본 화면으로 이동
  const goToHome = () => {
    navigate("/react-actions-test/");
  };
  const goToMenu = () => {
    navigate("/react-actions-test/foodMenu");
  };

  return (
    <div className="app">
      {/* {JSON.stringify(fetchDataFoods)} */}

      {/* 상단 헤더 */}
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
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
          path="/react-actions-test/"
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
        <Route
          path="/react-actions-test/Join"
          element={<Join goToHome={goToHome} goToLogin={goToLogin} />}
        />
        <Route
          path="/react-actions-test/Login"
          element={<Login goToHome={goToHome} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/react-actions-test/foodMenu"
          element={<FoodMenu goToHome={goToHome} />}
        />
        <Route path="*" element={<>사용할수 없는 URL입니다.</>}></Route>
        {/* <Route path="/test/:aa" element={<TestRoute></TestRoute>}>
          <Route path="test2" element={<TestRoute2></TestRoute2>}></Route>

          <Route></Route>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
