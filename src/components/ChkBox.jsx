import React, { useState } from 'react';

function ChkBox(props) {
  const { chkItems, allChk, setAllChk } = props;
  const [chkItem, setChkItem] = useState([]);

  const handleAll = () => {
    if (allChk) {
      setChkItem([]);
    } else {
      setChkItem(chkItems);
    }
    setAllChk(!allChk);
  };

  const handleChange = () => {};

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
