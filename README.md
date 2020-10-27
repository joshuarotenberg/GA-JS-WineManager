# Wine Manager Application

Your job is to use the MyAPI Wine API to build out the completed application using the pre-built UI

## Project Expectations

Main Functionality (Required):

- Show all wines
- Add a new wine

Bonus Functionality:

- Update a wine
- Delete a wine

Extra Bonus!

- Develop a way of your choice to view a single wine when clicked. This can be in a modal window, a new page (hard), in a side div, etc.

## Josh's Wine Manager

Tools used:

- [Axios](https://github.com/axios/axios) (Promise based HTTP client)
- [Handlebars](https://handlebarsjs.com/) (Javascript Template Engine)
- [Bootstrap](https://getbootstrap.com) (Front end Framework)
- [Font Awesome](https://fontawesome.com/) (Icon library)

### Show all wines

On load, app makes a `.get` to the Wine API to grab all wines and their respective data, inserting them into cards via handlebars, on the index view.

### Add a new wine

When new wine form is submitted. It makes a `.post` request to create new wine then adds a new card in the index view via Ajax .

### Delete a wine (Bonus)

When delete icon button is clicked. `.delete` request is made to API. on success: deleted card is remove from index via Ajax.

### Update a wine (Bonus/ Extra Bonus\*\*)

When edit icon is clicked. Edit form modal opens. `.get` request grabs all data from API and pre-populates form of respective card. Upon submission: updated data is passed to API via `.put` request.

> \*\* UI didn't require viewing a wine, as it had all the info. The edit action pops a form based on unique wine data. Thought this was more advanced. ;)

## Challenges

- Was unable to inject updated API response via handlebars.
