### Captain React

Captain React is a web app based on React and nodeJS which use data retrieved from [superheroapi](https://superheroapi.com/)
and display them into a card to the user. It follow the Server-Side-Rendering(ssr) approch.
You can play at this address [https://captainreact.herokuapp.com/](https://captainreact.herokuapp.com/).

#### Material UI && Fetch API && Express && node-fetch && superheroapi 

1. I have used [Material UI](https://material-ui.com/) for the frontend because it allows me to avoid the positioning of elements and offered
prebuilt style that I like. And the interface is the common android UI interface.
2. Fetch API is used from front-end to send request to the backend and retrieve data.
3. [superheroapi](https://superheroapi.com/) provide an api which allows to have photos, name and more informations about a hero. A key is need and the name or ID of hero is the request.
4. Express is used on the backend to create a server and manage root and cors issues with cors module.
5. As I love Fetch API I used without problems its version under nodejs: node-fetch. Same approch like Fetch API. 

#### npm install

* Ensure to have nodejs installed and so npm
* Ensure to have git configured on your dev machines
* The project is divised in two paths: server(backend) folder and frontend. 
Launch your console and type:

```
git clone https://github.com/TawalMc/captainreact.git
```

first install dependencies
```
cd captainreact
cd client
npm install
cd ../server
npm install
```

* second install devdependencies :_[concurrently](https://www.npmjs.com/package/concurrently)_ module and _[nodemon](https://www.npmjs.com/package/nodemon)_

```
npm install -g concurrently
npm install -g nodemon
```
* Last run **under root** project with npm(windows):

```
npm run dev
```

#### Update

**Previously** :I have currently a CORS (Crossing-Origin Ressource Sharing) issues with retrieving data from superheroapi to my web app. So I have avoid the problem on Chrome 🤣 by installing CORS extension and all things work perfectly but when deploy it on heroku my web app doesn't retrieve data because it is bloced. I work to correct the problem.
_But_
**Know**: The CORS issues is resolved when I move to SSR with NodeJS/Express as Backend and React/MUI as Frontend.

#### Thanks
Thank you to [Eau Silva](https://github.com/esausilva/example-create-react-app-express) for his tutorial and github pages that I follow to do the SSR.

#### Contacts
Follow me on

[Github](https://github.com/TawalMc) 😎 [Twitter](https://twitter.com/Tawal_Mc?s=03)  😎 [Dev.to](https://dev.to/tawalmc)


Copyright: 2020
