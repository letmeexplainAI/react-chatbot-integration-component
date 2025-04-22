import { useEffect } from "react";

const ChatbotAssets = () => {
    useEffect(() => {
         // MathJax script
        window.MathJax = {
            loader: { load: ['[tex]/ams'] }, 
            tex: { packages: { '[+]': ['ams'] } },
            chtml: {
              fontURL: '/mathjax-fonts/woff-v2' 
            }
        };
      
        import('mathjax/es5/tex-mml-chtml.js')
            .then(() => window.MathJax.startup.promise)
            .then(() => window.MathJax.typesetPromise())
            .catch(err => console.error(err));
     

        const letmeScriptUrl ="https://dashboard.letmeexplain.ai/embed/lme_chatbot_widget.js";
        new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${letmeScriptUrl}"]`)) {
            resolve(); // Script is already loaded
            return;
        }
        const script = document.createElement("script");
        script.src = letmeScriptUrl;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
        })
        .then(() => {
            if (window.loadCustomWidget) {
            window.loadCustomWidget({ orgId: "8aefbd35-28f0-43" });
            }
        })
        .catch((err) =>
            console.error("Failed to load LetMeExplain widget script", err)
        );


        return () => {
        
            const chatbotElement = document.querySelector("#chatbot-container"); // Replace with actual chatbot ID/class
            if (chatbotElement) {
                chatbotElement.style.display = "none"; // Hides the chatbot instead of removing the script
            }
  
        };
        
    }, []);

    

    return null; // This component does not render UI, it just loads JS & CSS
};

export default ChatbotAssets;
