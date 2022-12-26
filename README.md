NEXT JS fundamentals notes: 
    * What is NEXT JS
        * _Frontend Framework_ for Server Side Renderning
            * First page load is renedered on the server
            * Additional benefits
                * This is good for SEO
                * Common sense routing
                * Easy deployment
        * Learn more : [Link text](https://nextjs.org/)
    * Notes on file structure for the framework
        *  files in _public_ dir render to user
            * files in _styles_ dir are global css
                * Naming conventions of styles
                    * File > Home.module.css
                    * Component > Home.js
                * 1 style sheet per component
                    * similair file names 
    * Naming convention between route files and components
        * File > aboutpage.js
        * Component > Layout.js
* Export a static website via this command in package.json
    `"build": "next build && next report",`    
    

        
    