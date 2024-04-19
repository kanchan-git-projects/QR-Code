import "./App.css";
import codepic from "./Images/codepic.png";

function App() {
  return (
    <>
      <div className="container">
        <img className="barcode-img" src={codepic} alt="Bar Code"></img>
        <p className="barcode-para1">
          Improve your front-end skills by building projects
        </p>
        <p className="barcode-para2">
          Scan the QR code to visit Frontend Mentor and take coding skills to
          the next level
        </p>
      </div>
    </>
  );
}

export default App;
