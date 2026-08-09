import Article from "./components/Article";
import "./App.css";

function App() {
    return (
        <div className="app-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            
            <h2>Стаття 1: Картинка зліва, заголовок по центру</h2>
            <Article 
                title="Основи React для початківців"
                author="Іван Сергійович"
                date="09.08.2026"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvx9izwQlMz1mBVLyLbFvDLPfSAzCsRXwogsIJ_-ITci_-6Jq9069El2-AZWbDPamdN0YXQCDP78jB71htZ7IyjQ98kwJsawcvXhSGPw&s=10"
                
                fontStyles={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#333" }}
                bgColors={{ containerBg: "#fff", headerBg: "#e3f2fd", contentBg: "#fafafa" }}
                layout={{ imagePosition: "left", titleAlign: "center" }}
            />

            <h2>Стаття 2: Картинка справа, темна тема, заголовок зліва</h2>
            <Article 
                title="Темна тема — це зручно!"
                author="UI/UX Дизайнер"
                date="10.08.2026"
                text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nec gravida orci commodo vel. Phasellus hendrerit libero vitae diam viverra, nec magna convallis sodales."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBj0m1wajVSVYdMAq36XcDCyl-ioKTkW-GqG2V2ZiDTNdhzzh1YcOAwolH&s=10"
                
                fontStyles={{ fontFamily: "Verdana, sans-serif", fontSize: "16px", color: "#ecf0f1" }}
                bgColors={{ containerBg: "#2c3e50", headerBg: "#34495e", contentBg: "#2c3e50" }}
                layout={{ imagePosition: "right", titleAlign: "left" }}
            />

        </div>
    );
}

export default App;