module.exports = {
  requirePeer(name) {
    try {
      return require(name);
    } catch (err) {
      return null;
    }
  },
};
