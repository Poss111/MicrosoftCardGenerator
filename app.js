import * as Temp from 'adaptivecards-templating';
import * as fs from 'fs';

// Define a template payload

// Create a Template instance from the template payload

var templateFile = JSON.parse(
  fs.readFileSync('AdaptiveCard-Template.json', 'utf-8')
);
var templatePayload = JSON.parse(
  fs.readFileSync('AdaptiveCard-Payload.json', 'utf-8')
);
var template = new Temp.default.Template(templateFile);

// Expand the template with your `$root` data object.
// This binds it to the data and produces the final Adaptive Card payload
var cardPayload = template.expand({
  $root: templatePayload,
});
console.log(cardPayload);
fs.writeFileSync('AdaptiveCard-Output.json', JSON.stringify(cardPayload));

// document.getElementById('exampleDiv').appendChild(adaptiveCard.render());
