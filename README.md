# xpIRL::Achieve

Achievement badge repository & API for xpIRL.

## Roadmap to 1.0

- [ ] Working model for xpIRL achievement object
- [ ] Persistent cloud storage for achievements
- [ ] Working read-only API so third party apps can fetch achievements
- [ ] Economist cover story (ok if hit piece)

## Achievement Model (WIP)

* `questId` - GUID, so every quest in the universe has a unique id
* `questName` - "Silver Gym Rat"
* `questDescription` - "Went to the gym 15 times in a single calendar month"
* `questImage` - attachment for primary badge image
* `questAttachmentArray` - attachments for other badge swag, like photos or audio or pretty much whatever
* `questRewardValue` - How many points it's worth upon completion
* `questRewardUnit` - What kind of points (defaults to universal XP, but this allows different things to keep score differently)
* `questCompletionDate` - Date of completion
* `questIsComplete` - boolean
* `questIsFailed` - boolean
* `questIsLocked` - boolean, locked if questPrevious is failed or incomplete
* `questPreviousArray` - prerequisite quest(s) id, in some kind of data structure that can accommodate and/or relationships (like, "quests 1 & 2, or just quest 3, have to be completed to unlock this one)
* `questNextArray` - id(s) of any quests that get unlocked upon completion of this one

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## TODO & FIXME

* TODO: Upgrade to 1.13.9+ as soon as Ember-CLI allows, to get rid of [deprecation id: ember-htmlbars.make-bound-helper] - https://github.com/emberjs/data/issues/3635
