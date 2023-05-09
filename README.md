# pg-test

## Docker
Prvo treba da install-irash Docker
[docker installation](https://docs.docker.com/desktop/install/mac-install/)

run postgresql in docker
```
docker run --name postgre-test -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres
```

run pgadmin in docker
```
docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=postgresmaster' -d dpage/pgadmin4
```

## npm install

knex global installation
```
npm i knex -g
```

local installations(node_modules)
```
npm i knex pg dotenv --save
```

dotenv lib is for environment variables. To use it we need to create `.env`
file.

## use knex

initialize knex. with this command new file is automatically created: `./knexfile.js`.
```
knex init
```

odposle go kreirame `db.js` file-ot.

## migrations

knex migrations. this will create new folders/file under data as migrations.
With this file we can update the schema of the database.
```
knex migrate:make todo 
```

To run the migrations, you can run the command below
```
knex migrate:latest
```

To rollback the migrations, you can run the command below
```
knex migrate:rollback
```

url for create/update migartions: https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261

## execute insert and read
we create new file `index.js` where we call the database connection and to the query
on the database.