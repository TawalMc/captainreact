### Captain React

Captain React is a web app based on React which use data retrieved from [superheroapi](https://superheroapi.com/)
and display them into a card to the user.
You can play at this address [https://captainreact.herokuapp.com/](https://captainreact.herokuapp.com/).

#### Material UI && Fetch API && superheroapi 

1. I have used [Material UI](https://material-ui.com/) for the frontend because it allows me to avoid the positioning of elements and offered
prebuilt style that I like. And the interface is the common android UI interface.
2. Fetch API is used from front-end to retrieve data and treat it like json file.
3. [superheroapi](https://superheroapi.com/) provide an api which allows to have photos, name and more informations about a hero. A key is need and the name or ID of hero is the request.

#### npm install

* Ensure to have nodejs installed and so npm
* Ensure to have git configured on your dev machines
Launch your console and type:

```
git clone https://github.com/TawalMc/captainreact.git
```
and after
```
cd captainreact
npm install
```

#### Update

I have currently a CORS (Crossing-Origin Ressource Sharing) issues with retrieving data from superheroapi to my web app. So I have avoid the problem on Chrome 🤣 by installing CORS extension and all things work perfectly but when deploy it on heroku my web app doesn't retrieve data because it is bloced. I work to correct the problem.

#### Contacts
Follow me on

[Github](https://github.com/TawalMc) 😎 [Twitter](https://twitter.com/Tawal_Mc?s=03)  😎 [Dev.to](https://dev.to/tawalmc)


Copyright: 2020




