module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
  ignoreFiles: ["dist/**/*"],
  rules: {
    "no-descending-specificity": null,
    "selector-class-pattern": [
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
    ],
  },
};
