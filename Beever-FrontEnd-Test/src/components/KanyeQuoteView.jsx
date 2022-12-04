import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKanyeQuote, selectKanyeQuote } from "../redux/kanyeSlice";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const kanyeQuote = useSelector(selectKanyeQuote);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const handleFavorite = () => {
    if (favoriteQuotes.includes(kanyeQuote.payload.kanyeQuote.kanyeQuote)) {
      return;
    } else {
      setFavoriteQuotes([...favoriteQuotes, kanyeQuote.payload.kanyeQuote.kanyeQuote]);
    }
  };
  
  useEffect(() => {
    dispatch(fetchKanyeQuote());
  }, [dispatch]);

  return (
    <section style={{ textAlign: "center" }}>
      <img src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" alt="W3Schools.com" style={{ width: "300px" }} />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <hr style={{ maxWidth: "30%" }} />
      <h2>{kanyeQuote.payload.kanyeQuote.kanyeQuote}</h2>
      <button
        onClick={() => {
          dispatch(fetchKanyeQuote());
        }}
      >
        Get Quote
      </button>
      <button
        onClick={() => {
          handleFavorite();
        }}
      >
        Add Favorite
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {favoriteQuotes.map((i, index) => (
            <div key={index}>
              <p>{i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
