import Navbar from "./components/navbar/Navbar";
import { Button, ButtonGradient, ButtonText, CircleButton } from "./components/buttons/Buttons";
import "./App.css";
import Game from "./components/game/Game";
import { useState } from "react";

import SmartClock from "./components/Pract/SmartClock"; 

function App() {
    return (
        <>
            <Navbar />
            <div>
              {/* <Button text="Custom button" />
              <CircleButton text="+" size="100px" />
              <ButtonGradient text="Gradient button"/>
              <ButtonText>Children button text</ButtonText> */}
              {/* <Game /> */}

              {/* Pract */}
              <div className="app-container">
                
                <h2>Базовий годинник</h2>
                <SmartClock />


                <h2>Кастомний годинник </h2>
                <SmartClock 
                    bgColors={{ 
                        morning: "#f39c12",
                        day: "#3498db",
                        night: "#2c3e50"
                    }} 
                    showDate={true} 
                    fontStyles={{ 
                        fontFamily: "Courier New, monospace", 
                        fontSize: "3rem", 
                        color: "#ecf0f1" 
                    }} 
                />

            </div>
            </div>
        </>
    );
}

export default App;
