module.exports = (text) => {
  text = text.replace(/[sS]/g, 'sch');
  text = text.replace(/\bnein\b|\bNein\b/g, 'noi');
  text = text.replace(/\bDer\b|\bder\b/g, 'da');
  text = text.replace(/\bnicht\b|\bNicht\b/g, 'ned');
  text = text.replace(/\bwir\b|\bWir\b/g, 'mir');
  text = text.replace(/en\b/g, 'e');
  text = text.replace(/ei/g, 'oi');
  return text;
};
