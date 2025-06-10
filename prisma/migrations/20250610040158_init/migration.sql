-- CreateTable
CREATE TABLE `sensor_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `air_quality_raw` INTEGER NOT NULL,
    `reading_time` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
