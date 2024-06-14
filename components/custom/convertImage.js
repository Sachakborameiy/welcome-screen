// pages/api/convert.js
import fs from 'fs';
import { decodeRIV, encodePNG } from 'riv-to-png-library';

export default function handler(req, res) {
  // Read "riv" file
  const rivData = fs.readFileSync('robot.riv');

  // Decode "riv" data
  const imageData = decodeRIV(rivData);

  // Convert to PNG
  const pngBuffer = encodePNG(imageData);

  // Write PNG to file
  fs.writeFileSync('public/output.png', pngBuffer);

  res.status(200).json({ message: 'Conversion successful' });
}
