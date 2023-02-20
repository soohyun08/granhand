function SelectedList({ selectedItem, onDel, decrement, increment }) {
  return (
    <div>
      {selectedItem.map((item) => {
        return (
          <div key={item.id} className="selectedItem">
            <div className="row1">
              <p>{item.text}</p>

              <button type="reset" onClick={() => onDel(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                >
                  <path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
                </svg>
              </button>
            </div>
            <div className="row2">
              {/*             <div className="count">
                <button onClick={() => decrement(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increment(item.id)}>+</button>
              </div> */}

              <p className="totalPrice">
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                KRW
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedList;
