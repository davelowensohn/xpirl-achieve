import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.findAll('achievement');
  },

  actions: {
    createAchievement: function(model) {
      let achievement = this.store.createRecord('achievement', {
      name: model.name,
      description: model.description,
      createdDate: new Date()
    });
    achievement.save();
    }
  }
});
