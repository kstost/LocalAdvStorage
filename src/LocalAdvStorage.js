// okk
(function () {
   var root = this; // global object. 이거엔 왠만하면 접근하지 않는게 좋다.
   var LocalAdvStorage = function () {
      this.data = {};
      this.load();
   };
   LocalAdvStorage.prototype = {
      load: function () {
         for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i);
            let val = this.get(key, true);
            if (val !== null) {
               this.data[key] = val;
            }
         }
      },
      set: function (key, val) {
         localStorage.setItem(key, JSON.stringify(val));
         this.data[key] = val;
      },
      get: function (key, from_disk) {
         if (from_disk) {
            let rtn = localStorage.getItem(key);
            if (rtn !== null) {
               let rt = null;
               try {
                  rt = JSON.parse(rtn);
                  return rt;
               } catch (e) {
               }
            }
         } else if (this.data[key]) {
            return this.data[key];
         }
         return null;
      }
   };
   root.LocalAdvStorage = LocalAdvStorage;
}).call(this);
