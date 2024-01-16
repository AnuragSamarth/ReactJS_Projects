import React,{useState} from "react";



const ImgPreview = () => {
    const [file , setfile] = useState();
    
  function handleChange(e){
    setfile(URL.createObjectURL(e.target.files[0]));
  }
  

  return (
    <>
      <div className="w-full h-full bg-slate-500 flex justify-center relative">
        <div className=" w-80 h-96 bg-slate-200 absolute top-28 flex flex-col">
          <div>
            <img id="output" src={file}  className=" w-60 h-60 bg-red-400 rounded-full absolute left-9 top-6" />
          </div>
          <label
            htmlFor="upload"
            className=" absolute top-80 left-24 text-center cursor-pointer w-32 h-9 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-xl"
          >
            Upload Image
          </label>
          <input type='file' accept="images/*" id="upload" hidden onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ImgPreview;
