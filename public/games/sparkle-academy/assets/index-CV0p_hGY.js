(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const T="sparkle_academy_save_v1",g={bunny:{id:"bunny",name:"Sparkle Bunny",icon:"🐰",color:"#FFB6C1",description:"Sweet, bouncy, and loves fresh carrots!"},kitty:{id:"kitty",name:"Starlight Kitty",icon:"🐱",color:"#C7D2FE",description:"Playful, purry, and chases starbeams!"},puppy:{id:"puppy",name:"Sunny Puppy",icon:"🐶",color:"#FDE68A",description:"Friendly, loyal, and full of joyful energy!"}},w=[{id:"tiara",name:"Magic Tiara",slot:"head",icon:"👑",cost:0,desc:"A glittering golden royal tiara."},{id:"party_hat",name:"Party Hat",slot:"head",icon:"🥳",cost:4,desc:"Colorful polka-dot party cone."},{id:"flower_wreath",name:"Flower Crown",slot:"head",icon:"🌸",cost:6,desc:"Woven with gentle pink cherry blossoms."},{id:"wizard_hat",name:"Star Wizard",slot:"head",icon:"🧙",cost:10,desc:"Deep violet hat with golden star patches."},{id:"cape",name:"Hero Cape",slot:"neck",icon:"🦸",cost:5,desc:"Brave fluttery crimson superhero cape."},{id:"scarf",name:"Rainbow Scarf",slot:"neck",icon:"🧣",cost:7,desc:"Cozy knitted scarf with all rainbow stripes."},{id:"star_glasses",name:"Star Shades",slot:"glasses",icon:"👓",cost:4,desc:"Cool shiny golden star sunglasses."},{id:"wand",name:"Magic Wand",slot:"hand",icon:"🪄",cost:8,desc:"Star wand that sprinkles fairy dust."}],S=[{id:"welcome_star",name:"New Student",icon:"🌟",desc:"Welcome to Sparkle Academy!"},{id:"chef_hat",name:"Master Baker",icon:"🧁",desc:"Counted delicious bakery treats."},{id:"gem_finder",name:"Gem Matcher",icon:"💎",desc:"Found all the matching rainbow pairs."},{id:"bridge_builder",name:"Bridge Builder",icon:"🌈",desc:"Solved tricky rainbow stone patterns."},{id:"word_wizard",name:"Word Wizard",icon:"🔤",desc:"Popped letter balloons to build words."},{id:"pet_stylist",name:"Stylist Star",icon:"🎀",desc:"Dressed your pet companion in style."}],y={version:1,stars:6,currentPet:"bunny",unlockedItems:["tiara"],equipped:{head:"tiara",neck:"none",glasses:"none",hand:"none"},unlockedStickers:["welcome_star"],stats:{countingPlayed:0,memoryPlayed:0,patternsPlayed:0,phonicsPlayed:0,totalCorrect:0},settings:{soundEnabled:!0,voiceEnabled:!0}};class C{constructor(){this.listeners=new Map,this.state=this.loadState()}loadState(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(T);if(t){const e=JSON.parse(t);return{...y,...e,equipped:{...y.equipped,...e.equipped||{}},stats:{...y.stats,...e.stats||{}},settings:{...y.settings,...e.settings||{}}}}}}catch(t){console.warn("SparkleAcademy: Could not access localStorage, falling back to memory store.",t)}return JSON.parse(JSON.stringify(y))}saveState(){try{typeof localStorage<"u"&&localStorage.setItem(T,JSON.stringify(this.state))}catch(t){console.warn("SparkleAcademy: Failed to persist state to localStorage.",t)}this.emit("change",this.state)}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.listeners.get(t).delete(e)}emit(t,e){this.listeners.has(t)&&this.listeners.get(t).forEach(i=>{try{i(e)}catch(s){console.error("State event error:",s)}})}getState(){return this.state}addStars(t){typeof t!="number"||t<=0||(this.state.stars+=t,this.saveState(),this.emit("starsAdded",{amount:t,total:this.state.stars}))}spendStars(t){return this.state.stars>=t?(this.state.stars-=t,this.saveState(),this.emit("starsSpent",{amount:t,total:this.state.stars}),!0):!1}setPet(t){g[t]&&(this.state.currentPet=t,this.saveState(),this.emit("petChanged",t))}unlockItem(t){const e=w.find(i=>i.id===t);return e?this.state.unlockedItems.includes(t)?!0:this.spendStars(e.cost)?(this.state.unlockedItems.push(t),this.checkStickerUnlock("pet_stylist"),this.saveState(),this.emit("itemUnlocked",e),!0):!1:!1}equipItem(t,e){return e==="none"||this.state.unlockedItems.includes(e)?(this.state.equipped[t]=e,this.saveState(),this.emit("itemEquipped",{slot:t,itemId:e}),!0):!1}unequipItem(t){this.state.equipped[t]="none",this.saveState(),this.emit("itemEquipped",{slot:t,itemId:"none"})}checkStickerUnlock(t){if(!this.state.unlockedStickers.includes(t)){const e=S.find(i=>i.id===t);e&&(this.state.unlockedStickers.push(t),this.emit("stickerUnlocked",e))}}recordGameComplete(t){const e=`${t}Played`;this.state.stats[e]!==void 0&&this.state.stats[e]++,this.state.stats.totalCorrect++,t==="counting"&&this.checkStickerUnlock("chef_hat"),t==="memory"&&this.checkStickerUnlock("gem_finder"),t==="patterns"&&this.checkStickerUnlock("bridge_builder"),t==="phonics"&&this.checkStickerUnlock("word_wizard"),this.saveState()}toggleSound(){return this.state.settings.soundEnabled=!this.state.settings.soundEnabled,this.saveState(),this.emit("settingsChanged",this.state.settings),this.state.settings.soundEnabled}toggleVoice(){return this.state.settings.voiceEnabled=!this.state.settings.voiceEnabled,this.saveState(),this.emit("settingsChanged",this.state.settings),this.state.settings.voiceEnabled}resetAllProgress(){this.state=JSON.parse(JSON.stringify(y)),this.saveState(),this.emit("reset",this.state)}}const c=new C;class A{constructor(){this.ctx=null,this.masterGain=null,this.isUnlocked=!1,this.SCALE_NOTES=[261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25]}init(){if(!(this.ctx||typeof window>"u"))try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.3,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.isUnlocked=!0}catch(t){console.warn("Web Audio API not supported:",t)}}unlock(){this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().then(()=>{this.isUnlocked=!0}).catch(t=>console.warn("Could not resume AudioContext:",t))}isSoundActive(){return c.getState().settings.soundEnabled&&this.ctx}playXylophone(t=0){if(this.unlock(),!!this.isSoundActive())try{const e=this.SCALE_NOTES[Math.min(t,this.SCALE_NOTES.length-1)],i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i);const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e*2.76,i),a.gain.setValueAtTime(.4,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.65),r.gain.setValueAtTime(.12,i),r.gain.exponentialRampToValueAtTime(1e-4,i+.25),s.connect(a),n.connect(r),a.connect(this.masterGain),r.connect(this.masterGain),s.start(i),n.start(i),s.stop(i+.7),n.stop(i+.3)}catch(e){console.warn("Audio playXylophone error:",e)}}playPop(){if(this.unlock(),!!this.isSoundActive())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(650,t),e.frequency.exponentialRampToValueAtTime(120,t+.08),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.08)}catch(t){console.warn("Audio playPop error:",t)}}playBounce(){if(this.unlock(),!!this.isSoundActive())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(220,t),e.frequency.linearRampToValueAtTime(320,t+.1),e.frequency.linearRampToValueAtTime(180,t+.25),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.26)}catch(t){console.warn("Audio playBounce error:",t)}}playMagicSparkle(){if(this.unlock(),!this.isSoundActive())return;[523.25,659.25,783.99,1046.5,1318.51].forEach((e,i)=>{setTimeout(()=>{if(this.isSoundActive())try{const s=this.ctx.currentTime,a=this.ctx.createOscillator(),n=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(e,s),n.gain.setValueAtTime(.2,s),n.gain.exponentialRampToValueAtTime(1e-4,s+.5),a.connect(n),n.connect(this.masterGain),a.start(s),a.stop(s+.5)}catch(s){console.warn("Audio playMagicSparkle error:",s)}},i*60)})}playFanfare(){if(this.unlock(),!this.isSoundActive())return;[{f:523.25,d:.15,wait:0},{f:523.25,d:.15,wait:160},{f:523.25,d:.15,wait:320},{f:659.25,d:.35,wait:480},{f:783.99,d:.5,wait:750}].forEach(e=>{setTimeout(()=>{if(this.isSoundActive())try{const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e.f,i),a.gain.setValueAtTime(.25,i),a.gain.exponentialRampToValueAtTime(.001,i+e.d),s.connect(a),a.connect(this.masterGain),s.start(i),s.stop(i+e.d)}catch{}},e.wait)})}playNomNom(){this.unlock(),this.isSoundActive()&&[0,140].forEach((t,e)=>{setTimeout(()=>{if(this.isSoundActive())try{const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e===0?340:420,i),s.frequency.exponentialRampToValueAtTime(180,i+.1),a.gain.setValueAtTime(.25,i),a.gain.exponentialRampToValueAtTime(.001,i+.1),s.connect(a),a.connect(this.masterGain),s.start(i),s.stop(i+.1)}catch{}},t)})}playCardFlip(){if(this.unlock(),!!this.isSoundActive())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(800,t+.07),i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.08)}catch{}}playTap(){if(this.unlock(),!!this.isSoundActive())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(400,t+.04),i.gain.setValueAtTime(.1,t),i.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.04)}catch{}}}class F{constructor(){this.synth=typeof window<"u"&&window.speechSynthesis?window.speechSynthesis:null,this.preferredVoice=null,this.lastSpokenText="",this.subtitleCallback=null,this.isSpeaking=!1,this.synth&&(this.loadVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){if(!this.synth)return;const t=this.synth.getVoices();this.preferredVoice=t.find(e=>e.lang.startsWith("en")&&(e.name.includes("Natural")||e.name.includes("Samantha")||e.name.includes("Google")||e.name.includes("Jenny")||e.name.includes("Victoria")))||t.find(e=>e.lang.startsWith("en"))||t[0]||null}setSubtitleHandler(t){this.subtitleCallback=t}speak(t,{onEnd:e=null,pitch:i=1.25,rate:s=.95}={}){if(this.lastSpokenText=t,this.subtitleCallback&&this.subtitleCallback(t),!this.synth||!c.getState().settings.voiceEnabled){e&&setTimeout(e,1200);return}try{this.synth.cancel();const a=new SpeechSynthesisUtterance(t);this.preferredVoice&&(a.voice=this.preferredVoice),a.pitch=i,a.rate=s;let n=!1;const r=()=>{n||(n=!0,this.isSpeaking=!1,e&&e())};a.onend=r,a.onerror=r,setTimeout(r,Math.max(2500,t.length*110)),this.isSpeaking=!0,this.synth.speak(a)}catch(a){console.warn("SpeechSynthesis error:",a),e&&e()}}repeatLast(){this.lastSpokenText&&this.speak(this.lastSpokenText)}cancel(){if(this.synth)try{this.synth.cancel()}catch{}this.isSpeaking=!1}}const o=new A,l=new F;class M{constructor(t){this.canvas=t,this.ctx=t?t.getContext("2d"):null,this.particles=[],this.ambientParticles=[],this.animId=null,this.dpr=typeof window<"u"&&window.devicePixelRatio||1,this.width=typeof window<"u"&&window.innerWidth||800,this.height=typeof window<"u"&&window.innerHeight||600,this.isRunning=!1,this.canvas&&(this.resize(),window.addEventListener("resize",()=>this.resize()),this.initAmbient(),this.start())}resize(){this.canvas&&(this.dpr=Math.min(window.devicePixelRatio||1,2),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.ctx&&this.ctx.scale(this.dpr,this.dpr))}initAmbient(){this.ambientParticles=[];const t=Math.min(25,Math.floor(window.innerWidth/50));for(let e=0;e<t;e++)this.ambientParticles.push({x:Math.random()*this.width,y:Math.random()*this.height,size:2+Math.random()*3.5,speedY:-.2-Math.random()*.4,speedX:(Math.random()-.5)*.3,alpha:Math.random(),pulseSpeed:.02+Math.random()*.03,color:["#FFD700","#FF9AA2","#B5EAD7","#C7CEEA","#FFF"][Math.floor(Math.random()*5)]})}start(){if(this.isRunning)return;this.isRunning=!0;const t=()=>{this.render(),this.isRunning&&(this.animId=requestAnimationFrame(t))};this.animId=requestAnimationFrame(t)}stop(){this.isRunning=!1,this.animId&&(cancelAnimationFrame(this.animId),this.animId=null)}confettiBurst(t=this.width/2,e=this.height/2,i=70){const s=["#FF6B81","#FFA502","#2ED573","#1E90FF","#9B59B6","#FFD700","#FF4757"];for(let a=0;a<i;a++){const n=Math.PI*2*a/i+(Math.random()-.5)*.5,r=6+Math.random()*9;this.particles.push({type:"confetti",x:t,y:e,vx:Math.cos(n)*r,vy:Math.sin(n)*r-4,gravity:.25,drag:.96,size:6+Math.random()*6,color:s[Math.floor(Math.random()*s.length)],rotation:Math.random()*360,rotSpeed:(Math.random()-.5)*12,alpha:1,life:0,maxLife:100+Math.random()*50})}}sparkleBurst(t,e,i=18){const s=["#FFD700","#FFF","#FF9FF3","#54A0FF","#FECA57"];for(let a=0;a<i;a++){const n=Math.random()*Math.PI*2,r=2+Math.random()*5;this.particles.push({type:"star",x:t,y:e,vx:Math.cos(n)*r,vy:Math.sin(n)*r-1,gravity:.1,drag:.94,size:4+Math.random()*5,color:s[Math.floor(Math.random()*s.length)],rotation:Math.random()*360,rotSpeed:(Math.random()-.5)*15,alpha:1,life:0,maxLife:45+Math.random()*25})}}addTouchTrail(t,e){Math.random()>.4||this.particles.push({type:"star",x:t+(Math.random()-.5)*10,y:e+(Math.random()-.5)*10,vx:(Math.random()-.5)*1.5,vy:-1-Math.random()*1.5,gravity:.05,drag:.96,size:3+Math.random()*4,color:["#FFD700","#FF9FF3","#54A0FF","#FFFFFF"][Math.floor(Math.random()*4)],rotation:Math.random()*360,rotSpeed:6,alpha:1,life:0,maxLife:30})}drawStar(t,e,i,s,a,n,r,d){let h=Math.PI/2*3,u=e,m=i;const f=Math.PI/s;t.save(),t.globalAlpha=Math.max(0,d),t.fillStyle=r,t.beginPath(),t.moveTo(e,i-a);for(let k=0;k<s;k++)u=e+Math.cos(h)*a,m=i+Math.sin(h)*a,t.lineTo(u,m),h+=f,u=e+Math.cos(h)*n,m=i+Math.sin(h)*n,t.lineTo(u,m),h+=f;t.lineTo(e,i-a),t.closePath(),t.fill(),t.restore()}render(){if(this.ctx){this.ctx.clearRect(0,0,this.width,this.height);for(let t of this.ambientParticles)t.y+=t.speedY,t.x+=t.speedX,t.alpha+=t.pulseSpeed,(t.alpha>1||t.alpha<.1)&&(t.pulseSpeed=-t.pulseSpeed),t.y<-10&&(t.y=this.height+10,t.x=Math.random()*this.width),this.drawStar(this.ctx,t.x,t.y,4,t.size,t.size*.45,t.color,Math.abs(t.alpha));for(let t=this.particles.length-1;t>=0;t--){const e=this.particles[t];if(e.life++,e.x+=e.vx,e.y+=e.vy,e.vy+=e.gravity,e.vx*=e.drag,e.vy*=e.drag,e.rotation+=e.rotSpeed,e.alpha=1-e.life/e.maxLife,e.life>=e.maxLife){this.particles.splice(t,1);continue}e.type==="confetti"?(this.ctx.save(),this.ctx.globalAlpha=Math.max(0,e.alpha),this.ctx.translate(e.x,e.y),this.ctx.rotate(e.rotation*Math.PI/180),this.ctx.fillStyle=e.color,this.ctx.fillRect(-e.size/2,-e.size/4,e.size,e.size*.6),this.ctx.restore()):e.type==="star"&&this.drawStar(this.ctx,e.x,e.y,5,e.size,e.size*.45,e.color,e.alpha)}}}}const b=[{id:"strawberry",name:"strawberry",plural:"strawberries",icon:"🍓"},{id:"blueberry",name:"blueberry",plural:"blueberries",icon:"🫐"},{id:"apple",name:"apple",plural:"apples",icon:"🍏"},{id:"banana",name:"banana",plural:"bananas",icon:"🍌"},{id:"carrot",name:"carrot",plural:"carrots",icon:"🥕"},{id:"cupcake",name:"cupcake",plural:"cupcakes",icon:"🧁"}];class ${constructor(t,e,i){this.container=t,this.onComplete=e,this.particles=i,this.currentMode="counting",this.targetCount=0,this.currentCount=0,this.roundNumber=1,this.maxRounds=3,this.isProcessing=!1,this.hintTimer=null,this.selectedFruit=null,this.additionData=null}start(){this.roundNumber=1,this.startRound()}destroy(){clearTimeout(this.hintTimer),this.container.innerHTML=""}startRound(){clearTimeout(this.hintTimer),this.isProcessing=!1,this.currentCount=0,this.currentMode=this.roundNumber%2===1?"counting":"addition",this.currentMode==="counting"?this.setupCountingRound():this.setupAdditionRound()}setupCountingRound(){this.selectedFruit=b[Math.floor(Math.random()*b.length)],this.targetCount=Math.floor(Math.random()*4)+3;const t=c.getState().currentPet,e=c.getState().currentPet==="bunny"?"Bunny":t==="kitty"?"Kitty":"Puppy",i=this.targetCount===1?this.selectedFruit.name:this.selectedFruit.plural,s=`Can you feed ${this.targetCount} ${i} to ${e}?`;this.renderCountingView(),l.speak(s),this.hintTimer=setTimeout(()=>this.showCountingHint(),7e3)}renderCountingView(){const t=c.getState().currentPet,e=t==="bunny"?"🐰":t==="kitty"?"🐱":"🐶";this.container.innerHTML=`
      <div class="game-arena-content bakery-view">
        <div class="game-header-banner">
          <span class="badge-round">Round ${this.roundNumber} / ${this.maxRounds}</span>
          <h2 class="game-instruction-title">Feed ${this.targetCount} ${this.selectedFruit.plural}!</h2>
        </div>

        <div class="bakery-stage">
          <!-- Hungry Pet & Mixing Bowl -->
          <div class="pet-eater-zone">
            <div class="pet-eater-avatar bounce-gentle" id="petAvatar">${e}</div>
            <div class="mixing-bowl" id="mixingBowl">
              <div class="bowl-counter" id="bowlCounter">${this.currentCount} / ${this.targetCount}</div>
              <div class="bowl-contents" id="bowlContents"></div>
              <div class="bowl-rim">🥣</div>
            </div>
          </div>

          <!-- Fruit Tap Tray -->
          <div class="fruit-tray-container">
            <div class="tray-label">Tap the ${this.selectedFruit.plural}:</div>
            <div class="fruit-tray" id="fruitTray">
              ${Array.from({length:8}).map((s,a)=>`
                <button class="fruit-tap-item" data-idx="${a}" aria-label="${this.selectedFruit.name}">
                  <span class="fruit-emoji">${this.selectedFruit.icon}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".fruit-tap-item").forEach(s=>{s.addEventListener("click",a=>this.handleFruitTap(a.currentTarget))})}handleFruitTap(t){if(this.isProcessing||t.classList.contains("used"))return;clearTimeout(this.hintTimer),this.currentCount++,t.classList.add("used"),o.playXylophone(this.currentCount-1),o.playPop();const e=t.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(e.left+e.width/2,e.top+e.height/2,10);const i=this.container.querySelector("#bowlContents"),s=this.container.querySelector("#bowlCounter"),a=this.container.querySelector("#mixingBowl"),n=this.container.querySelector("#petAvatar");if(i){const r=document.createElement("span");r.className="bowl-fruit pop-in",r.textContent=this.selectedFruit.icon,i.appendChild(r)}s&&(s.textContent=`${this.currentCount} / ${this.targetCount}`),a&&(a.classList.remove("wobble"),a.offsetWidth,a.classList.add("wobble")),n&&(n.classList.add("eating"),setTimeout(()=>n.classList.remove("eating"),400)),l.speak(`${this.currentCount}!`),this.currentCount>=this.targetCount?this.handleCountingSuccess():this.hintTimer=setTimeout(()=>this.showCountingHint(),6e3)}showCountingHint(){const t=this.container.querySelectorAll(".fruit-tap-item:not(.used)");t.length>0&&(t[0].classList.add("hint-pulse"),setTimeout(()=>t[0].classList.remove("hint-pulse"),1800))}handleCountingSuccess(){this.isProcessing=!0,o.playNomNom(),setTimeout(()=>o.playMagicSparkle(),300);const t=this.container.querySelector("#petAvatar");t&&t.classList.add("celebrate-jump"),l.speak(`Yummy! You fed exactly ${this.targetCount} ${this.selectedFruit.plural}! Great job!`),setTimeout(()=>{this.finishOrNextRound()},2200)}setupAdditionRound(){const t=b[Math.floor(Math.random()*3)],e=b[Math.floor(Math.random()*3)+3],i=Math.floor(Math.random()*3)+1,s=Math.floor(Math.random()*3)+1,a=i+s,n=new Set([a]);for(;n.size<3;){const r=Math.max(2,a+(Math.random()>.5?1:-1)*(Math.floor(Math.random()*2)+1));n.add(r)}this.additionData={fruitA:t,fruitB:e,numA:i,numB:s,total:a,choices:Array.from(n).sort(()=>Math.random()-.5)},this.renderAdditionView(),l.speak(`Let's make a smoothie! ${i} ${t.plural} plus ${s} ${e.plural}. How many altogether?`),this.hintTimer=setTimeout(()=>this.showAdditionHint(),7e3)}renderAdditionView(){const{fruitA:t,fruitB:e,numA:i,numB:s,choices:a}=this.additionData;this.container.innerHTML=`
      <div class="game-arena-content addition-view">
        <div class="game-header-banner">
          <span class="badge-round">Round ${this.roundNumber} / ${this.maxRounds}</span>
          <h2 class="game-instruction-title">Smoothie Addition!</h2>
        </div>

        <div class="addition-equation-card">
          <div class="addition-group">
            <div class="group-items">
              ${Array.from({length:i}).map(()=>`<span class="equation-fruit">${t.icon}</span>`).join("")}
            </div>
            <span class="equation-num">${i}</span>
          </div>

          <div class="equation-symbol">+</div>

          <div class="addition-group">
            <div class="group-items">
              ${Array.from({length:s}).map(()=>`<span class="equation-fruit">${e.icon}</span>`).join("")}
            </div>
            <span class="equation-num">${s}</span>
          </div>

          <div class="equation-symbol">=</div>

          <div class="equation-target-slot" id="additionResultSlot">?</div>
        </div>

        <div class="addition-prompt-text">Tap the number that shows how many altogether:</div>

        <div class="addition-choices-grid" id="choicesGrid">
          ${a.map(r=>`
            <button class="addition-choice-btn" data-val="${r}" aria-label="Choice ${r}">
              <span class="choice-number">${r}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".addition-choice-btn").forEach(r=>{r.addEventListener("click",d=>this.handleAdditionChoice(d.currentTarget))})}handleAdditionChoice(t){if(this.isProcessing)return;clearTimeout(this.hintTimer);const e=parseInt(t.getAttribute("data-val"),10),i=this.additionData.total;if(e===i){this.isProcessing=!0,t.classList.add("correct"),o.playXylophone(7),o.playMagicSparkle();const s=this.container.querySelector("#additionResultSlot");s&&(s.textContent=i,s.classList.add("solved"));const a=t.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(a.left+a.width/2,a.top+a.height/2,20),l.speak(`Yes! ${this.additionData.numA} plus ${this.additionData.numB} equals ${i}!`),setTimeout(()=>{this.finishOrNextRound()},2e3)}else t.classList.add("wobble"),o.playBounce(),setTimeout(()=>t.classList.remove("wobble"),500),l.speak("Good try! Count all the fruits together!"),this.hintTimer=setTimeout(()=>this.showAdditionHint(),4e3)}showAdditionHint(){const t=this.container.querySelector(`.addition-choice-btn[data-val="${this.additionData.total}"]`);t&&(t.classList.add("hint-pulse"),setTimeout(()=>t.classList.remove("hint-pulse"),2e3))}finishOrNextRound(){this.roundNumber<this.maxRounds?(this.roundNumber++,this.startRound()):(c.addStars(3),c.recordGameComplete("counting"),this.onComplete&&this.onComplete({title:"Bakery Master Chef! 🧁",message:"You counted all the delicious bakery treats!",starsEarned:3}))}}const v=[{id:"animals",name:"Animal Friends",pairs:[{id:"bunny",label:"Bunny",icon:"🐰"},{id:"kitty",label:"Kitty",icon:"🐱"},{id:"puppy",label:"Puppy",icon:"🐶"},{id:"unicorn",label:"Unicorn",icon:"🦄"},{id:"duck",label:"Duckling",icon:"🐥"},{id:"panda",label:"Panda",icon:"🐼"}]},{id:"shapes",name:"Rainbow Shapes",pairs:[{id:"star",label:"Star",icon:"⭐"},{id:"heart",label:"Heart",icon:"💖"},{id:"gem",label:"Diamond",icon:"💎"},{id:"moon",label:"Moon",icon:"🌙"},{id:"flower",label:"Flower",icon:"🌸"},{id:"clover",label:"Clover",icon:"🍀"}]},{id:"quantities",name:"Numbers & Stars",pairs:[{id:"n2",label:"Two",icon:"2",matchIcon:"⭐⭐"},{id:"n3",label:"Three",icon:"3",matchIcon:"⭐⭐⭐"},{id:"n4",label:"Four",icon:"4",matchIcon:"⭐⭐⭐⭐"},{id:"n5",label:"Five",icon:"5",matchIcon:"⭐⭐⭐⭐⭐"}]}];class B{constructor(t,e,i){this.container=t,this.onComplete=e,this.particles=i,this.cards=[],this.flippedCards=[],this.matchedPairs=0,this.totalPairs=0,this.isLocked=!1,this.hintTimer=null,this.themeIndex=0}start(){this.themeIndex=Math.floor(Math.random()*v.length),this.setupBoard()}destroy(){clearTimeout(this.hintTimer),this.container.innerHTML=""}setupBoard(){clearTimeout(this.hintTimer),this.flippedCards=[],this.matchedPairs=0,this.isLocked=!1;const t=v[this.themeIndex];this.totalPairs=3;const e=[...t.pairs].sort(()=>Math.random()-.5).slice(0,this.totalPairs),i=[];e.forEach((s,a)=>{t.id==="quantities"?(i.push({id:`${s.id}_a`,pairId:s.id,display:s.icon,label:s.label,isMatched:!1}),i.push({id:`${s.id}_b`,pairId:s.id,display:s.matchIcon,label:s.label,isMatched:!1})):(i.push({id:`${s.id}_a`,pairId:s.id,display:s.icon,label:s.label,isMatched:!1}),i.push({id:`${s.id}_b`,pairId:s.id,display:s.icon,label:s.label,isMatched:!1}))}),this.cards=i.sort(()=>Math.random()-.5),this.render(),l.speak(`Find the matching ${t.name}! Tap any card to flip it.`),this.hintTimer=setTimeout(()=>this.showHint(),9e3)}render(){const t=v[this.themeIndex];this.container.innerHTML=`
      <div class="game-arena-content memory-view">
        <div class="game-header-banner">
          <span class="badge-round">${t.name}</span>
          <h2 class="game-instruction-title">Pairs Found: <span id="matchCounter">${this.matchedPairs} / ${this.totalPairs}</span></h2>
        </div>

        <div class="memory-grid grid-3x2" id="memoryGrid">
          ${this.cards.map((i,s)=>`
            <div class="memory-card-wrapper" data-idx="${s}" data-pair="${i.pairId}">
              <div class="memory-card-inner">
                <div class="memory-card-back">
                  <span class="back-star">✨</span>
                </div>
                <div class="memory-card-front">
                  <span class="front-content">${i.display}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".memory-card-wrapper").forEach(i=>{i.addEventListener("click",()=>this.handleCardClick(i))})}handleCardClick(t){if(this.isLocked||t.classList.contains("flipped")||t.classList.contains("matched"))return;clearTimeout(this.hintTimer);const e=parseInt(t.getAttribute("data-idx"),10),i=this.cards[e];t.classList.add("flipped"),o.playCardFlip(),this.flippedCards.push({el:t,data:i}),this.flippedCards.length===2?this.checkPairMatch():this.hintTimer=setTimeout(()=>this.showHint(),8e3)}checkPairMatch(){this.isLocked=!0;const[t,e]=this.flippedCards;if(t.data.pairId===e.data.pairId){this.matchedPairs++,t.el.classList.add("matched"),e.el.classList.add("matched"),o.playXylophone(this.matchedPairs*2),o.playMagicSparkle();const i=e.el.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(i.left+i.width/2,i.top+i.height/2,20);const s=this.container.querySelector("#matchCounter");s&&(s.textContent=`${this.matchedPairs} / ${this.totalPairs}`),l.speak(`Great match! ${t.data.label}!`),this.flippedCards=[],this.isLocked=!1,this.matchedPairs>=this.totalPairs?this.handleGameWin():this.hintTimer=setTimeout(()=>this.showHint(),8e3)}else o.playBounce(),setTimeout(()=>{t.el.classList.remove("flipped"),e.el.classList.remove("flipped"),this.flippedCards=[],this.isLocked=!1,this.hintTimer=setTimeout(()=>this.showHint(),6e3)},1200)}showHint(){const t=this.container.querySelectorAll(".memory-card-wrapper:not(.matched):not(.flipped)");if(t.length>0){const e=t[0];e.classList.add("hint-pulse"),setTimeout(()=>e.classList.remove("hint-pulse"),1500)}}handleGameWin(){this.isLocked=!0,o.playFanfare(),l.speak("Magical memory! You found every single pair!"),c.addStars(3),c.recordGameComplete("memory"),setTimeout(()=>{this.onComplete&&this.onComplete({title:"Memory Star! 💎",message:"You have super sharp eyes and matched all the pairs!",starsEarned:3})},1800)}}const x=[{name:"Rainbow Shapes",tokens:[{id:"red_circle",label:"Circle",icon:"🔴"},{id:"blue_diamond",label:"Diamond",icon:"🔷"},{id:"yellow_star",label:"Star",icon:"⭐"},{id:"pink_heart",label:"Heart",icon:"💖"}]},{name:"Fairy Garden",tokens:[{id:"flower",label:"Flower",icon:"🌸"},{id:"mushroom",label:"Mushroom",icon:"🍄"},{id:"clover",label:"Clover",icon:"🍀"},{id:"butterfly",label:"Butterfly",icon:"🦋"}]},{name:"Sweet Fruits",tokens:[{id:"strawberry",label:"Strawberry",icon:"🍓"},{id:"lemon",label:"Lemon",icon:"🍋"},{id:"grape",label:"Grape",icon:"🍇"},{id:"peach",label:"Peach",icon:"🍑"}]}];class L{constructor(t,e,i){this.container=t,this.onComplete=e,this.particles=i,this.roundNumber=1,this.maxRounds=3,this.patternSequence=[],this.correctToken=null,this.choices=[],this.isProcessing=!1,this.hintTimer=null}start(){this.roundNumber=1,this.startRound()}destroy(){clearTimeout(this.hintTimer),this.container.innerHTML=""}startRound(){clearTimeout(this.hintTimer),this.isProcessing=!1;const t=this.roundNumber===1?"AB":this.roundNumber===2?"AAB":"ABC",e=x[Math.floor(Math.random()*x.length)],i=[...e.tokens].sort(()=>Math.random()-.5);let s=[];if(t==="AB"){const[d,h]=i;s=[d,h,d,h,d],this.correctToken=d}else if(t==="AAB"){const[d,h]=i;s=[d,d,h,d,d,h],this.correctToken=h}else{const[d,h,u]=i;s=[d,h,u,d,h,u],this.correctToken=u}this.patternSequence=s.slice(0,s.length-1);const a=new Set([this.correctToken.id]),n=e.tokens.filter(d=>d.id!==this.correctToken.id);for(let d of n)if(a.add(d.id),a.size>=3)break;this.choices=Array.from(a).map(d=>e.tokens.find(h=>h.id===d)).sort(()=>Math.random()-.5),this.render();const r=c.getState().currentPet==="bunny"?"Bunny":c.getState().currentPet==="kitty"?"Kitty":"Puppy";l.speak(`Help ${r} cross the rainbow river! What stone comes next in the pattern?`),this.hintTimer=setTimeout(()=>this.showHint(),7e3)}render(){const t=c.getState().currentPet,e=t==="bunny"?"🐰":t==="kitty"?"🐱":"🐶";this.container.innerHTML=`
      <div class="game-arena-content pattern-view">
        <div class="game-header-banner">
          <span class="badge-round">Round ${this.roundNumber} / ${this.maxRounds}</span>
          <h2 class="game-instruction-title">Complete the Rainbow Bridge!</h2>
        </div>

        <!-- Rainbow River Bridge Viewport -->
        <div class="river-bridge-scene">
          <div class="island island-left">
            <div class="pet-jumper" id="petJumper">${e}</div>
            <div class="island-grass">🏝️</div>
          </div>

          <div class="bridge-stepping-stones" id="bridgeStones">
            ${this.patternSequence.map((s,a)=>`
              <div class="stone-slot occupied" data-idx="${a}">
                <span class="stone-icon">${s.icon}</span>
              </div>
            `).join("")}
            <div class="stone-slot missing-slot pulse-rainbow" id="missingBridgeSlot">
              <span class="slot-question">?</span>
            </div>
          </div>

          <div class="island island-right">
            <div class="island-chest">🎁</div>
            <div class="island-grass">🏝️</div>
          </div>
        </div>

        <div class="pattern-prompt-text">Choose the stone that comes next:</div>

        <!-- Choices -->
        <div class="pattern-choices-grid" id="patternChoices">
          ${this.choices.map(s=>`
            <button class="pattern-choice-btn" data-id="${s.id}" aria-label="${s.label}">
              <span class="choice-icon">${s.icon}</span>
              <span class="choice-label">${s.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".pattern-choice-btn").forEach(s=>{s.addEventListener("click",()=>this.handleChoice(s))})}handleChoice(t){if(this.isProcessing)return;if(clearTimeout(this.hintTimer),t.getAttribute("data-id")===this.correctToken.id){this.isProcessing=!0,t.classList.add("correct");const i=this.container.querySelector("#missingBridgeSlot");i&&(i.classList.remove("missing-slot","pulse-rainbow"),i.classList.add("occupied","pop-in"),i.innerHTML=`<span class="stone-icon">${this.correctToken.icon}</span>`),o.playXylophone(6),o.playMagicSparkle();const s=i.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(s.left+s.width/2,s.top+s.height/2,25),this.animatePetCrossing()}else t.classList.add("wobble"),o.playBounce(),setTimeout(()=>t.classList.remove("wobble"),500),l.speak("Good try! Look at the stones in order to see what comes next!"),this.hintTimer=setTimeout(()=>this.showHint(),4e3)}animatePetCrossing(){const t=this.container.querySelector("#petJumper");this.container.querySelectorAll(".stone-slot");const e=this.container.querySelector(".island-chest");l.speak(`That's it! ${this.correctToken.label} completes the pattern!`),t&&t.classList.add("hopping-across"),setTimeout(()=>{if(e&&(e.classList.add("pop-open"),e.textContent="🌟",o.playFanfare(),this.particles)){const i=e.getBoundingClientRect();this.particles.confettiBurst(i.left+i.width/2,i.top+i.height/2,40)}},1200),setTimeout(()=>{this.finishOrNextRound()},2400)}showHint(){const t=this.container.querySelector(`.pattern-choice-btn[data-id="${this.correctToken.id}"]`);t&&(t.classList.add("hint-pulse"),setTimeout(()=>t.classList.remove("hint-pulse"),2e3))}finishOrNextRound(){this.roundNumber<this.maxRounds?(this.roundNumber++,this.startRound()):(c.addStars(3),c.recordGameComplete("patterns"),this.onComplete&&this.onComplete({title:"Bridge Builder Star! 🌈",message:"You built the entire rainbow bridge and helped your pet cross safely!",starsEarned:3}))}}const P=[{word:"CAT",icon:"🐱",hint:"A playful furry kitten that purrs"},{word:"SUN",icon:"☀️",hint:"Bright and warm in the sky"},{word:"STAR",icon:"⭐",hint:"Shining high in the night sky"},{word:"FISH",icon:"🐟",hint:"Swimming happily in the water"},{word:"DUCK",icon:"🦆",hint:"Quacking at the pond"},{word:"FROG",icon:"🐸",hint:"Hopping green friend"},{word:"CAKE",icon:"🍰",hint:"Sweet birthday dessert with frosting"},{word:"BIRD",icon:"🐦",hint:"Singing sweet songs in the tree"}];class E{constructor(t,e,i){this.container=t,this.onComplete=e,this.particles=i,this.roundNumber=1,this.maxRounds=3,this.currentWordData=null,this.filledLetters=[],this.isProcessing=!1,this.hintTimer=null,this.balloons=[]}start(){this.roundNumber=1,this.startRound()}destroy(){clearTimeout(this.hintTimer),this.container.innerHTML=""}startRound(){clearTimeout(this.hintTimer),this.isProcessing=!1;const t=[...P].sort(()=>Math.random()-.5);this.currentWordData=t[this.roundNumber-1]||t[0],this.filledLetters=[];const e=this.currentWordData.word.split(""),s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter(n=>!e.includes(n)).sort(()=>Math.random()-.5).slice(0,2),a=[...e,...s].sort(()=>Math.random()-.5);this.balloons=a.map((n,r)=>({id:`balloon_${r}`,char:n,color:["#FF6B81","#FFA502","#2ED573","#1E90FF","#9B59B6","#FF9FF3"][r%6],isPopped:!1})),this.render(),l.speak(`Let's spell ${this.currentWordData.word}! Pop the letter bubbles in order.`),this.hintTimer=setTimeout(()=>this.showHint(),7e3)}render(){const{word:t,icon:e}=this.currentWordData;this.container.innerHTML=`
      <div class="game-arena-content phonics-view">
        <div class="game-header-banner">
          <span class="badge-round">Round ${this.roundNumber} / ${this.maxRounds}</span>
          <h2 class="game-instruction-title">Spell the Word: ${t}</h2>
        </div>

        <div class="phonics-card-area">
          <div class="phonics-illustration pop-in" id="phonicsPicture">${e}</div>

          <!-- Target word slots -->
          <div class="word-slots-container" id="wordSlots">
            ${t.split("").map((s,a)=>`
              <div class="letter-slot ${this.filledLetters[a]?"filled":"empty"}" data-slot="${a}">
                <span class="slot-letter">${this.filledLetters[a]||""}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="balloon-prompt-text">Pop the balloons to find each letter:</div>

        <!-- Floating Balloons Sky -->
        <div class="balloon-sky" id="balloonSky">
          ${this.balloons.map(s=>`
            <button class="balloon-btn ${s.isPopped?"popped":""}" data-id="${s.id}" data-char="${s.char}" style="--b-color: ${s.color};" aria-label="Letter ${s.char}">
              <span class="balloon-shine"></span>
              <span class="balloon-char">${s.char}</span>
              <span class="balloon-knot"></span>
            </button>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".balloon-btn:not(.popped)").forEach(s=>{s.addEventListener("click",()=>this.handleBalloonTap(s))})}handleBalloonTap(t){if(this.isProcessing||t.classList.contains("popped"))return;clearTimeout(this.hintTimer);const e=t.getAttribute("data-char"),i=this.filledLetters.length,s=this.currentWordData.word[i];if(e===s){t.classList.add("popped"),o.playPop();const a=t.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(a.left+a.width/2,a.top+a.height/2,18),this.filledLetters.push(e),o.playXylophone(this.filledLetters.length+2);const n=this.container.querySelector(`.letter-slot[data-slot="${i}"]`);n&&(n.classList.remove("empty"),n.classList.add("filled","pop-in"),n.querySelector(".slot-letter").textContent=e),l.speak(`${e}!`),this.filledLetters.length===this.currentWordData.word.length?this.handleWordComplete():this.hintTimer=setTimeout(()=>this.showHint(),6e3)}else t.classList.add("wobble"),o.playBounce(),setTimeout(()=>t.classList.remove("wobble"),500),l.speak(`That is ${e}! Next we need ${s}. Look for ${s}!`),this.hintTimer=setTimeout(()=>this.showHint(),4e3)}showHint(){const t=this.currentWordData.word[this.filledLetters.length];if(!t)return;const e=this.container.querySelector(`.balloon-btn:not(.popped)[data-char="${t}"]`);e&&(e.classList.add("hint-pulse"),setTimeout(()=>e.classList.remove("hint-pulse"),2e3))}handleWordComplete(){this.isProcessing=!0,o.playMagicSparkle(),o.playFanfare();const t=this.container.querySelector("#phonicsPicture");t&&t.classList.add("celebrate-jump"),this.particles&&this.particles.confettiBurst(window.innerWidth/2,window.innerHeight*.4,45),l.speak(`Amazing! You spelled ${this.currentWordData.word}! ${this.currentWordData.hint}!`),setTimeout(()=>{this.finishOrNextRound()},2500)}finishOrNextRound(){this.roundNumber<this.maxRounds?(this.roundNumber++,this.startRound()):(c.addStars(3),c.recordGameComplete("phonics"),this.onComplete&&this.onComplete({title:"Word Wizard Star! 🔤",message:"You read and spelled all the magical words!",starsEarned:3}))}}class R{constructor(t,e,i){this.container=t,this.onExit=e,this.particles=i,this.activeTab="wardrobe",this.stateUnsub=null}start(){this.render(),this.stateUnsub=c.on("change",()=>this.render()),l.speak("Welcome to your Pet Dressing Room! Try on magical hats and capes!")}destroy(){this.stateUnsub&&this.stateUnsub(),this.container.innerHTML=""}render(){const t=c.getState(),e=g[t.currentPet];this.container.innerHTML=`
      <div class="dressing-room-layout">
        <!-- Left: Pet Stage & Pet Selection -->
        <div class="pet-stage-panel">
          <div class="pet-selection-tabs">
            ${Object.values(g).map(i=>`
              <button class="pet-tab-btn ${i.id===t.currentPet?"active":""}" data-pet="${i.id}" aria-label="${i.name}">
                <span class="pet-tab-icon">${i.icon}</span>
                <span class="pet-tab-name">${i.name.split(" ")[1]}</span>
              </button>
            `).join("")}
          </div>

          <div class="pet-mannequin-container" id="petMannequin">
            ${this.renderPetSVG(t.currentPet,t.equipped)}
            <div class="pet-petting-hint">✨ Tap your pet to pet them!</div>
          </div>

          <div class="pet-name-plate">
            <span class="plate-title">${e.name}</span>
            <span class="plate-desc">${e.description}</span>
          </div>
        </div>

        <!-- Right: Wardrobe Closet & Sticker Diary -->
        <div class="wardrobe-panel">
          <div class="wardrobe-nav-tabs">
            <button class="wardrobe-tab-btn ${this.activeTab==="wardrobe"?"active":""}" id="tabWardrobe">
              👗 Magical Wardrobe
            </button>
            <button class="wardrobe-tab-btn ${this.activeTab==="stickers"?"active":""}" id="tabStickers">
              📖 Sticker Diary
            </button>
          </div>

          <div class="wardrobe-content-area" id="wardrobeContent">
            ${this.activeTab==="wardrobe"?this.renderWardrobeItems(t):this.renderStickerDiary(t)}
          </div>
        </div>
      </div>
    `,this.attachEvents()}attachEvents(){this.container.querySelectorAll(".pet-tab-btn").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-pet");c.setPet(a),o.playNomNom(),l.speak(`Say hello to ${g[a].name}!`)})});const t=this.container.querySelector("#petMannequin");t&&t.addEventListener("click",s=>{const a=t.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(a.left+a.width/2,a.top+a.height/2,15),o.playPop(),o.playNomNom();const n=t.querySelector(".pet-svg");n&&(n.classList.add("wobble"),setTimeout(()=>n.classList.remove("wobble"),500));const r=["Purrrr! So cozy!","Woof! You are my best friend!","Squeak! I love you!"];l.speak(r[Math.floor(Math.random()*r.length)])});const e=this.container.querySelector("#tabWardrobe"),i=this.container.querySelector("#tabStickers");e&&e.addEventListener("click",()=>{this.activeTab="wardrobe",o.playTap(),this.render()}),i&&i.addEventListener("click",()=>{this.activeTab="stickers",o.playTap(),this.render()}),this.container.querySelectorAll(".wardrobe-item-card").forEach(s=>{const a=s.querySelector(".item-action-btn");a&&a.addEventListener("click",n=>{n.stopPropagation();const r=a.getAttribute("data-id"),d=a.getAttribute("data-unlocked")==="true",h=a.getAttribute("data-equipped")==="true",u=a.getAttribute("data-slot");if(h)c.unequipItem(u),o.playTap();else if(d)c.equipItem(u,r),o.playMagicSparkle();else{const m=w.find(f=>f.id===r);if(m)if(c.getState().stars>=m.cost){if(c.unlockItem(r),c.equipItem(u,r),o.playFanfare(),this.particles){const f=a.getBoundingClientRect();this.particles.confettiBurst(f.left+f.width/2,f.top+f.height/2,35)}l.speak(`Yay! You unlocked the ${m.name}! It looks dazzling!`)}else a.classList.add("wobble"),o.playBounce(),setTimeout(()=>a.classList.remove("wobble"),500),l.speak(`You need ${m.cost} stars for the ${m.name}! Play a mini-game to earn more stars!`)}})}),this.container.querySelectorAll(".sticker-item-card.unlocked").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-id"),n=S.find(r=>r.id===a);n&&(o.playMagicSparkle(),l.speak(`${n.name}! ${n.desc}`))})})}renderWardrobeItems(t){return`
      <div class="wardrobe-grid">
        ${w.map(e=>{const i=t.unlockedItems.includes(e.id),s=t.equipped[e.slot]===e.id,a=t.stars>=e.cost;return`
            <div class="wardrobe-item-card ${s?"equipped":""} ${i?"unlocked":"locked"}">
              <div class="item-icon-bubble">${e.icon}</div>
              <div class="item-info">
                <span class="item-title">${e.name}</span>
                <span class="item-desc">${e.desc}</span>
              </div>
              <div class="item-action-area">
                ${s?`
                  <button class="item-action-btn unequip" data-id="${e.id}" data-slot="${e.slot}" data-unlocked="true" data-equipped="true">
                    ✓ Wearing
                  </button>
                `:i?`
                  <button class="item-action-btn equip" data-id="${e.id}" data-slot="${e.slot}" data-unlocked="true" data-equipped="false">
                    Put On
                  </button>
                `:`
                  <button class="item-action-btn unlock ${a?"affordable":"unaffordable"}" data-id="${e.id}" data-slot="${e.slot}" data-unlocked="false" data-equipped="false">
                    🌟 ${e.cost}
                  </button>
                `}
              </div>
            </div>
          `}).join("")}
      </div>
    `}renderStickerDiary(t){return`
      <div class="sticker-diary-view">
        <div class="diary-intro">Tap any earned sticker to see your milestone!</div>
        <div class="sticker-album-grid">
          ${S.map(e=>{const i=t.unlockedStickers.includes(e.id);return`
              <div class="sticker-item-card ${i?"unlocked":"locked"}" data-id="${e.id}">
                <div class="sticker-badge ${i?"pop-in":""}">
                  ${i?e.icon:"🔒"}
                </div>
                <span class="sticker-name">${e.name}</span>
                <span class="sticker-desc">${i?e.desc:"Play more to unlock!"}</span>
              </div>
            `}).join("")}
        </div>
      </div>
    `}renderPetSVG(t,e){let i="#FFD1DC",s="#FFB6C1";return t==="kitty"?(i="#C7D2FE",s="#FDA4AF"):t==="puppy"&&(i="#FDE68A",s="#FBCFE8"),`
      <svg class="pet-svg" viewBox="0 0 300 340" width="280" height="320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Soft Gradient Lighting -->
          <radialGradient id="bodyGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.08"/>
          </radialGradient>
          <!-- Shadow Filter -->
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#4A154B" flood-opacity="0.15"/>
          </filter>
        </defs>

        <!-- Ground Soft Shadow -->
        <ellipse cx="150" cy="315" rx="90" ry="16" fill="rgba(0,0,0,0.1)"/>

        <!-- Back Layer: Neck Hero Cape -->
        ${e.neck==="cape"?`
          <path d="M 85,190 Q 50,260 65,300 Q 150,310 235,300 Q 250,260 215,190 Z" fill="#EF4444" filter="url(#softShadow)"/>
          <path d="M 120,220 Q 150,235 180,220 Q 150,300 120,220 Z" fill="#F87171"/>
        `:""}

        <!-- Back Layer: Rainbow Scarf Back Tails -->
        ${e.neck==="scarf"?`
          <path d="M 195,195 Q 225,230 220,270 Q 200,270 185,220 Z" fill="#EC4899"/>
          <path d="M 205,205 Q 235,240 230,280 Q 210,280 195,230 Z" fill="#3B82F6"/>
        `:""}

        <!-- Pet Ears -->
        ${t==="bunny"?`
          <!-- Tall Bunny Ears -->
          <g class="pet-ears bunny-ears">
            <ellipse cx="110" cy="80" rx="20" ry="65" fill="${i}" filter="url(#softShadow)"/>
            <ellipse cx="110" cy="80" rx="11" ry="50" fill="${s}"/>
            <ellipse cx="190" cy="80" rx="20" ry="65" fill="${i}" filter="url(#softShadow)"/>
            <ellipse cx="190" cy="80" rx="11" ry="50" fill="${s}"/>
          </g>
        `:t==="kitty"?`
          <!-- Pointed Kitty Ears -->
          <g class="pet-ears kitty-ears">
            <polygon points="85,115 105,45 135,100" fill="${i}" filter="url(#softShadow)"/>
            <polygon points="95,105 110,60 128,95" fill="${s}"/>
            <polygon points="215,115 195,45 165,100" fill="${i}" filter="url(#softShadow)"/>
            <polygon points="205,105 190,60 172,95" fill="${s}"/>
          </g>
        `:`
          <!-- Floppy Puppy Ears -->
          <g class="pet-ears puppy-ears">
            <ellipse cx="80" cy="130" rx="22" ry="42" transform="rotate(25 80 130)" fill="${i}" filter="url(#softShadow)"/>
            <ellipse cx="80" cy="130" rx="13" ry="30" transform="rotate(25 80 130)" fill="${s}"/>
            <ellipse cx="220" cy="130" rx="22" ry="42" transform="rotate(-25 220 130)" fill="${i}" filter="url(#softShadow)"/>
            <ellipse cx="220" cy="130" rx="13" ry="30" transform="rotate(-25 220 130)" fill="${s}"/>
          </g>
        `}

        <!-- Pet Body -->
        <ellipse cx="150" cy="245" rx="65" ry="65" fill="${i}" filter="url(#softShadow)"/>
        <!-- Soft White Belly -->
        <ellipse cx="150" cy="255" rx="42" ry="46" fill="#FFFFFF" opacity="0.8"/>

        <!-- Pet Feet -->
        <ellipse cx="115" cy="295" rx="22" ry="14" fill="${i}"/>
        <ellipse cx="185" cy="295" rx="22" ry="14" fill="${i}"/>

        <!-- Pet Head -->
        <circle cx="150" cy="140" r="68" fill="${i}" filter="url(#softShadow)"/>

        <!-- Cute Rosy Cheeks -->
        <ellipse cx="105" cy="162" rx="13" ry="8" fill="#FF85A1" opacity="0.55"/>
        <ellipse cx="195" cy="162" rx="13" ry="8" fill="#FF85A1" opacity="0.55"/>

        <!-- Big Sparkling Eyes -->
        <g class="pet-eyes">
          <ellipse cx="120" cy="140" rx="10" ry="13" fill="#2D3748"/>
          <circle cx="117" cy="135" r="4" fill="#FFFFFF"/>
          <circle cx="122" cy="143" r="1.8" fill="#FFFFFF"/>

          <ellipse cx="180" cy="140" rx="10" ry="13" fill="#2D3748"/>
          <circle cx="177" cy="135" r="4" fill="#FFFFFF"/>
          <circle cx="182" cy="143" r="1.8" fill="#FFFFFF"/>
        </g>

        <!-- Cute Little Nose & Sweet Smile -->
        <polygon points="146,155 154,155 150,161" fill="#E11D48"/>
        <path d="M 142,165 Q 150,172 150,163 Q 150,172 158,165" fill="none" stroke="#2D3748" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Pet Paws -->
        <ellipse cx="118" cy="225" rx="15" ry="12" fill="${i}"/>
        <ellipse cx="182" cy="225" rx="15" ry="12" fill="${i}"/>

        <!-- ACCESSORY LAYER: Rainbow Scarf -->
        ${e.neck==="scarf"?`
          <g class="accessory-scarf">
            <path d="M 100,185 Q 150,205 200,185 Q 195,215 150,215 Q 105,215 100,185 Z" fill="#F59E0B" filter="url(#softShadow)"/>
            <path d="M 105,188 Q 150,206 195,188" stroke="#10B981" stroke-width="6" fill="none"/>
            <path d="M 110,192 Q 150,208 190,192" stroke="#3B82F6" stroke-width="5" fill="none"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Star Shades (Glasses) -->
        ${e.glasses==="star_glasses"?`
          <g class="accessory-glasses" filter="url(#softShadow)">
            <!-- Left Star Frame -->
            <polygon points="120,120 124,132 136,132 126,140 130,152 120,144 110,152 114,140 104,132 116,132" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
            <!-- Right Star Frame -->
            <polygon points="180,120 184,132 196,132 186,140 190,152 180,144 170,152 174,140 164,132 176,132" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
            <!-- Bridge -->
            <line x1="136" y1="136" x2="164" y2="136" stroke="#D97706" stroke-width="3"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Magic Tiara (Head) -->
        ${e.head==="tiara"?`
          <g class="accessory-tiara" filter="url(#softShadow)">
            <path d="M 115,85 L 125,65 L 140,78 L 150,55 L 160,78 L 175,65 L 185,85 Q 150,92 115,85 Z" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
            <!-- Ruby Gem in Center -->
            <polygon points="150,65 155,73 150,81 145,73" fill="#EC4899"/>
            <circle cx="125" cy="73" r="3" fill="#3B82F6"/>
            <circle cx="175" cy="73" r="3" fill="#3B82F6"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Party Hat (Head) -->
        ${e.head==="party_hat"?`
          <g class="accessory-party-hat" filter="url(#softShadow)">
            <polygon points="150,20 120,80 180,80" fill="#EC4899"/>
            <!-- Diagonal rainbow stripes -->
            <line x1="130" y1="60" x2="170" y2="60" stroke="#FBBF24" stroke-width="6"/>
            <line x1="140" y1="40" x2="160" y2="40" stroke="#10B981" stroke-width="6"/>
            <!-- Pom-pom on top -->
            <circle cx="150" cy="18" r="8" fill="#F59E0B"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Flower Crown (Head) -->
        ${e.head==="flower_wreath"?`
          <g class="accessory-flower-crown" filter="url(#softShadow)">
            <path d="M 105,82 Q 150,95 195,82" stroke="#10B981" stroke-width="4" fill="none"/>
            <!-- Blossoms -->
            <circle cx="115" cy="80" r="8" fill="#F472B6"/>
            <circle cx="115" cy="80" r="3" fill="#FBBF24"/>
            <circle cx="138" cy="86" r="8" fill="#60A5FA"/>
            <circle cx="138" cy="86" r="3" fill="#FFFFFF"/>
            <circle cx="162" cy="86" r="8" fill="#F472B6"/>
            <circle cx="162" cy="86" r="3" fill="#FBBF24"/>
            <circle cx="185" cy="80" r="8" fill="#FBBF24"/>
            <circle cx="185" cy="80" r="3" fill="#EF4444"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Wizard Hat (Head) -->
        ${e.head==="wizard_hat"?`
          <g class="accessory-wizard-hat" filter="url(#softShadow)">
            <ellipse cx="150" cy="84" rx="48" ry="12" fill="#7C3AED"/>
            <path d="M 125,80 Q 155,10 180,25 Q 160,50 175,80 Z" fill="#6D28D9"/>
            <!-- Star Patch -->
            <polygon points="152,45 154,51 160,51 155,55 157,61 152,57 147,61 149,55 144,51 150,51" fill="#FDE047"/>
          </g>
        `:""}

        <!-- ACCESSORY LAYER: Magic Wand (Hand) -->
        ${e.hand==="wand"?`
          <g class="accessory-wand" filter="url(#softShadow)">
            <line x1="190" y1="230" x2="230" y2="180" stroke="#92400E" stroke-width="4" stroke-linecap="round"/>
            <polygon points="230,172 233,180 241,180 235,185 237,193 230,188 223,193 225,185 219,180 227,180" fill="#FBBF24" stroke="#D97706" stroke-width="1.5"/>
          </g>
        `:""}
      </svg>
    `}}class I{constructor(){this.currentScreen="hub",this.activeGameInstance=null,this.particles=null,this.screens={hub:document.getElementById("hubScreen"),arena:document.getElementById("arenaScreen"),dressing:document.getElementById("dressingScreen")},this.hud={starCount:document.getElementById("hudStarCount"),petAvatar:document.getElementById("hudPetAvatar"),btnHome:document.getElementById("btnHome"),btnSound:document.getElementById("btnSound"),btnVoice:document.getElementById("btnVoice"),btnParent:document.getElementById("btnParent")},this.subtitleBar=document.getElementById("subtitleBar"),this.subtitleText=document.getElementById("subtitleText"),this.btnReplayVoice=document.getElementById("btnReplayVoice"),this.celebrationModal=document.getElementById("celebrationModal"),this.parentModal=document.getElementById("parentModal")}init(){const t=document.getElementById("fxCanvas");t&&(this.particles=new M(t)),l.setSubtitleHandler(i=>this.showSubtitle(i)),this.btnReplayVoice&&this.btnReplayVoice.addEventListener("click",()=>{o.playTap(),l.repeatLast()});const e=()=>{o.unlock(),document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",e)};document.addEventListener("pointerdown",e,{once:!0}),document.addEventListener("keydown",e,{once:!0}),window.addEventListener("pointermove",i=>{this.particles&&this.particles.addTouchTrail(i.clientX,i.clientY)}),this.bindHUD(),this.bindHubPortals(),this.bindModals(),c.on("change",()=>this.updateHUD()),this.updateHUD(),this.showScreen("hub"),l.speak("Welcome to Sparkle Academy! Tap any magical island to play, or visit the dressing room!")}updateHUD(){const t=c.getState();if(this.hud.starCount&&(this.hud.starCount.textContent=t.stars),this.hud.petAvatar){const e=g[t.currentPet];this.hud.petAvatar.textContent=e?e.icon:"🐰"}this.hud.btnSound&&(this.hud.btnSound.textContent=t.settings.soundEnabled?"🔊":"🔇",this.hud.btnSound.setAttribute("aria-label",t.settings.soundEnabled?"Sound On":"Sound Off")),this.hud.btnVoice&&(this.hud.btnVoice.textContent=t.settings.voiceEnabled?"🗣️":"🤫",this.hud.btnVoice.setAttribute("aria-label",t.settings.voiceEnabled?"Voice On":"Voice Off")),this.hud.btnHome&&(this.hud.btnHome.style.display=this.currentScreen==="hub"?"none":"flex")}bindHUD(){this.hud.btnHome&&this.hud.btnHome.addEventListener("click",()=>{o.playTap(),this.showScreen("hub")}),this.hud.btnSound&&this.hud.btnSound.addEventListener("click",()=>{c.toggleSound(),o.playTap()}),this.hud.btnVoice&&this.hud.btnVoice.addEventListener("click",()=>{c.toggleVoice(),o.playTap()}),this.hud.btnParent&&this.hud.btnParent.addEventListener("click",()=>{o.playTap(),this.openParentModal()}),this.hud.petAvatar&&this.hud.petAvatar.addEventListener("click",()=>{o.playTap(),this.showScreen("dressing")})}bindHubPortals(){document.querySelectorAll(".portal-card").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-game");o.playTap(),o.playMagicSparkle();const s=e.getBoundingClientRect();this.particles&&this.particles.sparkleBurst(s.left+s.width/2,s.top+s.height/2,25),this.launchGame(i)})});const t=document.getElementById("dressingPortal");t&&t.addEventListener("click",()=>{o.playTap(),o.playMagicSparkle(),this.showScreen("dressing")})}showSubtitle(t){this.subtitleText&&(this.subtitleText.textContent=t,this.subtitleBar&&(this.subtitleBar.classList.remove("pulse"),this.subtitleBar.offsetWidth,this.subtitleBar.classList.add("pulse")))}showScreen(t){if(this.activeGameInstance&&(this.activeGameInstance.destroy(),this.activeGameInstance=null),l.cancel(),this.currentScreen=t,Object.keys(this.screens).forEach(e=>{this.screens[e]&&this.screens[e].classList.toggle("active",e===t)}),this.updateHUD(),t==="hub")l.speak("Pick a game to earn shiny Magic Stars!");else if(t==="dressing"){const e=document.getElementById("dressingMount");this.activeGameInstance=new R(e,()=>this.showScreen("hub"),this.particles),this.activeGameInstance.start()}}launchGame(t){this.showScreen("arena");const e=document.getElementById("arenaMount"),i=s=>{this.showCelebration(s)};switch(t){case"counting":this.activeGameInstance=new $(e,i,this.particles);break;case"memory":this.activeGameInstance=new B(e,i,this.particles);break;case"patterns":this.activeGameInstance=new L(e,i,this.particles);break;case"phonics":this.activeGameInstance=new E(e,i,this.particles);break;default:console.warn("Unknown game type:",t),this.showScreen("hub");return}this.activeGameInstance.start()}showCelebration({title:t,message:e,starsEarned:i}){if(!this.celebrationModal)return;const s=document.getElementById("celebTitle"),a=document.getElementById("celebMessage"),n=document.getElementById("celebStars");s&&(s.textContent=t),a&&(a.textContent=e),n&&(n.textContent=`+${i} Stars! ⭐`),this.celebrationModal.classList.add("active"),o.playFanfare(),this.particles&&this.particles.confettiBurst(window.innerWidth/2,window.innerHeight*.45,60),l.speak(`${t} ${e} You earned ${i} stars!`)}bindModals(){const t=document.getElementById("btnCelebContinue");t&&t.addEventListener("click",()=>{o.playTap(),this.celebrationModal.classList.remove("active"),this.showScreen("hub")});const e=document.getElementById("btnCloseParent");e&&e.addEventListener("click",()=>{o.playTap(),this.parentModal.classList.remove("active")});const i=document.getElementById("btnResetData");i&&i.addEventListener("click",()=>{const s=prompt("Parents: To reset all game progress, please enter the answer to: 3 x 4 = ?");s&&s.trim()==="12"?(c.resetAllProgress(),o.playPop(),alert("All game progress has been gently reset!"),this.parentModal.classList.remove("active"),this.showScreen("hub")):s!==null&&alert("Incorrect answer. Progress was NOT reset.")})}openParentModal(){const t=c.getState().stats,e=document.getElementById("parentStatsContent");e&&(e.innerHTML=`
        <div class="stats-row"><span>🍎 Bakery Games Played:</span> <strong>${t.countingPlayed}</strong></div>
        <div class="stats-row"><span>💎 Memory Matches Played:</span> <strong>${t.memoryPlayed}</strong></div>
        <div class="stats-row"><span>🌈 Pattern Bridges Solved:</span> <strong>${t.patternsPlayed}</strong></div>
        <div class="stats-row"><span>🔤 Phonics Words Spelled:</span> <strong>${t.phonicsPlayed}</strong></div>
        <div class="stats-row"><span>⭐ Total Magic Stars:</span> <strong>${c.getState().stars}</strong></div>
      `),this.parentModal.classList.add("active")}}window.addEventListener("DOMContentLoaded",()=>{new I().init()});
