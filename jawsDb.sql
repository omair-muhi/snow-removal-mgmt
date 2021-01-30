USE ny3n1bywrxw9cixy;

DROP TABLE IF EXISTS Crew;
create table Crew (
id INT auto_increment NOT NULL,
employee_id INT,
job_id INT,
createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
FOREIGN KEY(employee_id) REFERENCES Employee(id),
FOREIGN KEY(job_id) REFERENCES Job(id),
PRIMARY KEY(id) 
);

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee (
id INT auto_increment NOT NULL,
Name varchar(255) NOT NULL,
Title varchar(255) NOT NULL,
Contact varchar(255) NOT NULL,
Admin BOOLEAN DEFAULT false,
assigned BOOLEAN DEFAULT false,
createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY(id) 
);

DROP TABLE IF EXISTS Job;
create table Job (
id INT auto_increment NOT NULL,
client_name varchar(255) NOT NULL,
location varchar(255) NOT NULL,
active BOOLEAN DEFAULT false,
createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY(id) 
);

INSERT INTO Employee(Name, Title, Contact, Admin, assigned)
VALUES("Joshua Lerson", "Snow Crew Lead", "416-225-8787", false, false);
INSERT INTO Employee(Name, Title, Contact, Admin, assigned)
VALUES("Natalie Calio", "Crew Manager", "248-558-7812", true, true);
INSERT INTO Employee(Name, Title, Contact, Admin, assigned)
VALUES("Nicholas Jenkins", "Snow Crew Member", "313-852-4561", false, false);

Select * from Employee;

INSERT INTO Job(client_name, location, active)
VALUES("Jack Fereday", "33 Simon St.", true);

INSERT INTO Job(client_name, location, active)
VALUES("Nick Bolson", "3323 Gerari Rd.", false);

INSERT INTO Job(client_name, location, active)
VALUES("Lisa Dorsy", "213 Lake St.", true);

select * from Job;

show tables;

insert into Crew(employee_id, job_id)
values(1,2);

insert into Crew(employee_id, job_id)
values(2,1);

insert into Crew(employee_id, job_id)
values(3,3);

select * from Crew;
