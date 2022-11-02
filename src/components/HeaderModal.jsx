import React, { memo } from "react";
import ButtonGroup from "antd/lib/button/button-group";

const HeaderModal = memo(({ list, selected, handleClick }) => {
  const onClickOrgan = (e) => {
    if (!e.target.classList.contains("active")) {
      handleClick(e.target.dataset.value);
    }
  };
  return (
    <div className="headerModal">
      <ButtonGroup className=" headerModal__group-btn">
        {list.map((item) =>
          item.value === selected ? (
            <button
              data-value={item.value}
              className="headerModal__btn-select active"
              onClick={onClickOrgan}
            >
              {item.label}
            </button>
          ) : (
            <button
              data-value={item.value}
              className="headerModal__btn-select"
              onClick={onClickOrgan}
            >
              {item.label}
            </button>
          )
        )}
      </ButtonGroup>
    </div>
  );
});
export default HeaderModal;
