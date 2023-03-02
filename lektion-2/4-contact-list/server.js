const express = require('express');
const path = require('path');
const fs = require('fs');
// const cors = require('cors')

// Initialiserar en instans av Express
const app = express()

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('server running: http://localhost:' + PORT))

// Hanterar hur parametrat i url bla ska encodas
app.use(express.urlencoded({ extended: false }))
// Gör så att vi kan skicka och ta emot json
app.use(express.json())
// app.use(cors())

// Bygger en webbserver automagiskt
app.use(express.static(path.join(__dirname, 'public')))


// Detta körs när vi gör en post mot /api/add
app.post('/api/add', (req, res) => {
  // Hämta hem och konvertera om våran json fil till en js array
const contacts = JSON.parse(fs.readFileSync(path.join(__dirname, 'local_db.json')))

const newContact = req.body // Eftersom vi använder express.json() så behöver vi inte konvertera om body till js, det sker automagiskt

//Lägg till den nya kontakten i arrayen
contacts.push(newContact)

// Skriver över local_db.json med contacts samtidigt som vi konverterar contacts till JSON
fs.writeFileSync(path.join(__dirname, 'local_db.json'), JSON.stringify(contacts))

res.json(newContact)
})



// Detta körs när vi gör en GET mot /api/contacts
app.get('/api/contacts', (req, res) => {

  // Läser in local_db.json och sparar i en contacts variabel
  const contacts = fs.readFileSync(path.join(__dirname, 'local_db.json'))

  res.end(contacts)
})