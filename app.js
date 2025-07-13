const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const {createPool} = require('mysql');
const path = require('path');


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "gorgeousgrab",
    connectionLimit: 10
})

pool.query('select * from users', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

const UPLOADS_FOLDER = path.join(__dirname, 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        //cb(null, file.originalname);
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    },
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, 
    fileFilter(req, file, cb) {
        if (
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg'
        ) {
            cb(null, true);
        } else {
            cb(new Error('Only .jpg, .jpeg, .png format allowed!'), false);
        }
    }
});

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.post('/', upload.array('avatar', 5), (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
    console.log('Uploaded files:', req.files);
});

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send({ message: err.message });
    } else {
        res.send('Success');
    }
});


app.post("/sent", function (req, res) {
    const comm = req.body.message;
    const na = req.body.nameofperson;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'enter your gmail id here',
            pass: 'enter your pass key of your google account', //demo password
        }
    })
    var mailOptions = {
        from: 'enter your gmail id here',
        to: req.body.username,
        cc: 'enter your gmail id here',
        subject: 'Thanks for your feedback ' + na,
        text: 'Thanks for your message, you have sent to us -->' + comm
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/contact.html');
            console.log("email sent " + info.response);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
