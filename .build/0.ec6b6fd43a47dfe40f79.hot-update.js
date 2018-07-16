exports.id=0,exports.modules={"./src/server.js":function(e,s,o){"use strict";o.r(s);var t=o("express"),n=o.n(t),a=o("jsonwebtoken"),r=o.n(a),d=o("mongoose"),u=o.n(d);const c=u.a.Schema({email:{type:String,required:!0,unique:!0,match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},password:{type:String,required:!0}});var i=u.a.model("User",c);const l=Object(t.Router)();l.get("/",(e,s)=>{s.json({message:"I am a server route and can also be hot reloaded!"})}),l.post("/user",function(e,s,o){let t=e.headers.authorization;void 0!==t?(e.token=t,o()):s.status(403)},function(e,s,o){r.a.verify(e.token,"secret",(e,t)=>{e&&s.sendStatus(403),o()})},(e,s)=>{console.log(e.body),new i({email:e.body.email,password:e.body.password}).save().then(()=>{s.json({status:200,token:e.token})}).catch(e=>{s.json({status:500})})}),l.post("/login",(e,s)=>{i.find({email:e.body.email}).exec().then(o=>{o<1&&s.status(403).json({message:"user not found"}),console.log(o),o[0].password===e.body.password&&r.a.sign({user:o},"secret",(e,t)=>{t?s.json({token:t}):s.json({user:o})}),s.status(403).json({message:"user not found"})})});var p=l,h=o("body-parser"),m=o.n(h);u.a.connect("mongodb://localhost/prueba");const g=n()();g.use(function(e,s,o){s.header("Access-Control-Allow-Origin","*"),s.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization"),s.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE"),o()}),g.use(m.a.json()),g.use(m.a.urlencoded({extended:!0})),g.use("/",p);s.default=g}};