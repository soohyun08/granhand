import "./search.scss";
import { useState } from "react";
import Card from "./Card";

function Search({ shopItems }) {
  const [userInput, setUserInput] = useState("");
  // console.log(shopItems);
  const handleChange = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searched = shopItems.filter((item) => {
    return item.name.toLowerCase().includes(userInput);
  });

  const onReset = (e) => {
    setUserInput("");
  };

  console.log(searched);
  return (
    <div className="searchContainer">
      <div className="searchBar">
        <input
          type="text"
          name="search"
          placeholder="당신을 위한 향을 찾아보세요"
          className="input"
          value={userInput}
          onChange={handleChange}
        />
        <div className="btnWrapper">
          <button type="submit" className="submit">
            <span className="material-symbols-rounded">search</span>
          </button>

          <button type="reset" className="cancel" onClick={onReset}>
            <span className="material-symbols-outlined">cancel</span>
          </button>
        </div>
      </div>

      {searched.length === 0 ? (
        <p className="resultNone">일치하는 상품이 없습니다.</p>
      ) : (
        searched.map((item) => <Card key={item.id} {...item} />)
      )}
    </div>
  );
}

export default Search;
