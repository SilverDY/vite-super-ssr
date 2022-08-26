# Glossary
___
## Module

Structural unit of the project

A module usually means a specific file or directory *(an abstraction in the context of a structure)*

- *authorization module*
- *page module*
- *the module of the component in the feature*
- *action module in the entity model*
- *etc.*

## Layer

Each of the directories located at the topmost level of the application.

This level defines the **scope of responsibility of modules**, as well as the level of danger of changes

- **Representatives**: `app`, `processes`, `pages`, `widgets`, `features`, `entities`, `shared`


```sh
└── src/
    ├── app/          # Initializing application logic
    ├── processes/    # (Optional) Application processes running over pages
    ├── pages/        # Application pages
    ├── widgets/      # Independent and self-contained blocks for pages
    ├── features/     # (Optional) Processing of user scenarios
    ├── entities/     # (Optional) Business entities that domain logic operates with
    └── shared/       # Reused modules, non business specific
```

## Slice

Each of the elements located at the top level of the layers

This level is **poorly regulated** is a methodology, but a lot depends on the specific project, stack and team

- **Representatives**: `process`, `page`, `widget`, `feature`, `entity`

```sh
├── app/
|   # Does not have specific slices, 
|   # Because it contains meta-logic on the project and its initialization
├── processes/
|   # Slices implementing processes on pages
|   ├── payment
|   ├── auth
|   ├── quick-tour
|   └── ...
├── pages/
|   # Slices implementing application pages
|   # At the same time, due to the specifics of routing, they can be invested in each other
|   ├── profile
|   ├── sign-up
|   ├── feed
|   └── ...
├── widgets/
|   # Slices implementing independent page blocks
|   ├── header
|   ├── feed
|   └── ...
├── features/
|   # Slices implementing user scenarios on pages
|   ├── auth-by-phone
|   ├── inline-post
|   └── ...
├── entities/
|   # Slices of business entities for implementing a more complex BL
|   ├── viewer
|   ├── posts
|   ├── i18n
|   └── ...
├── shared/
|   # Does not have specific slices
|   # is rather a set of commonly used segments, without binding to the BL
```

## Segment

Each of the modules located at the top level of each slice

This level determines **the purpose of modules in the code and implementation**, according to classical design models

- **Representatives**: `ui`, `model`, `lib`, `api`, `config`

```sh
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-logic (components, ui-widgets, ...)
    |   ├── model/                  # Business logic (store, actions, effects, reducers, ...)
    |   ├── lib/                    # Infrastructure logic (utils/helpers)
    |   ├── config/                 # Application configuration (env-vars, ...)
    |   └── api/                    # Logic of API requests (api instances, requests, ...)
```
