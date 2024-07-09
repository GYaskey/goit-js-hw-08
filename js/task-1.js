const cat = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${cat.length}`);

cat.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const size = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${size}`);
});
