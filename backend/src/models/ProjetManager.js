const AbstractManager = require("./AbstractManager");
const CategoryManager = require("./CategoryManager");

class ProjetManager extends AbstractManager {
  static table = "projet";

  findAll(category) {
    return this.connection.query(
      `select projet.id, projet.name, projet.detail, projet.image, category.name as category from ${ProjetManager.table} inner join ${CategoryManager.table} on projet.category_id = category.id`,
      [category]
    );
  }

  find(id) {
    return this.connection.query(
      `select projet.id, projet.name, projet.detail, projet.image, category.name as category from ${ProjetManager.table} inner join ${CategoryManager.table} on projet.category_id = category.id where projet.id = ?`,
      [id]
    );
  }

  insert(projet) {
    return this.connection.query(
      `insert into ${ProjetManager.table} (name, category_id, detail, image) values (?, ?, ?, ?)`,
      [projet.name, projet.categoryProjet, projet.detail, projet.image]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjetManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjetManager;
