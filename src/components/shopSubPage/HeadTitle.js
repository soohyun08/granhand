function HeadTitle({ shopItems, children }) {
  return (
    <section className="headLine">
      {shopItems.map((item) => (
        <div key={item.id}>
          <h2>
            {item.title}
            <span>{item.num}</span>
          </h2>
          <main>{children}</main>
        </div>
      ))}
    </section>
  );
}

export default HeadTitle;
