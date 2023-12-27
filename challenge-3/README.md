# Company Organization Database Setup

## Introduction

This Laravel project sets up a database schema for basic company organization. It includes migrations to define tables for companies, locations, assets, managers, employees, people, company groups, and sub-groups.

## How to Run Migrations

1. Clone the challenge-3 folder of the repository.

2. Install Laravel dependencies:

    ```bash
    composer install
    ```

3. Run the following Artisan command to migrate the tables:

    ```bash
    php artisan migrate
    ```