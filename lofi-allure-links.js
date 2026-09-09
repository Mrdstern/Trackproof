(function(){
  const knownLinks={
    1:'https://suno.com/s/5KsUrnkGqNML0Mqr',
    2:'https://suno.com/s/JB4LqO4TJXkXq3BU',
    3:'https://suno.com/s/wuVupKEHDYZh1i9P',
    4:'https://suno.com/s/qrQ5XTpUPX3ErFJS',
    5:'https://suno.com/s/Smy7tM1Es2kP0HDe',
    6:'https://suno.com/s/mIti9LpZZrTVLFJt',
    7:'https://suno.com/s/MB5fRTqedSBqqnL1',
    8:'https://suno.com/s/hsRdoTVcswkU2I3Y',
    9:'https://suno.com/s/juQB33sYVz7AJL4V',
    10:'https://suno.com/song/8d922f2a-940e-4ab3-83a6-a6061157644f',
    11:'https://suno.com/s/yZf6PmutONNBBXZp',
    12:'https://suno.com/s/ZbI5qUObyDKAjfK9',
    13:'https://suno.com/s/bysvNo9dUvG6kJsb',
    14:'https://suno.com/s/yalpB2ZjSNPcGWbq',
    15:'https://suno.com/s/L7lqSkpzUqRlqlCV',
    19:'https://suno.com/song/279f3fd8-b8dc-45d9-8c4e-996fcecae762',
    20:'https://suno.com/s/Jpa0643YmSakn281',
    21:'https://suno.com/s/Yf5PmgaVQaX8N4vV'
  };
  let changed=0;
  if(typeof state!=='undefined' && state && Array.isArray(state.tracks)){
    state.tracks.forEach(t=>{
      const url=knownLinks[Number(t.number)];
      if(url && !t.sunoUrl){ t.sunoUrl=url; changed++; }
    });
    if(changed){
      localStorage.setItem('trackproof-state',JSON.stringify(state));
      if(typeof renderAll==='function') renderAll();
    }
  }
})();
