import { useEffect } from "react";

const ChatbotAssets = () => {
    useEffect(() => {
         // MathJax script
         const mathjaxScript = document.createElement('script');
         mathjaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js';
         mathjaxScript.integrity = 'sha512-6FaAxxHuKuzaGHWnV00ftWqP3luSBRSopnNAA2RvQH1fOfnF/A1wOfiUWF7cLIOFcfb1dEhXwo5VG3DAisocRw==';
         mathjaxScript.crossOrigin = 'anonymous';
         mathjaxScript.referrerPolicy = 'no-referrer';
         document.head.appendChild(mathjaxScript);
     
         // Preconnect links for Google Fonts
         const preconnect1 = document.createElement('link');
         preconnect1.rel = 'preconnect';
         preconnect1.href = 'https://fonts.googleapis.com';
         document.head.appendChild(preconnect1);
     
         const preconnect2 = document.createElement('link');
         preconnect2.rel = 'preconnect';
         preconnect2.href = 'https://fonts.gstatic.com';
         preconnect2.crossOrigin = 'anonymous';
         document.head.appendChild(preconnect2);
     
         // Google Fonts stylesheet
         const fontLink = document.createElement('link');
         fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap';
         fontLink.rel = 'stylesheet';
         document.head.appendChild(fontLink);
     

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

            document.head.removeChild(mathjaxScript);
            document.head.removeChild(preconnect1);
            document.head.removeChild(preconnect2);
            document.head.removeChild(fontLink);
           
         
        };
        
    }, []);

    

    return null; // This component does not render UI, it just loads JS & CSS
};

export default ChatbotAssets;
