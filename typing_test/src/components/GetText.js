const GetText= () => {

    const texts = [
      "Do all the good you can, for all the people you can, in all the ways you can, as long as you can."
      + " You can be the most beautiful person in the world and everybody sees light and rainbows when they look at you, but if you yourself don't know it, all of that doesn't even matter. Every second that you spend on doubting your worth, every moment that you use to criticize yourself; is a second of your life wasted, is a moment of your life thrown away. It's not like you have forever, so don't waste any of your seconds, don't throw even one of your moments away."
      + "I have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you're going, but you know that so long as you spread your wings, the winds will carry you.",
  
      "I believe that everything happens for a reason. People change so that you can learn to let go."
      +"Patience Is Not the Ability to Wait, Patience is not the ability to wait. Patience is to be calm no matter what happens, constantly take action to turn it to positive growth opportunities, and have faith to believe that it will all work out in the end while you are waiting."
      + " Life is like riding a bicycle. To keep your balance, you must keep moving."
      ,
  
      "Sing like no one is listening, love like you have never been hurt, dance like nobody is watching, and live like it is heaven on earth."
      +"The biggest wall you have to climb is the one you build in your mind: Never let your mind talk you out of your dreams, trick you into giving up. Never let your mind become the greatest obstacle to success. To get your mind on the right track, the rest will follow."
      + " Life is a succession of lessons which must be lived to be understood."
    ];
  
    return texts[Math.floor(Math.random()*texts.length)];
  
  }

  export default GetText