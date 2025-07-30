import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp') // stored in public
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )  //original file name is stored 
  }
})

export const upload = multer({ storage: storage })