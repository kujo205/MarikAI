CREATE TABLE `chats` (
	`id` int AUTO_INCREMENT NOT NULL,
	`chat_id` int NOT NULL,
	`messages_to_run` int NOT NULL DEFAULT 50,
	`messages_to_run_left` int NOT NULL DEFAULT 50,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `chats_id` PRIMARY KEY(`id`)
);
