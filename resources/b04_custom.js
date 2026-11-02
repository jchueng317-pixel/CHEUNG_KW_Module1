
(function(){
  'use strict';
  var catalog = window.B04_PHOTOS || [];
  if (!catalog.length || typeof map === 'undefined' || typeof jsonSource_B04_projectB04_mapped_photos_2 === 'undefined') return;

  var originalMappedFeatures = jsonSource_B04_projectB04_mapped_photos_2.getFeatures().slice();
  var byId = {};
  originalMappedFeatures.forEach(function(f){ byId[String(f.get('照片編號'))] = f; });

  function esc(v){ return String(v == null ? '' : v).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function shownPlace(p){ return p.mapping_status === 'mapped' && p.place ? p.place : '未能定位'; }

  var panel=document.createElement('div'); panel.id='b04-filter-panel';
  panel.innerHTML='<div class="b04-title">東涌歷史照片地圖｜B04（1992）</div><div class="b04-controls">'+
    '<div><label for="b04-place">地點</label><select id="b04-place"></select></div>'+
    '<div><label for="b04-theme">主題／內容</label><select id="b04-theme"></select></div>'+
    '<button id="b04-reset" type="button">重設</button></div><div id="b04-filter-summary"></div>';
  document.body.appendChild(panel);

  var toggle=document.createElement('button'); toggle.id='b04-gallery-toggle'; toggle.type='button'; toggle.textContent='照片瀏覽（34）'; document.body.appendChild(toggle);
  var gallery=document.createElement('section'); gallery.id='b04-gallery';
  gallery.innerHTML='<div id="b04-gallery-inner"><div id="b04-gallery-header"><h2>照片瀏覽</h2><div id="b04-gallery-note">全部 34 張照片均保留；未能定位者不在地圖建立 marker。</div></div><div id="b04-grid"></div></div>';
  document.body.appendChild(gallery);

  var placeSel=document.getElementById('b04-place'), themeSel=document.getElementById('b04-theme');
  function fillSelect(sel, values, allLabel){
    sel.innerHTML='<option value="">'+esc(allLabel)+'</option>';
    values.forEach(function(v){ var o=document.createElement('option'); o.value=v; o.textContent=v; sel.appendChild(o); });
  }
  var places=[]; catalog.forEach(function(p){ var v=shownPlace(p); if(places.indexOf(v)<0) places.push(v); });
  var themes=[]; catalog.forEach(function(p){ var v=p.theme || '未註明'; if(themes.indexOf(v)<0) themes.push(v); });
  fillSelect(placeSel, places, '全部地點'); fillSelect(themeSel, themes, '全部主題');

  function matches(p){
    var pv=placeSel.value, tv=themeSel.value;
    return (!pv || shownPlace(p)===pv) && (!tv || (p.theme || '未註明')===tv);
  }
  function updateMap(filtered){
    var allowed={}; filtered.forEach(function(p){ if(p.mapping_status==='mapped') allowed[p.id]=true; });
    jsonSource_B04_projectB04_mapped_photos_2.clear();
    var keep=originalMappedFeatures.filter(function(f){ return !!allowed[String(f.get('照片編號'))]; });
    jsonSource_B04_projectB04_mapped_photos_2.addFeatures(keep);
  }
  function cardHTML(p){
    var mapped=p.mapping_status==='mapped';
    var place=shownPlace(p);
    var h='<article class="b04-card"><img loading="lazy" src="'+esc(p.image)+'" alt="'+esc(p.id)+'"><div class="b04-card-body">'+
      '<div class="b04-card-title"><span>'+esc(p.id)+'</span><span class="b04-badge '+(mapped?'':'unmapped')+'">'+(mapped?'已定位':'未能定位')+'</span></div>'+
      '<div class="b04-meta"><div><strong>地點：</strong>'+esc(place)+'</div><div><strong>主題／內容：</strong>'+esc(p.theme || '—')+'</div><div><strong>拍攝年份：</strong>'+esc(p.year || '—')+'</div><div><strong>拍攝者：</strong>'+esc(p.photographer || '—')+'</div><div><strong>照片來源：</strong>'+esc(p.source || '—')+'</div></div>';
    if(mapped) h+='<button class="b04-map-link" type="button" data-id="'+esc(p.id)+'">在地圖查看</button>';
    else h+='<div class="b04-unmapped-note">現有資料不足以確認位置，因此此照片保留於照片集，但不在地圖標示。</div>';
    return h+'</div></article>';
  }
  function update(){
    var filtered=catalog.filter(matches);
    updateMap(filtered);
    document.getElementById('b04-grid').innerHTML=filtered.map(cardHTML).join('');
    var mappedCount=filtered.filter(function(p){return p.mapping_status==='mapped';}).length;
    var unmappedCount=filtered.length-mappedCount;
    document.getElementById('b04-filter-summary').textContent='顯示 '+filtered.length+' / 34 張照片（地圖 '+mappedCount+'；未能定位 '+unmappedCount+'）';
    toggle.textContent='照片瀏覽（'+filtered.length+'）';
  }
  placeSel.addEventListener('change',update); themeSel.addEventListener('change',update);
  document.getElementById('b04-reset').addEventListener('click',function(){ placeSel.value=''; themeSel.value=''; update(); });
  toggle.addEventListener('click',function(){ gallery.classList.toggle('open'); toggle.textContent=gallery.classList.contains('open')?'收起照片':'照片瀏覽（'+catalog.filter(matches).length+'）'; });
  document.getElementById('b04-grid').addEventListener('click',function(e){
    var b=e.target.closest('.b04-map-link'); if(!b) return;
    var f=byId[b.getAttribute('data-id')]; if(!f) return;
    var geom=f.getGeometry(); if(geom){ gallery.classList.remove('open'); map.getView().animate({center:geom.getCoordinates(),zoom:20,duration:500}); toggle.textContent='照片瀏覽（'+catalog.filter(matches).length+'）'; }
  });

  // Historical raster opacity control. Raster layers remain independently switchable in Layers.
  var rasterLayers = [lyr_map_1967,lyr_map_1972,lyr_map_1978_sep,lyr_map_1978_dec,lyr_aerial_1982_w,lyr_aerial_1982_e];
  var opacityBox=document.createElement('div'); opacityBox.id='b04-opacity-control';
  opacityBox.innerHTML='<label for="b04-opacity">歷史影像透明度 <span id="b04-opacity-value">65%</span></label><input id="b04-opacity" type="range" min="10" max="100" value="65" step="5">';
  document.body.appendChild(opacityBox);
  document.getElementById('b04-opacity').addEventListener('input',function(){
    var v=Number(this.value)/100; rasterLayers.forEach(function(l){l.setOpacity(v);});
    document.getElementById('b04-opacity-value').textContent=this.value+'%';
  });
  update();
})();
