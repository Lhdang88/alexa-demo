module.exports = (text) => {
  text = text.replace(/[rR]/g, 'l');
  text = text.replace(/\bDie\b|\bdie\b/g, Math.random() > 0.5 ? 'der': 'das');
  text = text.replace(/\bDer\b|\bder\b/g, Math.random() > 0.5 ? 'die': 'das');
  text = text.replace(/\bDas\b|\bdas\b/g, Math.random() > 0.5 ? 'der': 'die');
  text = text.replace(/[nN]\b/g, '');
  return text;
};
