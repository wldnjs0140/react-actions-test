import React, { useState } from 'react';

function ChkBox(props) {
  const { chkItems, allChk, setAllChk } = props;
  const [chkItem, setChkItem] = useState([]); // 개별 체크박스 상태

  // 전체 체크박스를 클릭했을 때 동작하는 함수
  const handleAll = () => {
    if (allChk) {
      setChkItem([]); // 전체 해제
    } else {
      setChkItem(chkItems); // 전체 선택
    }
    setAllChk(!allChk); // 전체 체크 상태 반전
  };

  // 개별 체크박스를 클릭했을 때 동작하는 함수
  const handleChange = () => {
    // if (chkItem.includes(item)) {
    //     setChkItem(chkItem.filter((chk) => chk !== item));
    // } else {
    //     setChkItem([...chkItem, item]);
    // }
  };

  return (
    <div>
      {/* 전체 선택 체크박스 */}
      <label>
        <input
          type="checkbox"
          id="chkAll"
          onChange={handleAll}
          checked={allChk}
        />
        전체
      </label>
      <br />
      <br />
      {/* 개별 체크박스들 */}
      {chkItems.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={chkItem.includes(item)}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}

      <hr />

      <br />
    </div>
  );
}

export default ChkBox;
