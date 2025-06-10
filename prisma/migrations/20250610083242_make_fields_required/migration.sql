/*
  Warnings:

  - Made the column `air_quality_raw` on table `sensor_data` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `sensor_data` MODIFY `air_quality_raw` INTEGER NOT NULL,
    ALTER COLUMN `aqi` DROP DEFAULT;
