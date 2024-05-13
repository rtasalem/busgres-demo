# Busgres Demo

This is a demo project to test the functionality of the [Busgres](https://www.npmjs.com/package/busgres) NPM package I created which saves messages sent and received from an Azure Service Bus queue into a PostgreSQL database.

## Documentation

Full details on how this project was set up to utilise the Busgres package is avaiable in the [documentation](https://github.com/rtasalem/busgres-demo/blob/main/DOCS.md).

## Prerequisites

- Azure Service Bus Namespace connection string
- Azure Service Bus queue
- PostgreSQL server

## Getting Started

Once the PostgreSQL database and table has been set up, run the following command to start up the project:

```
nodemon app
```
