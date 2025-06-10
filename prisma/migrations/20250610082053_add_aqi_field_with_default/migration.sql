-- AlterTable
ALTER TABLE `sensor_data` ADD COLUMN `aqi` INTEGER NOT NULL DEFAULT 0,
    MODIFY `air_quality_raw` INTEGER NULL;
