import React from "react";
import Image from "./Image.jsx";
import ContentTable from "./ContentTable.jsx";



function Heading() {
  const dateNow = new Date();
  const timeNow = dateNow.getHours() + " : " + dateNow.getMinutes();
  var greeting = "";
  var greetingColor = "";

  if (dateNow.getHours() < 12) {
    greeting = "Good Morning!";
    greetingColor = "white";
  } else if (dateNow.getHours() >= 12 && dateNow.getHours() < 18) {
    greeting = "Good Afternoon!";
    greetingColor = "white";
  } else if (dateNow.getHours() >= 18 && dateNow.getHours() <= 24) {
    greeting = "Good Evening!";
    greetingColor = "white";
  }

  return (
    <div>
      <h1 className="heading" style={{ color: greetingColor }}>
        {" "}
        {greeting}
      </h1>
      <div className="line"></div>
      <h2 className="time"> Current time: {timeNow + "h"} </h2>
      <p> Today's Date: {dateNow.toDateString()} </p>
      <Image />
      <ContentTable />
    </div>
  );
}

export default Heading;
