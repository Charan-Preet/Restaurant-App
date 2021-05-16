# Restaurant-App
## Steps to Run the website locally on your computer:

1. Run `git clone https://github.com/Charan-Preet/Restaurant-App.git` on your Termial.
2. `cd Restaurant-App\backend` 
3. `npm i` inside `backend` directory
4. Also `node index.js` inside `backend` directory  
5. `cd Restaurant-App\client`
6. `npm i` inside `client` directory
7. Also inside `client` directory `npm start`

## More about this project:
### I created this project as a part of interview process assignment and the assignment goes like this:
- The attached [.csv](https://github.com/Charan-Preet/Restaurant-App/blob/master/backend/data.csv) file contains a list of data to create a food ordering application. The requirements of the product is as follows:
- As a user, I am able to search for available/open restaurants by time and dates via a search function.
- As a user, I am able to click into the restaurant and see the set meal that they are selling with price and currency and make orders from there.
- As a user, I am able to see my past orders.
- You’re required to use `React.js` to develop the frontend and `Node.js` for the backend. 
- You’re also required to use a proper database to store your data and write a migration script to migrate data from [.csv](https://github.com/Charan-Preet/Restaurant-App/blob/master/backend/data.csv) file into your database.

## How it works :
- Fetching data from backend using `rest api` using `axios` from `http:\\localhost:5000\data` and look's like this:

[![data.png](https://i.postimg.cc/J4szvxtP/data.png)](https://postimg.cc/VdcwbjqC)

- **Site frontpage**:
[![Screenshot-2021-05-05-React-App.png](https://i.postimg.cc/wTnjpNmH/Screenshot-2021-05-05-React-App.png)](https://postimg.cc/vcLs7chS)

-Restaurant page usign `Search()` function listing the list of restaurant according to date and time selected by the user in the frontpage:

[![Screenshot-2021-05-05-React-App-1.png](https://i.postimg.cc/R0LSKbbV/Screenshot-2021-05-05-React-App-1.png)](https://postimg.cc/TyhvXQ6Z)

-Order page user can order meals which get saved in `Previous order`:

[![Screenshot-2021-05-05-React-App-2.png](https://i.postimg.cc/25DjqfGK/Screenshot-2021-05-05-React-App-2.png)](https://postimg.cc/K10hVwdP)

-Previous Order Page- As the name suggest it stores the previous order created by the user: 

[![Screenshot-2021-05-05-React-App-3.png](https://i.postimg.cc/Sx8NNK69/Screenshot-2021-05-05-React-App-3.png)](https://postimg.cc/5X4Msbk9)
