const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const cloudinary = require('cloudinary');
const app = express();
const {nanoid} = require('nanoid');
const { authCheckImageMiddleware } = require('./utils/auth');


app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(cors());

// console.log("Cloudinary consoled", cloudinary);


app.use(morgan('combined'));
app.use(express.json({limit: "10mb"}));
app.use(bodyParser.json({limit: '10mb'}))
// app.use(authCheck);


// app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/rest', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_API
})


app.post('/uploadimagestoa', authCheckImageMiddleware, (req, res)=>{
    // console.log("Image req", req.body.image)
    cloudinary.uploader.upload(req.body.image,
        (result) => {
            console.log("Image Upload Result", result)
            res.send({
                url: result.secure_url,
                public_id: result.public_id
            })
        },
        {
        public_id: `${nanoid()}.${Date.now()}`, //public name
        resource_type:'auto' // detect any image type
    });
});

app.post('/removeimagesfroma',authCheckImageMiddleware, (req, res) => {
    let imageId = req.body.public_id;

    cloudinary.v2.uploader.destroy(imageId, (error, result)=>{
        if(error){
            return res.json({success:false, error})
        }
        res.send('ok');
    });
});



// app.get('/*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })


module.exports = app;