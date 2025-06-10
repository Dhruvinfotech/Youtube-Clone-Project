import multer from 'multer';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/temp'); // Specify the directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  } // Use the original file extension
});

export const upload = multer({ storage, });