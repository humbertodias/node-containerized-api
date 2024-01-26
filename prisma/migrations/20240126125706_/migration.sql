-- CreateTable
CREATE TABLE `Exams` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `guide` VARCHAR(191) NOT NULL,
    `sample` VARCHAR(191) NOT NULL,
    `practice` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
