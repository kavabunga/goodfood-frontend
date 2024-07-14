# GoodFood • frontend

![Static Badge](https://img.shields.io/badge/status-finished-green) ![Static Badge](https://img.shields.io/badge/React-gray?logo=React) ![Static Badge](https://img.shields.io/badge/TypeScript-gray?logo=TypeScript) ![Static Badge](https://img.shields.io/badge/SASS-gray?logo=SASS)

![Screen cast](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTV5cDhleXQ0eDl4MTcxYXBzdWVmemV4ajR0b3J6YWY4YnNkaHNhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7hYj9hn0IngL6XATdL/giphy.gif)

A platform for selling and delivering healthy and dietary food online. A React application using TypeScript. Project demo is available here: [https://goodfood.sytes.net](https://goodfood.sytes.net)

## Objective

Gain experience in team development under conditions close to real ones:

- create a product in a cross-functional team;
- follow the brief and customer comments;
- strictly adhere to deadlines.

## Result

The team managed to stick to the schedule and demonstrate a working application at each presentation. Initially, the MVP was delivered, followed by two more releases. The project took 3 months to complete.

During the process, the feature list had to be revised multiple times, and compromises were made regarding architectural solutions and the depth of code reviews. All existing application issues are kept in the backlog and outlined below in future plans.

## Features

- [x] Main page (header, menu, footer)
- [x] Slider block
- [x] "Best Sellers" block
- [x] "About Us" page
- [x] "Recipes" page
- [x] Product catalog (with various categories)
- [x] Product card
- [x] Search and filter functionality
- [x] User registration and authentication
- [x] User account (with the ability to change user data)
- [x] Favorite products
- [x] Order history
- [x] Cart
- [x] Functionality to add products from the recipe to the cart
- [x] Order checkout (with delivery and payment options)
- [x] Online order payment
- [x] Product rating
- [x] User reviews
- [x] Applying promo codes at checkout
- [x] Mobile version

## Future Plans

- Reorganize the application structure. Separate business logic from UI.
- Refactor component code. Extract types and constants, add comments/documentation for component interfaces and key functions.
- Refactor styles. Use SASS features, extract key values into variables, reorganize nested component selectors and pseudo-classes.
- Populate Story Book for further component work.
- Connect new payment services.
- Use libraries for forms and field validation (React Hook Form, Zod/Yup).
- Bug fixing.

## Project launch

```bash
## After cloning the repository, install dependencies.
## For reliable operation, we recommend clean install:
npm ci

## To run the Vite builder in development mode:
npm run dev
```

### Env

The application and API addresses need to be specified in the **.env** file at the root of the project.

#### Sample .env file

```text
VITE_BASE_URL=http://localhost:3000
VITE_API_URL=http://localhost:3000/api
```

Detailed information on working with the project can be found in the [`CONTRIBUTE.MD`](/CONTRIBUTE.md) file.

## Docs and links

- [Demo](https://goodfood.acceleratorpracticum.ru)
- [Figma layouts](https://www.figma.com/file/AQCSX3HGPVThk3lmZEhF3o/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B8-%D0%B4%D0%B8%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-%D0%B5%D0%B4%D1%8B)
- [Specifications and requirements (google doc, in russian)](https://docs.google.com/document/d/14wuGhcx2ZiCdd9zaOkRaPifwISg_0vUFeAk59DmO7l0/edit#heading=h.retjyf7u653y)
- [`CONTRIBUTE.MD`](/CONTRIBUTE.md)

## Team

[Tsukanov Semyon](https://github.com/Simon062), [Badalyan Karina](https://github.com/KarinaSiamanta),
[Egorova Daria](https://github.com/dar1aeg), [Shushkova Elena](https://github.com/Hellena60), [Ilina Daria](https://github.com/DariaIlinaUX), [Danilovich Alexey](https://github.com/jsapro), [Ivashova Maria](https://github.com/mmariaiv), [Kharlakov Vitaliy](https://github.com/vkharlakov), [Vladislav Potylytsin](https://github.com/maik791277), [Egor Kolesnikov](https://github.com/egor-kolesnikov), [Nikishin Andrey](https://github.com/nocTKpunTyM), [Karmyshkov Evgeny](https://github.com/Karmyshkov), [Semyon Katz](https://github.com/kavabunga), [Volkova Galina](https://github.com/earlinn), [Govorlivykh Artyom](https://github.com/govorlivyh), [Boriskin Ivan](https://github.com/ivan18258), [Strelnikova Yuliana](https://github.com/juliana-str), [Bobkov Konstantin](https://github.com/deltabobkov), [Sharapov Vyacheslav](https://github.com/Slava-prog), [Andreev Pavel](https://github.com/andre-vpn), [Kalyagin Alexey](https://github.com/Alexey0081), [Steraspolskaya Elena](https://github.com/ElenaSter), [Liukkonen Svetlana](https://github.com/nesusveta), [Tokareva Natalia](https://github.com/Solotona), [Doroshenko Ivan](https://github.com/dorosh1337), [Krupennikova Olga](https://github.com/HelgaOO), [Manasyan Khagina](https://github.com/Xalgina), [Buguraev Nikita](https://github.com/ExTapeS)
