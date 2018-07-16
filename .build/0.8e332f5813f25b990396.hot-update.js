exports.id=0,exports.modules={"./src/server.js":function(e,o,s){"use strict";s.r(o);var n=s("express"),t=s.n(n),a=s("jsonwebtoken"),r=s.n(a),u=s("mongoose"),i=s.n(u),d=i.a.Schema({email:{type:String,required:!0,unique:!0,match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},password:{type:String,required:!0}}),c=i.a.model("User",d),l=Object(n.Router)();l.get("/",function(e,o){o.json({message:"I am a server route and can also be hot reloaded!"})}),l.post("/user",function(e,o,s){var n=e.headers.authorization;void 0!==n?(e.token=n,s()):o.status(403)},function(e,o,s){r.a.verify(e.token,"secret",function(e,n){e&&o.sendStatus(403),s()})},function(e,o){console.log(e.body),new c({email:e.body.email,password:e.body.password}).save().then(function(){o.json({status:200,token:e.token})})}),l.post("/login",function(e,o){c.find({email:e.body.email}).exec().then(function(s){s<1&&o.status(403).json({message:"user not found"}),console.log(s,e.body),s[0].password===e.body.password&&r.a.sign({user:s},"secret",function(e,n){n?o.json({token:n}):o.json({user:s})}),o.status(403).json({message:"auth fail"})})});var f=l,p=s("body-parser"),h=s.n(p);i.a.connect("mongodb://localhost:27017/prueba",{useNewUrlParser:!0});var m=t()();m.use(function(e,o,s){o.header("Access-Control-Allow-Origin","*"),o.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization"),o.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE"),s()}),m.use(h.a.json()),m.use(h.a.urlencoded({extended:!0})),m.use("/",f);o.default=m}};