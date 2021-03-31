# ReactApp

## Docker

```
  environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example123
```
Otherwise previous volume with already initialized DB is used => INITDB env variables won't be used.
```
  docker-compose up --build --force-recreate --renew-anon-volumes
  docker system prune -a --volumes
```

## How To Lint and Format Code with ESLint in Visual Studio Code
https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code