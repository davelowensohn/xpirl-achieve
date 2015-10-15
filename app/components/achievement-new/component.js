import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'achievement-new',

  actions: {

    createAchievement: function(newAchievement) {
      this.sendAction('createAchievement', newAchievement);
      this.set('newAchievement.name', null);
      this.set('newAchievement.description', null);
    }
    
  }
});
