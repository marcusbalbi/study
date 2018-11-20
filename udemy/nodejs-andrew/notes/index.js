const fs = require('fs')

const addNote = (note = { title: '', description: '' }) => {
  let notes = readNotes()
  notes.push(note)
  writeNotes(notes)
}

const readNotes = () => {
  let file = fs.readFileSync('notes.json')

  return JSON.parse(file)
}

const writeNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

// addNote({ title: 'Aniversario', description: 'Aniversario do Gabriel' })


let args = process.argv

let title = args[2]
let description = args[3]

addNote({title, description})
console.log(readNotes())