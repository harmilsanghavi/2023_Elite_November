-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: Elite
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `twitter_registration`
--

DROP TABLE IF EXISTS `twitter_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `twitter_registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `activate` varchar(45) DEFAULT NULL,
  `update_pass_time` varchar(45) DEFAULT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `twitter_registration`
--

LOCK TABLES `twitter_registration` WRITE;
/*!40000 ALTER TABLE `twitter_registration` DISABLE KEYS */;
INSERT INTO `twitter_registration` VALUES (1,'Vina}','vinu','vina@gmail.com','$2b$10$TjDRM/J4WWZVHj.njvTna.A41bFaI1YshKARa0FsswvZJ.QiVVon6','0',NULL,'2023-03-15 10:21:35','2023-03-15 10:21:35'),(2,'Sumi}','sumiyadav','sumi@gmail.com','$2b$10$aEW8fcnRqXPj/JxMBcbZ.OZr6cHLZvcyPZvTsO288RSViMDT1i8Rq','1',NULL,'2023-03-15 10:30:09','2023-03-15 10:30:09'),(3,'Vina','vinu','vina','$2b$10$0DAlQYUA7m1LqA2FpT0ZLetexljrrN0QXyKmaeRJfc.gQUzvjrOaO','0',NULL,'2023-03-15 10:40:18','2023-03-15 10:40:18'),(4,'Vina','vinu','vina','$2b$10$aPvAX75BDC1.tv3R23SW1.j4fnHVFHXKNbhLUXEE3j2CRmN4HvZhW','0',NULL,'2023-03-15 10:46:46','2023-03-15 10:46:46'),(5,'anu','sumiyadav','vina@gmail.com','$2b$10$.3MiYgQR83TA407pGZjLUudrmFxUWrqwY07pW9ZAcLBOROiATX.2y','0',NULL,'2023-03-15 10:48:20','2023-03-15 10:48:20'),(6,'anu','sumiyadav','vina@gmail.com','$2b$10$pm1GieVdstfRMY3wQdToJuE4iUPjBnXwphRzSVTy41saym5FNIOiW','0',NULL,'2023-03-15 10:49:21','2023-03-15 10:49:21'),(7,'anu','sumiyadav','vina@gmail.com','$2b$10$FJNcc1qeB4xGhRhS7iejA.qhwazxo9XiC1ZNM00UKrrwCqBvxSeKi','0',NULL,'2023-03-15 10:49:27','2023-03-15 10:49:27'),(8,'anu','vinu','vina@gmail.com','$2b$10$3mZctAioB.TKuyiNvgt2Cef/3n1ExNQtWyK3KkXl7QGwXivTggIPy','0',NULL,'2023-03-15 10:49:56','2023-03-15 10:49:56'),(9,'Vina','vinu','vina@gmail.com','$2b$10$SeL6l1ZlkrFrp71sLzsCcONxEznRPtn1T/QRLXkS809TE5Ei14LTC','0',NULL,'2023-03-15 10:50:38','2023-03-15 10:50:38'),(10,'Vina','vinu','vina@gmail.com','$2b$10$yPmIV87vuYkkpJMc60lX6uHAm5VCPJrw/OclQneSOp05rN0tSJEbC','0',NULL,'2023-03-15 10:50:59','2023-03-15 10:50:59'),(11,'Anuska','ani','ani@gmail.com','$2b$10$Ce6ntMigmzYhakbIriuv5Oy22wMaR2786rdej/vKLHj2DZMVFfXnm','1',NULL,'2023-03-15 13:04:39','2023-03-15 13:04:39'),(12,'Vikram','viki23','viki@gmail.com','$2b$10$nSW3edDotDnHoNujDznCuuVF958P1LdidvuRDuPo5qamqL/d1ZGUe','1',NULL,'2023-03-15 13:09:51','2023-03-15 13:09:51');
/*!40000 ALTER TABLE `twitter_registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-15 18:43:22
