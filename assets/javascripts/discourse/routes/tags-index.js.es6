export default Discourse.Route.extend({
  renderTemplate() {
    const controller = this.controllerFor('tags.index');
    this.render("navigation/categories", { outlet: "navigation-bar" });
    this.render('tags.index', { controller });
  },
  
  beforeModel() {
    this.controllerFor("navigation/categories").set("filterMode", "tags");
  },
  
  model() {
    return this.store.findAll('tag');
  },
  
  setupController(controller, model) {
    this.controllerFor('tags.index').setProperties({
      model,
      tag: model,
      category: this.get('category'),
      filterMode: this.get('filterMode'),
    });
    
    this.controllerFor("navigation/categories").setProperties({
      canCreateCategory: model.get("can_create_category"),
      canCreateTopic: model.get("can_create_topic"),
    });
  },


  actions: {
    didTransition() {
      this.controllerFor("application").set("showFooter", true);
      return true;
    }
  }
});
