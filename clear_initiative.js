on('ready',()=>{
    on('chat:message',(msg)=>{
      if('api'===msg.type && /!clear\b/i.test(msg.content) && playerIsGM(msg.playerid)){
        var turnorder;
        if(Campaign().get("turnorder") == "") turnorder = [];
        else turnorder = JSON.parse(Campaign().get("turnorder"));
        turnorder.forEach(turn => turn.pr='');        
        Campaign().set("turnorder", JSON.stringify(turnorder));
      }
    });
  });