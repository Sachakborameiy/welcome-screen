import { useState, useRef } from 'react';
import { decodeRIV } from 'riv-decoder'; // Assuming a "riv-decoder" library exists for decoding .riv files

const MyComponent = () => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async function (e) {
      const imageData = await decodeRIV(e.target.result);
      drawImageOnCanvas(imageData);
    };

    reader.readAsArrayBuffer(file);
  };

  const drawImageOnCanvas = (imageData) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.putImageData(img, 0, 0);

    setImage(canvas.toDataURL()); // Optionally, save image data URL to state
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        {image && <img src={image} alt="Loaded image" />}
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default MyComponent;
