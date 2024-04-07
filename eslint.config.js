module.exports = [
  {
    ignores: ["**/webpack.*.js, dist/*, coverage/*"],
    files: ["packages/package-1/**/*.js"],
    rules: {
      semi: "error",
    },
  },
  {
    ignores: ["**/webpack.*.js, dist/*, coverage/*"],
    files: ["packages/package-2/**/*.js"],
    rules: {
      "no-unused-vars": "error",
    },
  },
];
