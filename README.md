# HyperJSON
A simple html page written in JSON:
    
    {
        "meta": [
            {
                "charset": "UTF-8"
            },
            {
                "author": "Mansoor Sayed"
            },
            {
                "name": "description",
                "content": "Magical snake oil"
            }
        ],
        
        "javascript": [
            "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js",
        ],
        
        "css": [
            "./css/lib/blueprint/src/reset.css",
            "./css/lib/blueprint/src/ie.css",
            "./css/app/layout.css"
        ],
        
        "title": "An Awesome page served in JSON!",
        
        "link": [
        ],
        
        "content": [
            {
                "node": "div",
                "id": "header",
                "class": "main-header",
                "content": [
                    {
                        "node": "h1",
                        "class": "header-text",
                        "content": [
                            "Page Header Text"
                        ]
                    },
                    {
                        "node": "img",
                        "src": "http://www.google.com/intl/en_com/images/srpr/logo3w.png"
                    }
                ]
            },
            
            {
                "node": "div",
                "class": "main-container",
                "content": [
                    {
                        "node": "input",
                        "type": "text",
                        "value": "initial input text"
                    }
                ]
            }
        ]
    }