const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const multer=require('multer');
const validator=require('express-validator');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const fs=require('fs');
const session=require('express-session');
const cors=require('cors');



mongoose.connect('mongodb://127.0.0.1/chatdb')
mongoose.Promise=global.Promise;
var user_format=new mongoose.Schema({
	email:{type:String,required:true,unique:true},
	username:{type:String},
	password:{type:String,required:true},
	image:{data:Buffer,contentType:String}
})
const user_model=mongoose.model('users',user_format);


const app=express()
app.use(cors())
app.use(validator())
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.use(express.static('./public'))
app.use(express.static(__dirname+'/views/styles/'))

app.use(session({
	key:'chat',
	secret:'suab321',
	resave:true,
	saveUninitialized:true,
	cookie:{maxAge:60000000}
}))
const session_checker=(req,res,next)=>{
	if(req.session.user)
		res.status(200).json('home')
	else
		next();
		}


const storage=multer.diskStorage({destination:'./public/uploads/',filename:(req,file,cb)=>{
    cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
}})

const upload=multer({storage,fileFilter:(req,file,cb)=>checkfile(file,cb)}).single('image');
const checkfile=(file,cb)=>{
    const filtypes=/jpeg|jpg|png|gif/;
    const filetype=filtypes.test(path.extname(file.originalname).toLowerCase())
    const mimtype=filtypes.test(file.mimetype);
    if(filetype && mimtype){
        cb(null,true);
    }
    else{
        cb('Select image only');
    }
}


app.get('/register_page',(req,res)=>{
	res.render('./Register_page/Register_form');
})

app.get('/login_page',(req,res)=>{
	res.render('./Login_page/login');
})

app.get('/edit',(req,res)=>{
	res.render('./Edit_page/edit_page')
})

app.get('/add',(req,res)=>{
	res.render('./add_user/Add_user')
})

app.post('/register',(req,res)=>{
	req.check('email','Invalid email').isEmail();
	let email_err=req.validationErrors();
	req.check('password','Invalid password').isLength({min:5}).equals(req.body.cpassword)
	let pass_err=req.validationErrors();
	if(email_err)
		res.render('./Register_page/Register_form',{email_msg:email_err[0].msg})
	else if(pass_err)
		res.render('./Register_page/Register_form',{pass_msg:pass_err[0].msg})
	else{
		let model=new user_model;
		model.username=req.body.username
		model.email=req.body.email
		email_address=req.body.email;
		model.password=bcrypt.hashSync(req.body.password,10)
		model.save(err=>{
			if(err){
				res.status(400).render('./Register_page/Register_form',{msg:'Use unique email'})
			}
			else{
				res.status(400).json('Registered')			
			}
		})

		
	}
})

app.post('/login',(req,res)=>{
	user_model.find({email:req.body.email},(err,user)=>{
		if(err)
			console.log(err)
		else
		{
			if(bcrypt.compareSync(req.body.password,user[0].password)){
				req.session.user=user[0].email
				res.status(304).json('loggedIn')
				console.log(req.session)
				
			}
		}
	})
})

app.get('/home',session_checker,(req,res)=>{
	res.redirect('/login_page');
})

app.get('/logout',(req,res)=>{
	if(req.session.user)
		req.session.destroy()
	res.status(200).json('LoggedOut')
})








app.listen(3001);