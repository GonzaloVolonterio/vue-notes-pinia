# Vue Notes App with real database using Firebase, Firebase-auth and Pinia

## Create a user for real database: you can post, edit and delete notes.

## 🚀 Functionalities
- **Sign Up/Login:** Ability to create new users and log in. If you prefer to log in with an existing user in the database (Login: hercilioluzs@gmail.com, Password: 161091).

- **Notes Creation:** Add your notes easily.

- **Notes List:** View all your notes in an organized chronological list, with the latest posted always at the top, taking into account even milliseconds to avoid conflicts of notes posted at the same hour, minutes, and seconds.

- **Firebase Integration:** The notes are stored in real-time on Firebase for a seamless user experience. For example, if there are two users viewing the list of notes and one of them adds a note, it will appear in real-time without the need for page refresh.

## 🛠️ Main Dependencies
- **@vueuse/core**: Vue library for reactive functions and composable functions, making development more efficient.

- **bulma**: Lightweight CSS framework based on Flexbox, used to style the application in a pleasant and responsive way.

- **firebase**: Library that provides integration with Firebase, allowing real-time data storage and authentication.

- **pinia**: State manager for Vue 3, helping to efficiently control global state.

- **vue**: Vue core library, used to build reactive user interfaces.

- **vue-router**: Route manager for Vue 3, facilitating navigation between pages.
- 

## Built With
 ```
Vue
Css
Pinia
Firebase

```

### Clone repo 🔧

```
git clone https://github.com/GonzaloVolonterio/vue-notes-pinia
```

### Install 🔧

```
npm install
```

```
npm run dev
```

## Live

https://noteballs-flax.vercel.app/#/auth


## .Env
```

You need your own Firabase keys

```


![vue-notes-pinia-1](https://github.com/GonzaloVolonterio/vue-notes-pinia/assets/64506662/e289cf56-7d10-45e8-af3b-151485a13d60)

![vue-notes-pinia-2](https://github.com/GonzaloVolonterio/vue-notes-pinia/assets/64506662/813371a1-7754-464a-afa4-0ea2bbf10b0a)


