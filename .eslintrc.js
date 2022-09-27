module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-patsu`
  extends: ["patsu"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
