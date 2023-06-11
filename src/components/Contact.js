import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimler iletişime geçin</h1>
        <form>
          <label> ad soyad</label>
          <input type="text" name="name" placeholder="lütfen adınızı girin" />
          <label> ad soyad</label>
          <input type="text" name="name" placeholder="lütfen adınızı girin" />
          <label> email</label>
          <input type="email" name="email" placeholder="lütfen adınızı girin" />
          <label> email</label>
          <textarea
            rows={6}
            name="message"
            placeholder="lütfen adınızı girin"
          ></textarea>
        </form>
      </div>
    </div>
  );
};
