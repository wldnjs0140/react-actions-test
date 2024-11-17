import { useState } from 'react';

function Menu(props) {
  const { foods, setFoods, setShowModal, setEditData, setMode } = props;
  const [searchType, setSearchType] = useState('전체');

  const Foodmenu = ({ menu, type }) => {
    return (
      <li onClick={() => handleEditMenu(type, menu)}>
        {menu}
        <button onClick={() => handleMenuDelete(type, menu)}>x</button>
      </li>
    );
  };
  const handleEditMenu = (type, menu) => {
    setShowModal(true);
    setEditData({ foodType: type, foodMenu: menu }); // 선택한 정보 전달
    setMode('edit');
  };

  const handlSearch = (type) => {
    // console.log(type);
    setSearchType(type);
  };

  // foodType 삭제
  const handleTypeDelete = (type) => {
    setFoods(foods.filter((food) => food.foodType !== type));
    // console.log(foods.filter((food) => food.foodType !== type));
  };

  // foodMenu 삭제
  const handleMenuDelete = (type, menu) => {
    setFoods((prev) => {
      return prev.map((food) => {
        if (food.foodType === type) {
          // type에 맞는 foodMenu에서 특정 menu를 제외
          return {
            ...food,
            foodMenu: food.foodMenu.filter((item) => item !== menu),
          };
        }
        return food; // 다른 음식들은 그대로 반환
      });
    });
  };

  return (
    <div>
      <div className="menuBtn">
        <button onClick={() => handlSearch('전체')}>전체</button>
        {foods.map((type, idx) => (
          <button key={idx} onClick={() => handlSearch(`${type.foodType}`)}>
            {type.foodType}
          </button>
        ))}
      </div>

      {foods
        .filter((food) => searchType === '전체' || food.foodType === searchType)
        .map((food, idx) => (
          <div key={idx} className="menuDiv">
            <h3>
              {food.foodType}
              <button onClick={() => handleTypeDelete(`${food.foodType}`)}>
                X
              </button>
            </h3>

            <ul>
              {food.foodMenu.map((menu, idx) => (
                <Foodmenu key={menu + idx} menu={menu} type={food.foodType} />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Menu;
