import { useRef, useEffect } from 'react';

function Modal({ setShowModal, setFoods, mode, editData }) {
  const inputFoodType = useRef();
  const inputFoodMenu = useRef();

  // 초기 값 세팅
  useEffect(() => {
    if (mode === 'edit' && editData) {
      inputFoodType.current.value = editData.foodType;
      inputFoodMenu.current.value = editData.foodMenu;
    }
  }, [mode, editData]);

  const handleInsertOrUpdate = () => {
    const foodTypeRef = inputFoodType.current.value;
    const foodMenuRef = inputFoodMenu.current.value;

    if (mode === 'add') {
      // 추가 로직
      setFoods((prev) => {
        const checkType = prev.find((food) => food.foodType === foodTypeRef);
        if (checkType) {
          if (!checkType.foodMenu.includes(foodMenuRef)) {
            return prev.map((food) =>
              food.foodType === foodTypeRef
                ? { ...food, foodMenu: [...food.foodMenu, foodMenuRef] }
                : food
            );
          }
          return prev; // 이미 있는 경우 추가하지 않음
        }
        return [...prev, { foodType: foodTypeRef, foodMenu: [foodMenuRef] }];
      });
    } else if (mode === 'edit') {
      // 수정 로직
      setFoods((prev) =>
        prev.map((food) => {
          if (food.foodType === editData.foodType) {
            return {
              ...food,
              foodType: foodTypeRef,
              foodMenu: food.foodMenu.map((menu) =>
                menu === editData.foodMenu ? foodMenuRef : menu
              ),
            };
          }
          return food;
        })
      );
    }

    setShowModal(false);
  };
  return (
    <div>
      <div className="modal">
        <label>
          음식타입
          <input className="foodInput" ref={inputFoodType} type="text" />
        </label>

        <div className="modal_content">
          <label>
            메뉴
            <input className="foodInput" ref={inputFoodMenu} type="text" />
          </label>
        </div>

        <div className="modal_btn">
          <button onClick={handleInsertOrUpdate}>
            {mode === 'add' ? '등록' : '수정'}
          </button>
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
