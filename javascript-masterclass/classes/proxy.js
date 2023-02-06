function createArray () {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        // target[key] = value
        Reflect.set(target, key, value)
        target.length++;
      },
      get (target, key) {
        if (typeof key === 'string' && key.match(/\d+/)) {
          if(!Reflect.has(target, key)) {
            throw `Property ${key} not found`
          }
        }
        return Reflect.get(target, key);
      },
      deleteProperty(target, key) {
        // key in target
        if (Reflect.has(target, key)) {
          // delete target[key]
          Reflect.deleteProperty(target, key);
          target.length--;
        }
      },
    }
  );
}

const languages = createArray();
languages[0] = "Java"
languages[1] = "JavaScript"
languages[2] = "Clojure"
console.log(languages);
console.log(languages.length);

delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);



console.log(languages[0])
// console.log(languages[1]) throw error
// console.log(languages[2])
// console.log(languages[3])