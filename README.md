<h1 align="center">
  <div>
  <img title="TypeScript" alt="TypeScript" height=150
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png">
  </div>
  <img title="Books Library" src="https://github.com/AhmedTohamy01/Books-Library-GraphQL/blob/main/public/img1.jpg" alt="React + GraphQL + Apollo" width="1000" />
  <br>
    Typescript News List Built Using React.JS, GraphQL, Apollo Client, Styled-Components, Matrial-UI, Node.JS, Express, MongoDB and Cypress.
</h1>

<p><font size="3">
  This is a Full Stack Project built using <strong><em>Typescript</em></strong>, <strong><em>React</em></strong>, <strong><em>Apollo-Client</em></strong>,<strong><em>Styled-Components</em></strong>, <strong><em>Styled-Icons</em></strong>, , <strong><em>Matrial-UI</em></strong> in frontend and using <strong><em>GraphQL</em></strong>, <strong><em>Express</em></strong> & <strong><em>MongoDB</em></strong> in backend, and have End-to-End tests using <strong><em>Cypress</em></strong>.
  <br><br> 
The project is a News List where you can explore available news cards and filter them by author name. You can also add a new news post, update existing post or delete existing post.
  <br><br> 
	   <strong><em>Take a look at the live version here:</em></strong> https://clubee-graphql-news-list.vercel.app/ :octocat: :heart_eyes:
  <br><br>

</p>

## Table of Contents

- [Project Walk-Through](#project-walk-through)

  - [Main Page](#main-page)
  - [Post Card](#post-card)
  - [Search Box](#search-box)
  - [Add Button](#add-button)
  - [Add Modal](#add-modal)
  - [Edit Modal](#edit-modal)
  - [Delete Modal](#edit-modal)
  - [Custom Error Message](#custom-error-message)

- [Technology Used](#technology-used)
- [How To Use](#how-to-use)

# Project Walk-Through

# Main Page

  <div align="center"><a name="menu"></a>
  
![image](https://user-images.githubusercontent.com/54721194/148704754-bcb67a8c-74ce-453b-840a-8063e4bba09d.png)

</div>

In this page you can see all available news posts in the system, each post in a separate card. The page will show only 5 posts by default and you can show more posts by clicking on the "Load More" button, this will add another 5 posts so you can see a total of 10 posts on the page. If you click again it will add another 5 and show a total of 15 post. (if there are 15 post or more in the database).

If there are no more posts to show in the database and the limit is greater than the posts count, the "Load More" button will disappear from the screen.

# Post Card

<div align="center"><a name="menu"></a>
  
![image](https://user-images.githubusercontent.com/54721194/148704884-44c5b991-0a74-46bb-8cf2-68176231a1c0.png)

</div>

Each post card shows the author name, author email, post title, post description and creation date, it also shows the author avatar which is a random image coming from public random images API (so every time you refresh the page you will get a new image).

The post card also has Edit Icon at the top of the card, if you clicked on this icon it will open Edit Modal to edit the post information.

The post card also has Delete Icon at the top of the card, if you clicked on this icon it will open Delete Modal to delete the post from the system.

</div>

# Search Box

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705007-3fb96626-f33d-49e7-80c2-99aef7d6a22a.png)

</div>

You can use the search box at the top of the page to search for any author (by name), it's a near real-time search, you don't need to press any button or click anywhere to start the search, the search will start automatically after you stop typing (smart search:) ).

The search logic is case-insensitive, so whatever you write the search term in capital or small or mixed letters it will work fine.

Once you start typing in the search box you will find a small Close Icon appears at the most right side of the search box, if you click on this Close Icon it will clear the value of the search box.

The search results will appear in the place where the posts cards appear and it will show all post cards that have the search term.

While you are still in the search process you can edit the card or delete the post card and the changes will reflect automatically on the search results.

For example, if you edited the post author name to something that is not related to the search term, the card will disappear from search results automatically. If you deleted a card it will disappear from search results automatically.

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705116-db82a928-669d-47ee-bb05-3c9c5a30199c.png)

  </div>

If the search term didn't match any of the users cards in the system, the system will show a custom error message to tell you that there is no data for this record.

# Add Button

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705135-53ee2e81-ab8e-4774-933a-2ae5db264d96.png)

</div>

You can use the Add Button (The big Plus Icon) at the top of the page to add a new news post to the system, this will add a post in the database and will remain permanently until someone deletes it.

When you click on Add Button this will open the Add Modal which will allow you to enter author information and post information and then save it in the database.

# Add Modal

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705184-775d3758-a8f1-4d1b-be73-e5f5e406f087.png)

</div>

When the Add Modal is open it opens with a Modal Overlay behind it which prevents the user from interacting with the main page until he closes the modal.

The left side of the Add Modal will have author avatar, author name field and author email field which you should fill also before you can save the post to the database.

The right side of the Add Modal has post title and post description fields which you should fill also before you can save the post to the database.

Each field has a specific limit of characters to prevent the user from defacing the design by entering too many characters. (I pay attention to details).

The save button will be disabled if any of the 4 fields is empty. and you can close the modal anytime by clicking on Cancel Button.

Once you filled the 4 fields and saved the user, the modal will close automatically and the post will appear automatically in the posts cards area.

Note: The post will be added by default at the end of the list, so you may not see it until you click the "Load More" button if the posts count in the database higher than the page limit. But if you have for example 4 posts in the database and the page limit is 5, so you will see the new post appear automatically in the page (without doing manual page refresh).

# Edit Modal

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705337-0eac843d-8ea1-415a-a325-e9ed68495f5f.png)

</div>

As said before, we can edit the post information by clicking on the Edit icon at the top of the post card, this will open the Edit Modal and when the Edit Modal is open it opens with a modal overlay behind it which prevents the user from interacting with the main page until he closes the modal.

It has everything the Add Modal has but it opens with default values of the user & post information in the 4 fields. You will be able to edit it to whatever you want.

Also, The save button will be disabled if any of the 4 fields are empty. and you can close the modal anytime by clicking on Cancel Button.

Once you edited the 4 fields and saved the post, the modal will close automatically and the updated post will appear automatically in the same place in the posts cards area.

Note: The post card will be updated immediately and the changes will appear automatically on the page.

# Delete Modal

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705382-2a974ac6-4420-49b0-bea5-58f8f682d02c.png)

</div>

As said , we can delete the post permanently from the database by clicking on the Delete icon at the top of the post card, this will open the Delete Modal and when the Delete Modal is open it opens with a modal overlay behind it which prevents the user from interacting with the main page until he closes the modal.

It's a very simple modal, if you want to delete the post permanently click Delete Button. Or you can close the modal anytime by clicking on Cancel Button.

Once you deleted the post the modal will close automatically and the deleted post will disappear automatically from the posts cards area.

# Custom Error Message

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/148705456-b756a99e-bba1-4491-a971-04e54fef7adb.png)

  </div>

In case we couldn't contact the server to get the data the system will show a custom error message to let you know what is happening!

# Technology Used

I have built this project using the following technologies :

- Next.JS
- React.
- Typescript.
- Apollo Client.
- Styled-Components.
- Styled-Icons.
- GraphQL.
- Node.JS.
- Express.
- MongoDB.
- Cypress.
- Vercel.
- Heroku.

# How To Use

To be able to use this Next.js app locally in a development environment you will need the following:

1. You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2. You will need to register (for free) in [MongoDB Online](https://mongodb.com), then create a cluster and get a username & password to connect to any DB in your cluster, then create a databse in your cluster. (usually takes 5 min.)
   Note: if this 5 min. is too long you can contact me and i will send you the DB_URL privately.

3. Run the Backend Express GraphQL server, you should do the following:

```cmd

# Clone the repository

# Go into the server folder in the repository
cd technical-assignment-front-end-engineer-AhmedTohamy01/server

# Install dependencies
npm install

# Add dev.env in server folder
You should create a file named "dev.env" in the root of server folder, in this file you should add the following:
PORT=5000
DB_URL=mongodb+srv://{your_DB_username_here}:{your_DB_password_here}@cluster0.dvqs8.mongodb.net/{database_name_here}?retryWrites=true&w=majority


# Run the app (and keep it running)
npm run dev

# You should see the following messages in the console if the server run sucessfully,
and was able to connect to the database.
Server connected on port 5000 !
Connected to database !

```

3. Run the Frontend Next.JS App, you should do the following:

```cmd

# You already cloned the whole repository in the previuos step

# Open a new terminal.

# Go into the root folder of the repository
cd technical-assignment-front-end-engineer-AhmedTohamy01

# Install dependencies
npm install

# Run the frontend app
npm run dev


```

4. Now you can see the project in your browser http://localhost:3000/.

5. To run cypress End-To-End tests you should do the following:

```cmd

# Open a new terminal.

# Go into the root folder of the repository
cd technical-assignment-front-end-engineer-AhmedTohamy01

# Start cypress
npx cypress open

# Run the tests
Cypress will open a new window has all tests, in order to run any of the tests just click on it
and cypress will open the test in a new browser window.


```

