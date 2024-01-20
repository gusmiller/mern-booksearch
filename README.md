<a id="readme-top" name="readme-top"></a>

<p align="center"><img src="./assets/images/carleton-u-logo.jpg" height="250"></p>

<p align="center" style="margin-top:25px; margin-bottom:50px;">
	<a><img src="https://img.shields.io/static/v1.svg?label=NodeJS&message=Environment&color=green"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=javascript&message=Language&color=purple"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=React&message=Library&color=green"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=Vite&message=Library&color=cyan"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=blue"/></a>
</p>

# Carlton Coding Bootcamp Certification

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#Description">MERN! Searh Book Engine</a></li>
		<li><a href="#installation">Installation</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#usage">Application Usage</a></li>
		<li><a href="#contactme">Questions? Contact Me!</a></li>
	</ol>
</details>
<div id="Description" style="margin-top: 25px;">

## MERN! Search Book Engine

To explain the MERN Search Book Engine challenge we need to first understand what is MERN. MongoDb definition of MERN is as follows: MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

<ul>
<li>MongoDB — document database</li>
<li>Express(.js) — Node.js web framework</li>
<li>React(.js) — a client-side JavaScript framework</li>
<li>Node(.js) — the premier JavaScript web server</li>
</ul>
Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.

This week we are getting starter code with a fully functioning Google Books API search engine built with a RESTful API. Our challenge this weeks is to refactor the engint to use GraphQL API over Apollo Server. In other words open the hood remove the engine and install a new engine; more powerful and advance, all this without losing the orginial functionality of the application.

Here is my product!

<div style="margin-top: 15px;">
	<img src="./assets/images/MERN001.png">
</div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="installation" style="margin-bottom: 20px;margin-top: 20px;">

## Installation

The JATE (Just Another Text Editor) requires two tiers; Server and client. Each one requires their own independant dependancies. Please follow the instructions to install the JATE application

|Name|Description |
|---|---|
|[MERN-Book Search][mernportfolio]| Navigate to WOW React Portfolio github repo and clone application. |
|[install-dependancies][]| Once main depandancies have been installed then run this script: `npm run install` |
|[build-develop][] | Run script `npm run build`. This script will compile and create the application, it generates the `dist` folder with all components. |
|[dev][] | Once application has been built we can run script `npm run dev` to execute application. |

[mernportfolio]: https://github.com/gusmiller/mern-booksearch
[main-dependancies]: main-dependacies
[install-dependancies]: install-dependacies
[build-develop]: build-develop
[dev]: start

**NOTE** the application should be deployed into Netlify. You can review their [documentation](https://vitejs.dev/guide/static-deploy.html#netlify) for further details.

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Once you have installed the dependancies and build he application you should have a screen like the following. (click on arrow to expand)</summary>
	<div style="margin-top: 15px;">
	     <img src="./assets/images/MERN002.png">
     </div>
</details>

### List of application and developing dependencies

<p>To specify the packages your project depends on, you must add them in a package.json file as "dependencies" or "devDependencies" in your package's package.json file. When you (or another user) run npm install, npm will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each. NOTE: devDependencies are only installed when developing, these are NOT included when publishing application.</p>

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Server Dependencies. (click on arrow to expand)</summary>
	<div style="margin-top: 15px;">
<p style="font:strong;">Application dependencies:</p>
<div style="margin-left: 25px;">
> @apollo/server - version 4.7.1<br/>
> express - version 4.17.2<br/>
> graphql - version 16.6.0<br/>
> mongoose - version 7.0.2<br/>
> bcrypt - version 5.0.0<br/>
> jsonwebtoken - version 8.5.1<br/>
> dotenv - version 8.2.0<br/>
</div>
<br/>

<p style="font:strong;">Development Dependencies (devDependencies):</p>
<div style="margin-left: 25px;">
> nodemon - version 2.0.3<br/>
</div>
</details>

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Client Dependencies. (click on arrow to expand)</summary>
	<div style="margin-top: 15px;">
<p style="font:strong;">Application dependencies:</p>
<div style="margin-left: 25px;">
> @apollo/client - version 3.7.16<br/>
> bootstrap - version 5.2.3<br/>
> graphql - version 16.6.0<br/>
> jwt-decode - version 3.1.2<br/>
> react - version 18.2.0<br/>
> react-bootstrap - version 2.7.4<br/>
> react-dom - version 18.2.0<br/>
> react-router-dom - version 6.14.1<br/>
</div>
<br/>

<p style="font:strong;">Development Dependencies (devDependencies):</p>
<div style="margin-left: 25px;">
> @types/react - version 18.0.37<br/>
> @types/react-dom - version 18.0.11<br/>
> @vitejs/plugin-react - version 4.0.0<br/>
> eslint - version 8.38.0<br/>
> eslint-plugin-react - version 7.32.2<br/>
> eslint-plugin-react-hooks - version 4.6.0<br/>
> eslint-plugin-react-refresh - version 0.3.4<br/>
> vite - version 4.3.9<br/>
</div>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="usage" style="margin-top: 25px;">

## Application Usage

The MERM book search engine application was provided for us by Carleton program. This was as means for us to refactoring its RESTful engine for a me GraphQL query language using Apollo server. The process involved the change of RESTful API calls for mutations and typedefs in graphql.

The application gives the user the ability to search for books based on categories and save the ones they like the most. Information is saved in a MongoDB no SQL database, using mongoose library.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="contactme" style="margin-top: 25px;">

## Questions? Contact Me 

The purpose of this Readme-bot is to help developers create their project Readme.md file that is required for ALL projects. Over time this application can save the developer lots of time, as this is a tedious process. The Readme-bot can be enhanced and there is growth for much more.

Do not hesitate in contacting me, Gustavo Miller - gustavo.miller@miller-hs.com.

You may find the application at: [https://github.com/gusmiller/Readme-Bot](https://github.com/gusmiller/Readme-Bot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="license" style="margin-top: 25px;">

## License

MIT License

Copyright (c) 2023 Readme-Bot

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=yellow"/></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller