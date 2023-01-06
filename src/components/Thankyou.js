import React from "react";
import thankyou from "../assets/icon-thank-you.svg";

export default function Thankyou() {
  return (
    <div className="form-con thank-you">
      <img src={thankyou} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have <br /> fun
        using our platform. If you ever need support, please feel
        <br /> free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
