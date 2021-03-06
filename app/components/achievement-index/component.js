import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'achievement-index',

  actions: {
    destroyAchievement: function(doomedAchievement) {
      this.sendAction('destroyAchievement', doomedAchievement);
    }
  }
});
