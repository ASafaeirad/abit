module.exports = {
  '*.{md,json}': ['prettier --write', 'cspell --no-must-find-files'],
  '*.ts(x)?': ['eslint --fix', 'cspell --no-must-find-files'],
};
