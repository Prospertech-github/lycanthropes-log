console.log('LYCANTHROPE\'S LOG');
console.log('---- Let\'s keep record of your daily events to determine when you transform to a Werewolf');
console.log('\n');

let transformationOutcomes = [];
let numberOFTransforms = 0;
let numberOFNotTransforms = 0;
let daysOfTranformations = [];
let daysOfNotTranformations = [];

class DailyRecordings {

  constructor(day) {
    this.day = day;
    this.dailyEvents = []
  }

  getDailyActivities() {
    while (true) {
      let event = prompt('Enter an event that occurred today');
      if (event === '') {
        console.log('Please enter an event that occurred today')
        continue;
      } else if (event === 'end') {
        break;
      }
      this.dailyEvents.push(` ${event} `);
    }
    return this;
  }

  getOutcomeOfTransformations() {
    let events = this.dailyEvents.map(event => event.trim().toLowerCase());

    if (events.includes('chicken')) {
      transformationOutcomes.push(`You transformed to a werewolf on ${this.day} because you ate chicken`);
      numberOFTransforms++;
      daysOfTranformations.push(this.day);
    } else {
      transformationOutcomes.push(`You didn\'t transform on ${this.day}.`);
      numberOFNotTransforms++;
      daysOfNotTranformations.push(this.day);
    }
  }
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (i = 0; i < weekdays.length; i++) {
  weekdays[i] = new DailyRecordings(weekdays[i]);
}

let counterOfdays = 0;
for (i = 0; i < weekdays.length; i++) {
  console.log(`---- Enter the events of ${weekdays[i].day}. INPUT "end" whenever you are done with the events of the day`)
  weekdays[i].getDailyActivities().getOutcomeOfTransformations();

  const end = prompt('If you would like to move to the next day? Enter \'y\' for YES and \'n\' for NO')
  counterOfdays++;
  if (end.toLocaleLowerCase() === 'y') {
    console.log('=============================================================');
    continue;
  } else {
    break;
  }
}

console.log('YOUR TRANSFORMATION DETAILS ARE:')

for (i = 0; i < transformationOutcomes.length; i++) {
  console.log(transformationOutcomes[i]);
  console.log(`Your activities for ${weekdays[i].day} are: [${weekdays[i].dailyEvents}]`);

  console.log('\n \n');
}

console.log('==================================================================');
console.log('Number of Transformations: ' + numberOFTransforms);
console.log(`Days: [${daysOfTranformations}]`);

console.log('==================================================================');
console.log('Number of zero transformations: ' + numberOFTransforms);
console.log(`Days: [${daysOfTranformations}]`);
