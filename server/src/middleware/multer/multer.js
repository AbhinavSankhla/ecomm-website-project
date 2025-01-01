const multer = require('multer');

// Configure the storage
const multerStorage = multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, 'src/uploads');
        },
        filename: function(req, file, cb){
            const newName = Date.now() + file.originalname;
            cb(null, newName);  //null - para used to send file on 3rd party app like cloud.
        }
    }
)

// Dynamic fields based on module
const uploadFields = (module) => {
    if (module === 'product') {
        return [
            { name: 'thumbnail', maxCount: 1 },
            { name: 'images', maxCount: 4 }
        ];
    } else if (module === 'profile') {
        return [
            { name: 'thumbnail', maxCount: 1 },
            { name: 'logo', maxCount: 1 },
            { name: 'favicon', maxCount: 1 },
            { name: 'profilepic', maxCount: 1 },
            { name: 'about_img', maxCount: 1 },
        ];
    } else if (module === 'aboutUs') {
        return [
            { name: 'img1', maxCount: 1 },
            { name: 'img2', maxCount: 1 },
            { name: 'img3', maxCount: 1 }
        ];
    } else if (module === 'slider') {
        return [
            { name: 'img1', maxCount: 1 },
            { name: 'img2', maxCount: 1 },
            { name: 'img3', maxCount: 1 },
            { name: 'img4', maxCount: 1 },
            { name: 'img5', maxCount: 1 },
        ];
    }
    else {
        throw new Error('Invalid module specified');
    }
};

// Export the upload middleware
const upload = (module) => {
    return multer({ storage: multerStorage }).fields(uploadFields(module));
};

module.exports = upload;


// for single module
// const upload = multer({storage: multerStorage }).fields([
//     {name : 'thumbnail', maxCount: 1},
//     {name : 'images', maxCount: 4}
// ]);

// module.exports = upload;