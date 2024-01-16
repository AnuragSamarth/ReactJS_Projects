import React, { useState } from "react";
import Header from "./Components/Header/Header";
import ImgPreview from "./Components/ImgPreview/ImgPreview";

function App() {
  const [file, setfile] = useState();

  const handelChange = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Header></Header>
      <ImgPreview setfile={setfile} file={file} />
    </div>
  );
}

export default App;
