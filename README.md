# Attendance Viewer

## Introduction

This project is structured with the `Laravel backend` in the `root` directory and the `React app` located in the `resources/react-app` directory. 

## Technologies

This project is built using the following technologies:

- **Laravel**: A PHP framework used for the backend development.
- **MySQL**: A powerful and open-source relational database management system used for data storage.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern user interfaces.
- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: A routing library for React applications.

## Prerequisites

Make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

## Getting Started

1. Clone the repository

2. Configure the `.env` values for the database.

3. Install Laravel dependencies:

    ```bash
    composer install
    ```

4. Run the Database Migrations

    ```bash
    php artisan migrate
    ```

5. Install Node.js dependencies for the React app:

    ```bash
    cd resources/react-app
    npm install
    ```
6. Run the React app:

    ```bash
    npm run build
    ```

7. Back to the root directory and start the Laravel development server:

    ```bash
    cd ../..
    php artisan serve
    ```

The Laravel application will be available at http://localhost:8000.

## Important Information

To successfully upload data into the application, make sure your Excel file follows a specific format and includes multiple named sheets. An example file is provided in the root public directory with the name `upload-file.xlsx`.

## Excel File Format Guidelines

1. **File Type:** Only Excel files are allowed for uploading data.

2. **Named Sheets:** The Excel file must contain multiple named sheets with the following names and order:

   - `Employees`
   - `Locations`
   - `Shifts`
   - `Schedules`
   - `Attendances`
   - `Attendances_Faults`

## Example File

An example Excel file, `upload-file.xlsx`, is available in the root public directory. Use this file as a reference for the required format.

Feel free to customize the data in the example file to match your specific use case.

**Note:** Only Excel files in the specified format will be processed during the upload.