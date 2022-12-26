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
    * `"build": "next build && next report",` 
    * How to : [Link text](https://www.youtube.com/watch?v=mTz0GXj8NN0&t=2987s)   
* Backend API notes 
    * Route structure `localhost:3000/api/folderName`
    * api is parent folder and folderName is child
    * data is contained within child folder
        * This code handles a request
        ```js
            import{articles} from '../../../data'

            export default function handler(req, res) {
                res.status(200).json(articles);
            }
        ```  

    

        
    