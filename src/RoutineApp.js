import React, { useState } from "react";

// COMPONENTS
import MobileNavbar from "./MobileNavbar";

// STYLES
import "./styles/RoutineApp.scss";

function RoutineApp() {
  const [currentDate, setCurrentDate] = useState("17 August 2022");

  return (
    <div className="RoutineApp">
      <MobileNavbar currentDate={currentDate} />
    </div>
  );
}

export default RoutineApp;
