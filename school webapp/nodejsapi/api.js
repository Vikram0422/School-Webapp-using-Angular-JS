
var dboperations = require('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app  = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);


router.use((request,response,next) =>{
console.log('middleware');
next();
})


router.route("/getadmission").get((request,response)=>{
    dboperations.getadmission().then(result =>{
        response.json(result);
    })
})


//http://localhost:8090/api/login/rajesh/rajesh
router.route("/login/:user_name/:password").get((request,response)=>{
    dboperations.getLogin(request.params.user_name,request.params.password).then(result =>{
        response.json(result);
    })
})

//http://localhost:8090/api/student/2015032
router.route("/student/:registerNumber").get((request,response)=>{
    dboperations.getStudent_Details(request.params.registerNumber).then(result =>{
        response.json(result);
    })
})


//http://localhost:8090/api/staff/2015004
router.route("/staff/:staffCode").get((request,response)=>{
    dboperations.getStaff_Details(request.params.staffCode).then(result =>{
        response.json(result);
    })
})

router.route("/saveadmission").post((request,response)=>{
    dboperations.saveAdmission(request.body).then(result =>{
        response.status(200).json({data: 'Admission Sucessfully'});
    })
})


router.route("/login").post((request,response)=>{
    dboperations.login(request.body).then(result =>{
        response.status(200).json({data: result});
    })
})



var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running ' + port);



