const CONFIG = {
    valentineName: "Blue",
    pageTitle: "Will You Be My Valentine?",
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    }, 
    questions: {
        first: {
            text: "Do you like me?",                                    
            yesBtn: "Yes",                                             
            noBtn: "No",                                               
            secretAnswer: "I don't like you, I love you! ❤️"           
        },
        second: {
            text: "How much do you love me?",                          
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                         
        },
        third: {
            text: "Will you be my Valentine Darling?", 
            yesBtn: "Yes!",                                             
            noBtn: "No"                                                
        }
    },
   loveMessages: {
        extreme: "I still love you most<3",  
        high: "To infinity and beyond! 🚀💝",              
        normal: "And beyond! 🥰"                          
    },  
    celebration: {
        title: "Yay! I'm the luckiest person in the world! ",
        message: "Happy Valentines day my love, I love you",
        emojis: ""  
    },
    colors: {
        backgroundStart: "#EBC7E8",      
        backgroundEnd: "#BFACE0",        
        buttonBackground: "#645CAA",     
        buttonHover: "#A084CA",          
        textColor: "#ff4757"             
    },
        floatDuration: "15s",          
        floatDistance: "50px",          
        bounceSpeed: "0.3s",            
        heartExplosionSize: 1.2         
    },
    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/dqrriq8w9/video/upload/v1739401298/Kuzu_Mellow_-_sunflower_feelings_prod._by_korou_psfc82.mp3", 
        startText: "🎵 Play Music",       
        stopText: "🔇 Stop Music",         
        volume: 0.3                        
    }
};
window.VALENTINE_CONFIG = CONFIG; 
