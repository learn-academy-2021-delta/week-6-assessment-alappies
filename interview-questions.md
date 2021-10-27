# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
  That's fine, you can migrate a foreign column into the students table. The foreign key would most likely be the cohort the student was in. 

Researched answer:
  The foreign key lives on the "belongs to" table and will be the primary key of the row we want to add it to, ie: on the student table under name:"Ashley" foreignKey: Delta which has the primary key of 1 on the cohort table 



2. Which RESTful routes must always be passed params? Why?

  Update, create, edit, and show need to be passed params so that our controller knows to expect user input to come in on the show and create  view pages.

  Researched answer:
Sometimes when you're coding you need outside information like a URL to tell your controller what views to show, that said, a prarm is like a route that you set up between the controller and the different view pages. That said, you would need routes to post, get and update. 


3. Name three rails generator commands. What is created by each?

  Your answer:
    I might only be able to come up with two off the top of my head, 

      rails generate model: which will be to create a table for your database

      rails generate controller: which will be to establish a conroller which is like a class for your app or the App.js page in React where you write all your ruby functions.

      rails generate rspec: I'm totally guessing that this is one, but If this is something you can generate, this would be rails/ruby's version of jest, it's a language specific testing suite that you can use to test your program and to set boundaries for your users if they enter invalid data. 

  Researched answer: Rails has a plethora of generate comands! Here are a few: assests, channel, controller, generator, helper, integration_test, jbuilder, job, mailer, migration, model, resource, scaffold, scaffold_controller, system_test, and task. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  
def index
- this would be a route to the page that would show all the all the data input.        


method="POST"   /students       
def create
- would be the text field where users can input data and hit submit and then the data would be stored somewhere else. 

method="GET"    /students/new
def new
- this would be the form page where the user could create a new instance of a post.

method="GET"    /students/2  
def 
- This would allow the user to create another instance of a student to add to the database

method="GET"    /students/2/edit    
def edit
- This would direct you to a form type page where you could edit a pre-exisiting post

method="PATCH"  /students/2      
def update
- this would allow you to update the edits that you made and store them in the database

method="DELETE" /students/2      
This would allow you to select the entries that you mde and delete them from the database.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

App name: Cross it out

1)"Cross it out" is a multifacited to do list application that offers multiple ways for you to organize your thoughts and write them down.
2) This App will offer three major list types to get the ball rolling on the home page
3) Option 1 will be a professional agenda/list, this list will offer layout options with time tables and stylized checkbox options that are taylored to a professional enviorment. It will also give the option to share lists or create lists for coworkers or employess who have the app downloaded. 
4) Another list option will be calendar events that you are able to choose a stylized list for any occasion. This feature will request to share data input with any pre-existing calendar app already established on the users phone or computer. It will also offer an alarm option for any scheduled events as well as stylized check boxes to mark tasks complete. 
5) The last list will be a daily task list which will be further parsed out into 3 seperate list options:
6) The first will be a groccery list option that will give you a couple of styled background choices as well as your choice of check boxes. This list will also give you the option to add multiple stores to one list so you you don't have to toggle back and forth between lists.
7) The second Daily task list will be a chores list that will have many stylized option to chose from. This option will also offer mulitple emojis and icons to use in place of text in an attempt to make doing chores just slightly more fun. You will also have your choice of stylized check boxes.
8) The last list will be a daily agenda which will also have many stylized options for backgrounds as well as options for stylized check boxes. 
9) There will be multiple ways to mark list items done, all executed by either tapping the box next to the task, swiping accross the task to cross it off or double tapping a task to stamp it out or swiping left to delete it off your list
10) List will be extremely easy to create and edit as a user. Once you've chosen a list, you will be able to enter text into a text field that will populate right beneath. The user will have the option to select and drag the list items into whatever order they deem necessary and can delete or edit items with ease right there.
11) Bonus feature is that they are able to still check items off from their lock screen while they're shopping or managing tasks. 