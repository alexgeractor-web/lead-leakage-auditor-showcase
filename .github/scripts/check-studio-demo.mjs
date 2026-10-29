import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../../studio-platform-preview/index.html',import.meta.url),'utf8');
assert.match(html,/<title>Film Studio Platform/);
assert.match(html,/ALL CONTENT FICTIONAL/);
assert.ok(!html.includes('Rhythm of Life') && !html.includes('Alena Gerasimova'));
assert.ok(!html.includes('SUPABASE_SERVICE_ROLE_KEY') && !html.includes('NETLIFY_AUTH_TOKEN'));
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length,1,'single auditable inline demo script');
const js=scripts[0][1];
new vm.Script(js,{filename:'studio-demo.js'});
const nodes=new Map();
class Node{
 constructor(tag='div'){this.tagName=tag;this.children=[];this.value=tag==='input'?'':'';this.textContent='';this.listeners={};this.style={};}
 appendChild(n){this.children.push(n);return n;}
 replaceChildren(...parts){this.children=parts;}
 addEventListener(name,fn){this.listeners[name]=fn;}
 scrollIntoView(){}
 focus(){}
}
for(const id of ['brandTitle','tagline','filmCards','peopleCards','saveStatus','studioName','studioMission','filmName','filmGenre','teamName','teamRole','theme','newFilm','addFilm','saveDemo','resetDemo','resetTop','jumpEdit','editor'])nodes.set(id,new Node());
nodes.get('theme').value='#d5b08d';
const store=new Map();
const context={
 document:{
   getElementById:id=>nodes.get(id),
   createElement:tag=>new Node(tag),
   documentElement:{style:{setProperty(){}}}
 },
 localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},
 console
};
vm.runInNewContext(js,context,{timeout:2000});
const get=id=>nodes.get(id);
assert.equal(get('brandTitle').textContent,'Northlight Motion');
assert.equal(get('filmCards').children.length,2);
assert.equal(get('peopleCards').children.length,2);
get('studioName').value='Example Films';
get('studioName').listeners.input();
assert.equal(get('brandTitle').textContent,'Example Films');
// An in-progress space must remain in the actual input while the user keeps typing.
get('studioName').value='Example Films ';
get('studioName').listeners.input();
assert.equal(get('studioName').value,'Example Films ','do not erase trailing spaces during input');
get('studioName').value+='Group';
get('studioName').listeners.input();
assert.equal(get('brandTitle').textContent,'Example Films Group');
assert.ok(store.size>0);
get('newFilm').value='Fictional Third Film';
get('addFilm').listeners.click();
assert.equal(get('filmCards').children.length,3);
get('resetDemo').listeners.click();
assert.equal(get('filmCards').children.length,2);
assert.equal(get('brandTitle').textContent,'Northlight Motion');
assert.equal(store.size,0);
console.log('PASS: synthetic white-label editor renders, edits, adds film, stores and resets locally; inline JS syntax valid; no original studio content/secrets present.');
