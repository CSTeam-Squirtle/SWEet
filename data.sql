CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	"Admin" BOOLEAN NOT NULL,
	"phone" integer,
	"linkedin" varchar NOT NULL,
	"github" varchar NOT NULL,
	"message" varchar,
	"team_id" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tasks" (
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



CREATE TABLE "public.team" (
	"id" serial NOT NULL,
	"name" varchar,
	CONSTRAINT "team_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "public.users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("team_id") REFERENCES "public.team"("id");

ALTER TABLE "public.tasks" ADD CONSTRAINT "tasks_fk0" FOREIGN KEY ("user_id") REFERENCES "public.users"("id");

INSERT INTO "public.users" VALUES (2, 'reduxulous@gmail.com', 'yolo', 'Brent', 'Li', true, 911, 'linkedin', 'github', 'message', 1);

