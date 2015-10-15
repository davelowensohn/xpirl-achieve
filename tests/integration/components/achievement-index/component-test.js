import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('achievement-index', 'Integration | Component | achievement index', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{achievement-index}}`);

  // assert.equal(this.$().text().trim(), '');
  //
  // // Template block usage:
  // this.render(hbs`
  //   {{#achievement-index}}
  //     template block text
  //   {{/achievement-index}}
  // `);

  assert.equal(this.$('.achievement-index').length, 1);

  // assert.equal(this.$().text().trim(), 'template block text');
});
