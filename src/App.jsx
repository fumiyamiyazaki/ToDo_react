import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input_area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete_are">
        <p className="title">未完了のタスク</p>
        <ul>
          <div className="list_row">
            <li>aaa</li>
            <button>完了</button>
            <button>未完了</button>
          </div>
        </ul>
      </div>
      <div className="complete_area">
        <p className="title">完了のタスク</p>
        <ul>
          <div className="list_row">
            <li>aaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
