-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Hoszt: server11.mysql-host.eu
-- Létrehozás ideje: 2016. Feb 07. 12:24
-- Szerver verzió: 5.5.44-log
-- PHP verzió: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Adatbázis: `orszohu1_multialarm`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `telefonkonyv`
--

CREATE TABLE IF NOT EXISTS `telefonkonyv` (
  `tel_id` int(10) NOT NULL,
  `tel_nev` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tel_szam` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `tel_szul_datum` date NOT NULL,
  `tel_iranyitoszam` int(4) NOT NULL,
  `tel_varos` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tel_cim` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`tel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- A tábla adatainak kiíratása `telefonkonyv`
--

INSERT INTO `telefonkonyv` (`tel_id`, `tel_nev`, `tel_szam`, `tel_szul_datum`, `tel_iranyitoszam`, `tel_varos`, `tel_cim`) VALUES
(2, 'Visnyei András', '+36-20-418-5263', '1982-10-15', 7920, 'Szigetvár', 'Görösgali út 30.'),
(3, 'Kovács József', '+36-30-333-3003', '1980-02-10', 7630, 'Pécs', 'Király utca 6'),
(4, 'Kis András', '+36-11-111-1111', '2016-02-19', 2481, 'Velence', 'Fő u. 1.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
