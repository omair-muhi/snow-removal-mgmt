DROP DATABASE IF EXISTS `employee_db`;
CREATE DATABASE `employee_db`;
USE `employee`;



CREATE TABLE `employee` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`Name` VARCHAR( 30 ) NOT NULL,
	`Title` VARCHAR( 30 ) NOT NULL,
	`Contact` INT ( 10 ) NOT NULL,
	PRIMARY KEY ( `id` )
);

-- Create table for managers
-- Create table for crews