-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 05, 2022 at 03:21 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `picerija`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
CREATE TABLE IF NOT EXISTS `korisnik` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prezime` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `datum_rodjenja` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `ime`, `prezime`, `datum_rodjenja`, `email`, `password`, `username`) VALUES
(10, 'Nikola', 'Nikolic', '1998-01-03', 'nikola@gmail.com', 'nekalozinka', 'nikola99'),
(16, 'Kika', 'S', '2022-04-06', 'kikas@gmai.com', 'kika', 'kika'),
(11, 'Milica', 'Stojanovic', '2022-04-07', 'milica@gmail.com', 'milica', 'milica1'),
(8, 'Mihajlo', 'Stojanović', '1999-09-23', 'mihajlomixi@live.co.uk', 'jakasifra', 'mihajlo99'),
(15, 'Goran', 'Stojanovic', '2022-04-08', 'goran@gmail.com', 'bucko', 'goran');

-- --------------------------------------------------------

--
-- Table structure for table `proizvodi`
--

DROP TABLE IF EXISTS `proizvodi`;
CREATE TABLE IF NOT EXISTS `proizvodi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(40) NOT NULL,
  `opis` varchar(255) NOT NULL,
  `slika` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cena` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `proizvodi`
--

INSERT INTO `proizvodi` (`id`, `ime`, `opis`, `slika`, `cena`) VALUES
(21, '5 sira', 'Sir, gorgonzola, parmezan, dimljeni sir', 'pizza1.jpg', 500),
(17, 'Inverno', 'Sir, šunka, pepperoni, BBQ sos, paprika, masline, šampinjoni, luk, cheddar sir', 'pizza6.jpg', 400),
(18, 'Siena', 'Sir, šunka, artičoke, ljubičasti luk, paradajz, kapar, pinjoli, pesto sos', 'pizza7.jpg', 500),
(19, 'Toscana', 'Sir, pršuta, rukola, parmezan', 'pizza8.jpg', 300),
(20, 'Paesano', 'Sir, šunka, šampinjoni, pančeta, feta', 'pizza9.jpg', 350),
(13, 'Bianka', 'Carbonara sos, krem od spanaća, tikvice, gorgonzola, hrskava pančeta, fine trave', 'pizza2.jpg', 400),
(14, 'White and hot', 'Ljuti pelat, šunka, kulen, pančeta, svinjska rebra, karamelisan luk, čedar', 'pizza3.jpg', 430),
(15, 'Porketa', 'Začinjeni rezanci svinjetine, paradajz, ljubičasti luk, peršun i orijent preliv', 'pizza4.jpg', 500),
(16, 'Black n Hot', 'Sir, šunka, pepperoni, pančeta, svinjska rebra, ljubičasti luk, cheddar sir i ljuti sos', 'pizza5.jpg', 330),
(22, 'Pizza Carbonara', 'Carbonara sos, šampinjoni, pančeta, baby mozzarella', 'pizza11.jpg', 350),
(23, 'Vegetariana', 'Sir, paradajz, paprika, kukuruz šećerac, crne masline', 'pizza12.jpg', 250),
(24, 'Pepperoni', 'Pepperoni, sir', 'pizza13.jpg', 400),
(25, 'Mediteran', 'Sir, šunka, šampinjoni, paprika, feta, paradajz, masline', 'pizza14.jpg', 500),
(26, 'Black Delight', 'Sir, pršuta, cherry paradajz, sušeni paradajz, feta, paprika', 'pizza15.jpg', 550),
(27, 'Capricciosa', 'Sir, šunka, šampinjoni, masline', 'pizza16.jpg', 450),
(28, 'Monte verde', 'Sir, kozji sir, pančeta, šampinjoni, rukola', 'pizza17.jpg', 500),
(29, 'Začinjena piletina', 'Sir, piletina, šampinjoni, luk, tikvice', 'pizza18.jpg', 400),
(30, 'Calzone', 'Chicago testo, sir, šunka, pančeta, kisela pavlaka, šampinjoni', 'pizza19.jpg', 350);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
