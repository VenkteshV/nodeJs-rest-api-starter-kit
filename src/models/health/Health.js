const R = require('ramda');

class Health extends Object {
  static create() {
    const health = new Health();
    return health;
  }

  /**
   * @type {string}
   */
  get status() {
    return this.$status;
  }

  set status(state) {
    this.$status = state;
  }

  /**
   * @type {string}
   */
  get message() {
    return this.$message;
  }

  set message(msg) {
     this.$message = msg;
  }

  /**
   * @type {string}
   */
  get date() {
    return this.$date;
  }

  set date(date) {
    this.$date = date;
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message,
      date: this.date,
    };
  }
}


module.exports = Health;
