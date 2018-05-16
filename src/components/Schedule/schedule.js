const BREAK = 'break'
const KEYNOTE = 'keynote'
const MEAL = 'meal'
const TALK = 'talk'
const WORKSHOP = 'workshop'

const schedule = {
  entries: [
    {
      end: '9:30 am',
      start: '8:30 am',
      title: 'Check-In / Breakfast',
      type: MEAL,
    },
    {
      details: 'CEO & Co-Founder @ Kolide',
      end: '10:00 am',
      speaker: 'Jason Meller',
      start: '9:30 am',
      title: 'Introduction',
      topic: 'Welcome!',
      type: TALK,
    },
  ],
}

export default schedule
