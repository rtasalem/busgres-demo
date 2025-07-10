# Documentation

## Contents

1. [PostgreSQL Server Set-up](#postgresql-server-set-up)
2. [Azure Service Bus](#azure-service-bus)
3. [Utilising Busgres](#utilising-busgres)
4. [Environment Variables](#environment-variables)

## PostgreSQL Server Set-up

To quickly set up a simple PostgreSQL server, download the [Postgres.app](https://postgresapp.com/downloads.html). Open the application and accept the prompt for the app to operate without a password. This should start up the default server. Click on one of the databases listed on the default server window, this should trigger a terminal window to open that is connected to the Postgres server. To create a new database, run the following SQL command:

```
CREATE DATABASE busgres_demo;
```
Back in the default server window for Postgres.app, the database just created should now also be listed. Click on the new database and a terminal window will again open, this time connected to the new database. From here you can create tables as needed. For this project the following table was created:
```
CREATE TABLE busgres (id SERIAL PRIMARY KEY, message VARCHAR(500));
```
Back in the terminal, you can see a list of all relations within a database by running the `\dt` command. To connect and view the database via a PostgreSQL dedicated UI, download [pgAdmin 4](https://www.pgadmin.org/download/). Select `Add New Server` and enter the following:

- Name: `Any name`
- Host name/address: `localhost`
- Port: `5432` (default)
- Maintainence database: `busgres_demo`
- Username: `postgres`
- Password: `Leave blank`  

Back in the terminal, you can test the connection to Postgres is working by running an `INSERT` statement:
```
INSERT INTO busgres (message) VALUES ('hello world');
```

Running a `SELECT` statement (e.g. `SELECT * FROM busgres;`) either via the terminal or in pgAdmin to confirm that the data is now saved into the table.

## Azure Service Bus

In the Azure portal, create a Service Bus namespace, take note of the connection string. Within the same namespace create a queue (or topic & subscription) and take note of the name. Both of these will be environment variables used later on to connect to Service Bus. 

## Utilising Busgres

The [Busgres documentation](https://www.npmjs.com/package/busgres) should be referred to for full details on how to use the package itself.

## Environment Variables

The following variables must be listed within the `.env` file:

| Environment Variable    | Description                              | Required                                      |
| ------------------------| ---------------------------------------- | --------------------------------------------- |
| `SB_CONNECTION_STRING`  | Service Bus namespace connection string  | Yes                                           |
| `SB_ENTITY`             | Name of Service Bus queue or topic       | Yes                                           |
| `SB_SUBSCRIPTION`       | Name of Service Bus subscription         | Only if using a topic instead of a queue      |
| `PG_USERNAME`           | Username used for PostgreSQL server      | Yes                                           |
| `PG_PASSWORD`           | Username used for PostgreSQL server      | Only if database has been assigned a password |
| `PG_DATABASE`           | Name of database for PostgreSQL server   | Yes                                           |
| `PG_HOST`               | Host used for PostgreSQL server          | Yes                                           |
| `PG_PORT`               | Port used for PostgreSQL server          | Yes                                           |
