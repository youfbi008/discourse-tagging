export default Ember.Component.extend({
  tagName: 'a',
  classNameBindings: [':tag-badge-wrapper', ':badge-wrapper', ':bullet'],
  attributeBindings: ['href'],

  href: function() {
    var url = '/tags';
    if (this.get('category')) {
      url += this.get('category.url');
    }
    return url + '/' + this.get('tagId');
  }.property('tagId', 'category'),

  render(buffer) {
    buffer.push(Handlebars.Utils.escapeExpression(this.get('tagId')));
  },

  click(e) {
    e.preventDefault();
    Discourse.URL.routeTo(this.get('href'));
    return true;
  }
});