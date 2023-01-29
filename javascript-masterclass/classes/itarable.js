const languages = ["Clojure", "javascript", "C#"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

for (const k in languages) {
  console.log(languages[k]);
}

languages.forEach(l => console.log(l));

for (const language of languages) {
  console.log(language);
}

const languages2 = ["Java", "Typescrip", "Go lang"];

console.log(languages.concat(languages2))
console.log([...languages, ...languages2]);


const languages3 =[["Fortran", 1957], ["Lisp", 1958], ["Cobol", 1959]];

const mapLanguages3 = new Map(languages3);

for (const [language, year] of mapLanguages3) {
  console.log(language, year)
}
console.log([...mapLanguages3]);


const languages4set = new Set(["Rust", "Erlang", "Elixir"]);

for (const l of languages4set) {
  console.log(l);
}
console.log([...languages4set]);



const lang = "RUST";
for (const l of lang) {
  console.log(l);
}
console.log([...lang])


const iterator = languages[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


const iterator2 = mapLanguages3[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());



const entries = mapLanguages3.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());


const keys = mapLanguages3.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());


const values = mapLanguages3.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

console.log("========================================")

const se = languages4set.entries();
console.log(se.next());
console.log(se.next());
console.log(se.next());
console.log(se.next());
console.log("========================================")

const sv = languages4set.values();
console.log(sv.next());
console.log(sv.next());
console.log(sv.next());
console.log(sv.next());
console.log("========================================")

const l = 'RUST';
string_it = l[Symbol.iterator]();
console.log(string_it.next());
console.log(string_it.next());
console.log(string_it.next());
console.log(string_it.next());
console.log(string_it.next());



function createIterable (...languages) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < languages.length) {
            return {
              value: languages[i++],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    }
  }
  
}

const lite = createIterable("Fortran", "Lisp", "CObol");
// console.log(lite.next())
// console.log(lite.next())
// console.log(lite.next())
// console.log(lite.next())
// console.log(lite.next())

for (const l of lite) {
  console.log(l);
}
console.log([...lite])