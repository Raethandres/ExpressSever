exports.id=0,exports.modules={"./server/index.js":function(e,s,r){"use strict";r.r(s);var t=r("http"),c=r.n(t),o=r("./src/server.js");const a=c.a.createServer(o.default);let l=o.default;a.listen(3e3),e.hot.accept("./src/server.js",function(s){o=r("./src/server.js"),(()=>{try{a.removeAllListeners("request",a),app=r("./src/server.js").default,a.on("request",app.callback())}catch(e){console.log(e)}e.hot.accept(),e.hot.dispose(()=>{a.close()}),l=app})()})}};