import sharp from "sharp";

// saving image after compressing
export const processImage = async (req, res, next) => {
  console.log(req.file);
  if (!req.file) {
    next();
  }
  req.file.filename = `${req.body.title}_${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(320, 320)
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`./uploads/${req.file.filename}`);
  next();
};
