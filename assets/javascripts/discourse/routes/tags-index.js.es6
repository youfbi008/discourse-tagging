export default Discourse.Route.extend({
  renderTemplate() {
    this.render("navigation/categories", { outlet: "navigation-bar" });
  },
  
  beforeModel() {
    this.controllerFor("navigation/categories").set("filterMode", "categories");
  },
  
  model() {
    return this.store.findAll('tag');
  },
  
  setupController(controller, model) {

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
