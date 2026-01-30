const cards = document.getElementById('cards');
const cta = document.getElementById('cta');

const sample = [
  {title:'Fast API',desc:'A tiny, fast API endpoint example.'},
  {title:'Placeholder',desc:'Lorem ipsum content for layout testing.'},
  {title:'Widget',desc:'Small interactive piece for demos.'},
  {title:'Another Card',desc:'More sample text to fill space.'}
];

function renderCards(){
  cards.innerHTML = '';
  for(const c of sample){
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p><small>Updated: ${new Date().toLocaleDateString()}</small>`;
    cards.appendChild(el);
  }
}

cta.addEventListener('click',()=>{
  alert('Button clicked — this is a demo!');
});

renderCards();
