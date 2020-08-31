module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss'],
    rules: {
        'no-descending-specificity': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
  }