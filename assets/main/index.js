System.register("chunks:///_virtual/Bang.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,i,o,a,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.Label,l=t.Component}],execute:function(){var s,u,p,f,g;o._RF.push({},"c6b56i0YrNDvJK03nPWKWO5","Bang",void 0);var y=a.ccclass,h=a.property;t("Bang",(s=y("Bang"),u=h(c),s((g=e((f=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"title",g,i(e)),e.index=0,e}return n(e,t),e.prototype.SetTitle=function(t){this.title.string=t.toString()},e}(l)).prototype,"title",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,o,n,r,l,c,s,a,d,u,p;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,c=e.CircleCollider2D,s=e.RigidBody2D,a=e.Vec2,d=e.Vec3,u=e.UIOpacity,p=e.Component}],execute:function(){var h,y,g,f,b,B,v;r._RF.push({},"e75bdcOyglL1bKjb82Kr/4s","Bullet",void 0);var m=l.ccclass,C=l.property;e("Bullet",(h=m("Bullet"),y=C(c),g=C(s),h((B=i((b=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return i=e.call.apply(e,[this].concat(r))||this,o(i,"collider",B,n(i)),o(i,"rigidBody",v,n(i)),i.speed=30,i.isMove=!1,i}t(i,e);var r=i.prototype;return r.start=function(){this.collider=this.node.getComponent(c),this.rigidBody=this.node.getComponent(s),this.collider.enabled=!1,this.rigidBody.enabled=!1},r.update=function(e){1==this.isMove&&(this.rigidBody.linearVelocity=new a(1*this.speed,0))},r.Move=function(){this.node.translate(new d(100,0,0)),this.node.getComponent(u).opacity=255,this.collider.enabled=!0,this.rigidBody.enabled=!0,this.isMove=!0},i}(p)).prototype,"collider",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=i(b.prototype,"rigidBody",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=b))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameplayCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Lane.ts","./MiniGame.ts"],(function(e){var n,t,i,a,r,s,o,l,u,c,p,m,h;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,o=e.Node,l=e.Label,u=e.PhysicsSystem2D,c=e.randomRangeInt,p=e.Component},function(e){m=e.Lane},function(e){h=e.MiniGame}],execute:function(){var f,S,w,y,b,M,d,g;r._RF.push({},"f41a2V8/t9HyoaK787Q6rwO","GameplayCtrl",void 0);var v=s.ccclass,L=s.property;e("GameplayCtrl",(f=v("GameplayCtrl"),S=L(o),w=L(l),f(((g=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return n=e.call.apply(e,[this].concat(r))||this,i(n,"layerBullet",M,a(n)),i(n,"time",d,a(n)),n.lanes=[],n.version=1,n.minigame=null,n.numberSpawmMonster=1,n.countMontenSpawn=0,n.timeSpawn=10,n}t(n,e);var r=n.prototype;return r.onLoad=function(){n.instance=this,u.instance.fixedTimeStep=1/120},r.start=function(){this.lanes=this.node.getComponentsInChildren(m),this.minigame=h.MiniGame1,this.SetTime(),this.SpawnMonster()},r.update=function(e){this.timeSpawn-=e,this.timeSpawn<0&&this.SpawnMonster()},r.SpawnMonster=function(){this.countMontenSpawn+=this.numberSpawmMonster;for(var e=0;e<this.numberSpawmMonster;e++){this.timeSpawn=10,this.lanes[c(0,this.lanes.length)].SpawnMonster()}},r.SetTime=function(){var e=this,n=60;this.SetTimeLbl(n),this.schedule((function(){n--,e.SetTimeLbl(n),n<40&&n>20&&(e.numberSpawmMonster=2),n<=20&&(e.numberSpawmMonster=3),0==n&&e.unscheduleAllCallbacks()}),1)},r.SetTimeLbl=function(e){this.time.string=e>=10?"00:"+e:"00:0"+e},n}(p)).instance=null,M=n((b=g).prototype,"layerBullet",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=n(b.prototype,"time",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=b))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/ItemBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameplayCtrl.ts","./Bullet.ts"],(function(t){var e,n,o,i,r,s,l,a,c,u,h,p,d,m,v,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,l=t.CCInteger,a=t.Prefab,c=t.Input,u=t.instantiate,h=t.UITransform,p=t.Vec3,d=t.UIOpacity,m=t.tween,v=t.Component},function(t){f=t.GameplayCtrl},function(t){y=t.Bullet}],execute:function(){var g,C,T,b,M,I,w,x,B;r._RF.push({},"a42dbC+g1ZGfL9MvY9sA5xP","ItemBoard",void 0);var P=s.ccclass,E=s.property;t("ItemBoard",(g=P("ItemBoard"),C=E(l),T=E(a),b=E(a),g((w=e((I=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,o(e,"index",w,i(e)),o(e,"bullet",x,i(e)),e.items=null,o(e,"bulletDemo",B,i(e)),e.itemMove=null,e}n(e,t);var r=e.prototype;return r.start=function(){this.items=this.node.getChildByName("item"),this.node.on(c.EventType.TOUCH_START,this.touchStart,this),this.node.on(c.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.on(c.EventType.TOUCH_END,this.TouchEnd,this),this.node.on(c.EventType.TOUCH_CANCEL,this.TouchEnd,this)},r.touchStart=function(t){if(null==this.itemMove){this.itemMove=u(this.bulletDemo),f.instance.node.addChild(this.itemMove);var e=t.getUILocation(),n=this.itemMove.parent.getComponent(h).convertToNodeSpaceAR(new p(e.x,e.y,0));this.itemMove.setPosition(n)}},r.TouchMove=function(t){var e=t.getUILocation(),n=this.itemMove.parent.getComponent(h).convertToNodeSpaceAR(new p(e.x,e.y,0));this.itemMove.setPosition(n)},r.TouchEnd=function(){for(var t=null,e=0;e<3;e++)1==this.IsNodeInsideTarget(this.itemMove,f.instance.lanes[e].node)&&(t=f.instance.lanes[e]);null!=t&&t.monsterNode.length>0&&t.monsterNode[0].type.index==this.index&&(f.instance.timeSpawn=10,this.SpawnBullet(t)),this.itemMove&&this.itemMove.destroy(),this.itemMove=null},r.SpawnBullet=function(t){for(var e=this,n=function(){var n=u(e.bullet);f.instance.layerBullet.addChild(n),n.setWorldPosition(e.items.worldPosition),n.getComponent(d).opacity=0,e.scheduleOnce((function(){n.getComponent(d).opacity=150,m(n).to(.5,{worldPosition:t.phao.worldPosition}).call((function(){n.getComponent(d).opacity=0,n.getComponent(y).Move()})).start()}),.2*o)},o=0;o<this.index;o++)n()},r.IsNodeInsideTarget=function(t,e){var n=e.getComponent(h),o=t.getWorldPosition(),i=n.convertToNodeSpaceAR(o),r=n.width/2,s=n.height/2;return i.x>=-r&&i.x<=r&&i.y>=-s&&i.y<=s},e}(v)).prototype,"index",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),x=e(I.prototype,"bullet",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(I.prototype,"bulletDemo",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=I))||M));r._RF.pop()}}}));

System.register("chunks:///_virtual/Lane.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Monster.ts"],(function(e){var t,n,o,r,i,s,a,l,p,c,u,h,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,a=e.Node,l=e.Prefab,p=e.instantiate,c=e.randomRangeInt,u=e.Vec3,h=e.Component},function(e){d=e.Monster}],execute:function(){var f,m,g,y,N,b,w,v,M;i._RF.push({},"25c5ewJAfJN5aIKm3+fqAOg","Lane",void 0);var L=s.ccclass,z=s.property;e("Lane",(f=L("Lane"),m=z(a),g=z(a),y=z(l),f((w=t((b=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,o(t,"phao",w,r(t)),o(t,"spawnMonsterNode",v,r(t)),o(t,"monsters",M,r(t)),t.monsterNode=[],t}n(t,e);var i=t.prototype;return i.start=function(){this.phao=this.node.getChildByName("phao")},i.SpawnMonster=function(){var e=p(this.monsters[c(0,this.monsters.length)]);this.node.addChild(e),this.monsterNode.push(e.getComponent(d)),e.setPosition(new u(this.spawnMonsterNode.position.x+70*this.monsterNode.length,this.spawnMonsterNode.position.y,0))},i.RemoveMonser=function(){this.monsterNode.length>0&&this.monsterNode.splice(0,1)},t}(h)).prototype,"phao",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(b.prototype,"spawnMonsterNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(b.prototype,"monsters",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),N=b))||N));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bang.ts","./Bullet.ts","./GameplayCtrl.ts","./ItemBoard.ts","./Lane.ts","./MiniGame.ts","./Monster.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MiniGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,i,t,r;return{setters:[function(e){n=e.inheritsLoose},function(e){i=e.cclegacy,t=e._decorator,r=e.Component}],execute:function(){var o,c;i._RF.push({},"31c64zt3S5KxoCzW1+HWCbr","MiniGame",void 0);var s=t.ccclass;t.property,e("MiniGame",s("MiniGame")(((c=function(e){function i(){return e.apply(this,arguments)||this}return n(i,e),i}(r)).MiniGame1=[{index:1},{index:2},{index:3},{index:4},{index:5}],o=c))||o);i._RF.pop()}}}));

System.register("chunks:///_virtual/Monster.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bang.ts","./GameplayCtrl.ts","./Lane.ts"],(function(n){var e,t,i,o,r,a,s,l,c,d,u,p,g,h,y;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,i=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){r=n.cclegacy,a=n._decorator,s=n.BoxCollider2D,l=n.RigidBody2D,c=n.Contact2DType,d=n.randomRangeInt,u=n.Vec2,p=n.Component},function(n){g=n.Bang},function(n){h=n.GameplayCtrl},function(n){y=n.Lane}],execute:function(){var f,m,b,C,B,x,M,v,w;r._RF.push({},"b9d0fAKM1xOHoqV14OyzBDU","Monster",void 0);var D=a.ccclass,S=a.property;n("Monster",(f=D("Monster"),m=S(s),b=S(l),C=S(g),f((M=e((x=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r))||this,i(e,"collider",M,o(e)),i(e,"rigidBody",v,o(e)),i(e,"bang",w,o(e)),e.speed=-1,e.index=0,e.type=null,e}t(e,n);var r=e.prototype;return r.start=function(){this.bang=this.node.getComponentInChildren(g),this.collider=this.node.getComponent(s),this.rigidBody=this.node.getComponent(l),this.collider.on(c.BEGIN_CONTACT,this.onBeginContact,this),this.type=h.instance.minigame[d(0,h.instance.minigame.length)],this.bang.SetTitle(this.type.index),this.index=this.type.index},r.update=function(n){this.rigidBody.linearVelocity=new u(1*this.speed,0)},r.onBeginContact=function(n,e,t){var i=this;this.scheduleOnce((function(){1==e.tag&&(i.index--,i.bang.SetTitle(i.index),e.node.destroy(),0==i.index&&(i.node.parent.getComponent(y).RemoveMonser(),h.instance.timeSpawn=10,h.instance.countMontenSpawn--,0==h.instance.countMontenSpawn&&h.instance.SpawnMonster(),i.node.destroy()))}),.01)},e}(p)).prototype,"collider",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(x.prototype,"rigidBody",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(x.prototype,"bang",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=x))||B));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});