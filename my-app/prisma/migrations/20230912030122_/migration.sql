/*
  Warnings:

  - You are about to drop the column `constent` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `content` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "constent",
ADD COLUMN     "content" TEXT NOT NULL;
