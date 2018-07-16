exports.id=0,exports.modules={"./src/server.js":function(e,o,s){"use strict";s.r(o);var t=s("express"),n=s.n(t),r=s("jsonwebtoken"),a=s.n(r),c=s("mongoose"),i=s.n(c);const u=i.a.Schema({email:{type:String,required:!0,unique:!0,match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},password:{type:String,required:!0}});i.a.model("User",u);const d=Object(t.Router)();d.get("/",(e,o)=>{o.json({message:"I am a server route and can also be hot reloaded!"})}),d.post("/user",function(e,o,s){let t=e.headers.authorization;void 0!==t?(e.token=t,s()):o.status(403)},function(e,o,s){a.a.verify(e.token,"secret",(e,t)=>{e&&o.sendStatus(403),s()})},(e,o)=>{console.log(e.body),o.json({status:200,token:e.token})}),d.post("/login",(e,o)=>{console.log(e.body);let s={id:0,username:"andres",email:"raethandres4@gmail.com"};a.a.sign({user:s},"secret",(e,t)=>{t?o.json({token:t}):o.json({user:s})})});var l=d;i.a.connect("mongodb://localhost/prueba");const g=n()();g.use(function(e,o,s){o.header("Access-Control-Allow-Origin","*"),o.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization"),o.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE"),s()}),g.use(bodyParser.json()),g.use("/",l);o.default=g}};