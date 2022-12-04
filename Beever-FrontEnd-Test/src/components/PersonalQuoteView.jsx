import React, { useState } from "react";

export default function PersonalQuoteView() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list.includes(title)) {
      return;
    } else {
      setList([...list, title]);
      setTitle("");
    }
  };
  console.log(list);

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={title} />
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {list.map((i, index) => (
            <div key={index}>
              <p>{i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
