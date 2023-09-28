<?php

namespace App;

/**
 * Application configuration
 *
 * PHP version 7.0
 */
class Config
{
    /**
     * Database type
     * @var string
     */
    const DB_TYPE = 'sqlite';

    /**
     * Sqlite database file name
     * @var string
     */
    const DB_FILE = 'db.sqlite';

    /**
     * Database host
     * @var string
     */
    const DB_HOST = "sqlite:" . DB_FILE;

    /**
     * Database name
     * @var string
     */
    const DB_NAME = 'your-database-name';

    /**
     * Database user
     * @var string
     */
    const DB_USER = 'your-database-user';

    /**
     * Database password
     * @var string
     */
    const DB_PASSWORD = 'your-database-password';

    /**
     * Show or hide error messages on screen
     * @var boolean
     */
    const SHOW_ERRORS = true;
}
