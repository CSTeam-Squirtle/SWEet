CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"hash" varchar,
	"firstname" varchar NOT NULL,
	"lastname" varchar NOT NULL,
	"admin" BOOLEAN,
	"phone" integer,
	"linkedin" varchar, 
	"github" varchar ,
	"message" varchar,
	"team_id" integer,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tasks" (
	"id" serial NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"description" varchar NOT NULL,
	"created_at" TIME DEFAULT CURRENT_TIME,
	"checked" BOOLEAN NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "tasks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "team" (
	"id" serial NOT NULL,
	"name" varchar,
	CONSTRAINT "team_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("team_id") REFERENCES "team"("id");

ALTER TABLE "tasks" ADD CONSTRAINT "tasks_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

INSERT INTO "team" (name) VALUES ( 'Ateam');

INSERT INTO "users" (
	"email",
	"password",
	"hash",
	"firstname",
	"lastname",
	"admin",
	"phone",
	"linkedin", 
	"github",
	"message",
	"team_id") VALUES ( 'reduxulous@gmail.com', 'yolo', 'hash', 'Brent', 'Li', true, 911, 'linkedin', 'github', 'message', 1);

INSERT INTO "users" (
	"email",
	"password",
	"hash",
	"firstname",
	"lastname",
	"admin",
	"phone",
	"linkedin", 
	"github",
	"message",
	"team_id") VALUES ( 'yolo@gmail.com', 'yolo', 'hashish', 'Brent', 'Li', true, 911, 'linkedin', 'github', 'description', 1);

INSERT INTO "tasks" (
	"title",
	"description",
	"created_at",
	"checked",
	"user_id") VALUES ('title', 'descript', CURRENT_TIME , false, 2);
