module.exports = function(source) {
  
  return source.replace(/>\s{0,}</g,"><")
    .replace(/\s{0,}\/>/g,"/>");
} 
