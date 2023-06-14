const dinnerPartyGuests = [
    'Elvis Presley', 
    'The Queen of England',
    'Alan Turing', 
    'Nelson Mandela', 
    'Mahatma Gandhi', 
    'Aristotle',
    'Albert Einstein'
    ]
const guestEl = document.getElementById('guest')
    function guests(partyGuests){
        let guestList = ''
        for(let partyGuest of partyGuests){
            guestList += `<p>${partyGuest}</p>`
        }
        guestEl.innerHTML = guestList
    }
    guests(dinnerPartyGuests)