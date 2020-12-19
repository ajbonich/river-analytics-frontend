import React, { PureComponent } from 'react'
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'

const riverData = [
    {
        value: '68.9',
        qualifiers: ['A'],
        dateTime: '2019-10-26',
    },
    {
        value: '66.0',
        qualifiers: ['A'],
        dateTime: '2019-10-27',
    },
    {
        value: '53.5',
        qualifiers: ['A'],
        dateTime: '2019-10-28',
    },
    {
        value: '52.9',
        qualifiers: ['A'],
        dateTime: '2019-10-29',
    },
    {
        value: '46.3',
        qualifiers: ['A'],
        dateTime: '2019-10-30',
    },
    {
        value: '44.4',
        qualifiers: ['A'],
        dateTime: '2019-10-31',
    },
    {
        value: '60.6',
        qualifiers: ['A'],
        dateTime: '2019-11-01',
    },
    {
        value: '54.2',
        qualifiers: ['A'],
        dateTime: '2019-11-02',
    },
    {
        value: '53.7',
        qualifiers: ['A'],
        dateTime: '2019-11-03',
    },
    {
        value: '50.8',
        qualifiers: ['A'],
        dateTime: '2019-11-04',
    },
    {
        value: '49.2',
        qualifiers: ['A'],
        dateTime: '2019-11-05',
    },
    {
        value: '47.9',
        qualifiers: ['A'],
        dateTime: '2019-11-06',
    },
    {
        value: '47.3',
        qualifiers: ['A'],
        dateTime: '2019-11-07',
    },
    {
        value: '49.7',
        qualifiers: ['A'],
        dateTime: '2019-11-08',
    },
    {
        value: '49.7',
        qualifiers: ['A'],
        dateTime: '2019-11-09',
    },
    {
        value: '50.4',
        qualifiers: ['A'],
        dateTime: '2019-11-10',
    },
    {
        value: '51.4',
        qualifiers: ['A'],
        dateTime: '2019-11-11',
    },
    {
        value: '44.7',
        qualifiers: ['A'],
        dateTime: '2019-11-12',
    },
    {
        value: '51.4',
        qualifiers: ['A'],
        dateTime: '2019-11-13',
    },
    {
        value: '46.9',
        qualifiers: ['A'],
        dateTime: '2019-11-14',
    },
    {
        value: '45.8',
        qualifiers: ['A'],
        dateTime: '2019-11-15',
    },
    {
        value: '45.7',
        qualifiers: ['A'],
        dateTime: '2019-11-16',
    },
    {
        value: '45.8',
        qualifiers: ['A'],
        dateTime: '2019-11-17',
    },
    {
        value: '45.2',
        qualifiers: ['A'],
        dateTime: '2019-11-18',
    },
    {
        value: '45.6',
        qualifiers: ['A'],
        dateTime: '2019-11-19',
    },
    {
        value: '44.9',
        qualifiers: ['A'],
        dateTime: '2019-11-20',
    },
    {
        value: '50.2',
        qualifiers: ['A'],
        dateTime: '2019-11-21',
    },
    {
        value: '46.1',
        qualifiers: ['A'],
        dateTime: '2019-11-22',
    },
    {
        value: '41.1',
        qualifiers: ['A'],
        dateTime: '2019-11-23',
    },
    {
        value: '44.5',
        qualifiers: ['A'],
        dateTime: '2019-11-24',
    },
    {
        value: '45.0',
        qualifiers: ['A'],
        dateTime: '2019-11-25',
    },
    {
        value: '44.3',
        qualifiers: ['A'],
        dateTime: '2019-11-26',
    },
    {
        value: '36.6',
        qualifiers: ['A'],
        dateTime: '2019-11-27',
    },
    {
        value: '40.9',
        qualifiers: ['A'],
        dateTime: '2019-11-28',
    },
    {
        value: '71.7',
        qualifiers: ['A'],
        dateTime: '2019-11-29',
    },
    {
        value: '81.7',
        qualifiers: ['A'],
        dateTime: '2019-11-30',
    },
    {
        value: '58.2',
        qualifiers: ['A'],
        dateTime: '2019-12-01',
    },
    {
        value: '77.1',
        qualifiers: ['A'],
        dateTime: '2019-12-02',
    },
    {
        value: '91.8',
        qualifiers: ['A'],
        dateTime: '2019-12-03',
    },
    {
        value: '68.9',
        qualifiers: ['A'],
        dateTime: '2019-12-04',
    },
    {
        value: '56.4',
        qualifiers: ['A'],
        dateTime: '2019-12-05',
    },
    {
        value: '51.2',
        qualifiers: ['A'],
        dateTime: '2019-12-06',
    },
    {
        value: '47.1',
        qualifiers: ['A'],
        dateTime: '2019-12-07',
    },
    {
        value: '46.5',
        qualifiers: ['A'],
        dateTime: '2019-12-08',
    },
    {
        value: '44.0',
        qualifiers: ['A'],
        dateTime: '2019-12-09',
    },
    {
        value: '38.0',
        qualifiers: ['A'],
        dateTime: '2019-12-10',
    },
    {
        value: '37.9',
        qualifiers: ['A'],
        dateTime: '2019-12-11',
    },
    {
        value: '42.1',
        qualifiers: ['A'],
        dateTime: '2019-12-12',
    },
    {
        value: '44.0',
        qualifiers: ['A'],
        dateTime: '2019-12-13',
    },
    {
        value: '43.0',
        qualifiers: ['A'],
        dateTime: '2019-12-14',
    },
    {
        value: '40.1',
        qualifiers: ['A'],
        dateTime: '2019-12-15',
    },
    {
        value: '31.5',
        qualifiers: ['A'],
        dateTime: '2019-12-16',
    },
    {
        value: '13.1',
        qualifiers: ['A'],
        dateTime: '2019-12-17',
    },
    {
        value: '26.9',
        qualifiers: ['A', 'e'],
        dateTime: '2019-12-18',
    },
    {
        value: '40.4',
        qualifiers: ['A'],
        dateTime: '2019-12-19',
    },
    {
        value: '34.1',
        qualifiers: ['A'],
        dateTime: '2019-12-20',
    },
    {
        value: '41.2',
        qualifiers: ['A', 'e'],
        dateTime: '2019-12-21',
    },
    {
        value: '50.8',
        qualifiers: ['A'],
        dateTime: '2019-12-22',
    },
    {
        value: '52.3',
        qualifiers: ['A'],
        dateTime: '2019-12-23',
    },
    {
        value: '45.1',
        qualifiers: ['A'],
        dateTime: '2019-12-24',
    },
    {
        value: '41.5',
        qualifiers: ['A'],
        dateTime: '2019-12-25',
    },
    {
        value: '29.0',
        qualifiers: ['A'],
        dateTime: '2019-12-26',
    },
    {
        value: '22.0',
        qualifiers: ['A'],
        dateTime: '2019-12-27',
    },
    {
        value: '36.0',
        qualifiers: ['A'],
        dateTime: '2019-12-28',
    },
    {
        value: '24.2',
        qualifiers: ['A'],
        dateTime: '2019-12-29',
    },
    {
        value: '12.9',
        qualifiers: ['A'],
        dateTime: '2019-12-30',
    },
    {
        value: '15.8',
        qualifiers: ['A'],
        dateTime: '2019-12-31',
    },
    {
        value: '47.2',
        qualifiers: ['A', 'e'],
        dateTime: '2020-01-01',
    },
    {
        value: '46.6',
        qualifiers: ['A'],
        dateTime: '2020-01-02',
    },
    {
        value: '40.2',
        qualifiers: ['A'],
        dateTime: '2020-01-03',
    },
    {
        value: '46.9',
        qualifiers: ['A'],
        dateTime: '2020-01-04',
    },
    {
        value: '44.8',
        qualifiers: ['A'],
        dateTime: '2020-01-05',
    },
    {
        value: '36.8',
        qualifiers: ['A'],
        dateTime: '2020-01-06',
    },
    {
        value: '38.9',
        qualifiers: ['A'],
        dateTime: '2020-01-07',
    },
    {
        value: '38.5',
        qualifiers: ['A'],
        dateTime: '2020-01-08',
    },
    {
        value: '36.5',
        qualifiers: ['A'],
        dateTime: '2020-01-09',
    },
    {
        value: '32.4',
        qualifiers: ['A'],
        dateTime: '2020-01-10',
    },
    {
        value: '28.9',
        qualifiers: ['A'],
        dateTime: '2020-01-11',
    },
    {
        value: '26.6',
        qualifiers: ['A'],
        dateTime: '2020-01-12',
    },
    {
        value: '31.7',
        qualifiers: ['A'],
        dateTime: '2020-01-13',
    },
    {
        value: '34.4',
        qualifiers: ['A'],
        dateTime: '2020-01-14',
    },
    {
        value: '36.6',
        qualifiers: ['A'],
        dateTime: '2020-01-15',
    },
    {
        value: '40.0',
        qualifiers: ['A'],
        dateTime: '2020-01-16',
    },
    {
        value: '41.3',
        qualifiers: ['A'],
        dateTime: '2020-01-17',
    },
    {
        value: '34.1',
        qualifiers: ['A'],
        dateTime: '2020-01-18',
    },
    {
        value: '33.4',
        qualifiers: ['A'],
        dateTime: '2020-01-19',
    },
    {
        value: '40.0',
        qualifiers: ['A'],
        dateTime: '2020-01-20',
    },
    {
        value: '43.3',
        qualifiers: ['A'],
        dateTime: '2020-01-21',
    },
    {
        value: '42.4',
        qualifiers: ['A'],
        dateTime: '2020-01-22',
    },
    {
        value: '37.8',
        qualifiers: ['A'],
        dateTime: '2020-01-23',
    },
    {
        value: '37.1',
        qualifiers: ['A'],
        dateTime: '2020-01-24',
    },
    {
        value: '37.8',
        qualifiers: ['A'],
        dateTime: '2020-01-25',
    },
    {
        value: '36.7',
        qualifiers: ['A'],
        dateTime: '2020-01-26',
    },
    {
        value: '37.7',
        qualifiers: ['A'],
        dateTime: '2020-01-27',
    },
    {
        value: '34.4',
        qualifiers: ['A'],
        dateTime: '2020-01-28',
    },
    {
        value: '35.9',
        qualifiers: ['A'],
        dateTime: '2020-01-29',
    },
    {
        value: '34.2',
        qualifiers: ['A'],
        dateTime: '2020-01-30',
    },
    {
        value: '29.0',
        qualifiers: ['A'],
        dateTime: '2020-01-31',
    },
    {
        value: '41.4',
        qualifiers: ['A'],
        dateTime: '2020-02-01',
    },
    {
        value: '37.8',
        qualifiers: ['A'],
        dateTime: '2020-02-02',
    },
    {
        value: '34.4',
        qualifiers: ['A'],
        dateTime: '2020-02-03',
    },
    {
        value: '29.3',
        qualifiers: ['A'],
        dateTime: '2020-02-04',
    },
    {
        value: '18.1',
        qualifiers: ['A'],
        dateTime: '2020-02-05',
    },
    {
        value: '24.5',
        qualifiers: ['A'],
        dateTime: '2020-02-06',
    },
    {
        value: '38.1',
        qualifiers: ['A'],
        dateTime: '2020-02-07',
    },
    {
        value: '39.3',
        qualifiers: ['A'],
        dateTime: '2020-02-08',
    },
    {
        value: '46.4',
        qualifiers: ['A'],
        dateTime: '2020-02-09',
    },
    {
        value: '40.7',
        qualifiers: ['A'],
        dateTime: '2020-02-10',
    },
    {
        value: '43.3',
        qualifiers: ['A'],
        dateTime: '2020-02-11',
    },
    {
        value: '42.4',
        qualifiers: ['A'],
        dateTime: '2020-02-12',
    },
    {
        value: '40.1',
        qualifiers: ['A'],
        dateTime: '2020-02-13',
    },
    {
        value: '41.3',
        qualifiers: ['A'],
        dateTime: '2020-02-14',
    },
    {
        value: '40.3',
        qualifiers: ['A'],
        dateTime: '2020-02-15',
    },
    {
        value: '40.1',
        qualifiers: ['A'],
        dateTime: '2020-02-16',
    },
    {
        value: '41.5',
        qualifiers: ['A'],
        dateTime: '2020-02-17',
    },
    {
        value: '37.8',
        qualifiers: ['A'],
        dateTime: '2020-02-18',
    },
    {
        value: '32.6',
        qualifiers: ['A'],
        dateTime: '2020-02-19',
    },
    {
        value: '31.7',
        qualifiers: ['A'],
        dateTime: '2020-02-20',
    },
    {
        value: '35.7',
        qualifiers: ['A'],
        dateTime: '2020-02-21',
    },
    {
        value: '46.9',
        qualifiers: ['A'],
        dateTime: '2020-02-22',
    },
    {
        value: '43.2',
        qualifiers: ['A'],
        dateTime: '2020-02-23',
    },
    {
        value: '37.9',
        qualifiers: ['A'],
        dateTime: '2020-02-24',
    },
    {
        value: '26.5',
        qualifiers: ['A'],
        dateTime: '2020-02-25',
    },
    {
        value: '21.4',
        qualifiers: ['A', 'e'],
        dateTime: '2020-02-26',
    },
    {
        value: '41.4',
        qualifiers: ['A'],
        dateTime: '2020-02-27',
    },
    {
        value: '42.1',
        qualifiers: ['A'],
        dateTime: '2020-02-28',
    },
    {
        value: '40.3',
        qualifiers: ['A', 'e'],
        dateTime: '2020-02-29',
    },
    {
        value: '38.3',
        qualifiers: ['A'],
        dateTime: '2020-03-01',
    },
    {
        value: '37.6',
        qualifiers: ['A'],
        dateTime: '2020-03-02',
    },
    {
        value: '38.0',
        qualifiers: ['A'],
        dateTime: '2020-03-03',
    },
    {
        value: '38.7',
        qualifiers: ['A'],
        dateTime: '2020-03-04',
    },
    {
        value: '39.8',
        qualifiers: ['A'],
        dateTime: '2020-03-05',
    },
    {
        value: '41.6',
        qualifiers: ['A'],
        dateTime: '2020-03-06',
    },
    {
        value: '41.9',
        qualifiers: ['A'],
        dateTime: '2020-03-07',
    },
    {
        value: '45.1',
        qualifiers: ['A'],
        dateTime: '2020-03-08',
    },
    {
        value: '49.5',
        qualifiers: ['A'],
        dateTime: '2020-03-09',
    },
    {
        value: '47.2',
        qualifiers: ['A'],
        dateTime: '2020-03-10',
    },
    {
        value: '44.6',
        qualifiers: ['A'],
        dateTime: '2020-03-11',
    },
    {
        value: '49.3',
        qualifiers: ['A'],
        dateTime: '2020-03-12',
    },
    {
        value: '46.2',
        qualifiers: ['A'],
        dateTime: '2020-03-13',
    },
    {
        value: '46.9',
        qualifiers: ['A'],
        dateTime: '2020-03-14',
    },
    {
        value: '46.8',
        qualifiers: ['A'],
        dateTime: '2020-03-15',
    },
    {
        value: '47.7',
        qualifiers: ['A'],
        dateTime: '2020-03-16',
    },
    {
        value: '46.5',
        qualifiers: ['A'],
        dateTime: '2020-03-17',
    },
    {
        value: '47.0',
        qualifiers: ['A'],
        dateTime: '2020-03-18',
    },
    {
        value: '52.2',
        qualifiers: ['A'],
        dateTime: '2020-03-19',
    },
    {
        value: '44.8',
        qualifiers: ['A'],
        dateTime: '2020-03-20',
    },
    {
        value: '46.3',
        qualifiers: ['A'],
        dateTime: '2020-03-21',
    },
    {
        value: '46.7',
        qualifiers: ['A'],
        dateTime: '2020-03-22',
    },
    {
        value: '45.8',
        qualifiers: ['A'],
        dateTime: '2020-03-23',
    },
    {
        value: '47.4',
        qualifiers: ['A'],
        dateTime: '2020-03-24',
    },
    {
        value: '48.8',
        qualifiers: ['A'],
        dateTime: '2020-03-25',
    },
    {
        value: '48.5',
        qualifiers: ['A'],
        dateTime: '2020-03-26',
    },
    {
        value: '50.5',
        qualifiers: ['A'],
        dateTime: '2020-03-27',
    },
    {
        value: '48.2',
        qualifiers: ['A'],
        dateTime: '2020-03-28',
    },
    {
        value: '43.2',
        qualifiers: ['A'],
        dateTime: '2020-03-29',
    },
    {
        value: '47.6',
        qualifiers: ['A'],
        dateTime: '2020-03-30',
    },
    {
        value: '45.8',
        qualifiers: ['A'],
        dateTime: '2020-03-31',
    },
    {
        value: '44.6',
        qualifiers: ['A'],
        dateTime: '2020-04-01',
    },
    {
        value: '45.2',
        qualifiers: ['A'],
        dateTime: '2020-04-02',
    },
    {
        value: '40.7',
        qualifiers: ['A'],
        dateTime: '2020-04-03',
    },
    {
        value: '43.5',
        qualifiers: ['A'],
        dateTime: '2020-04-04',
    },
    {
        value: '45.8',
        qualifiers: ['A'],
        dateTime: '2020-04-05',
    },
    {
        value: '47.7',
        qualifiers: ['A'],
        dateTime: '2020-04-06',
    },
    {
        value: '52.5',
        qualifiers: ['A'],
        dateTime: '2020-04-07',
    },
    {
        value: '56.2',
        qualifiers: ['A'],
        dateTime: '2020-04-08',
    },
    {
        value: '61.7',
        qualifiers: ['A'],
        dateTime: '2020-04-09',
    },
    {
        value: '67.5',
        qualifiers: ['A'],
        dateTime: '2020-04-10',
    },
    {
        value: '73.0',
        qualifiers: ['A'],
        dateTime: '2020-04-11',
    },
    {
        value: '74.5',
        qualifiers: ['A'],
        dateTime: '2020-04-12',
    },
    {
        value: '62.6',
        qualifiers: ['A'],
        dateTime: '2020-04-13',
    },
    {
        value: '58.6',
        qualifiers: ['A'],
        dateTime: '2020-04-14',
    },
    {
        value: '65.4',
        qualifiers: ['A'],
        dateTime: '2020-04-15',
    },
    {
        value: '70.1',
        qualifiers: ['A'],
        dateTime: '2020-04-16',
    },
    {
        value: '62.3',
        qualifiers: ['A'],
        dateTime: '2020-04-17',
    },
    {
        value: '67.2',
        qualifiers: ['A'],
        dateTime: '2020-04-18',
    },
    {
        value: '62.2',
        qualifiers: ['A'],
        dateTime: '2020-04-19',
    },
    {
        value: '63.5',
        qualifiers: ['A'],
        dateTime: '2020-04-20',
    },
    {
        value: '67.1',
        qualifiers: ['A'],
        dateTime: '2020-04-21',
    },
    {
        value: '67.2',
        qualifiers: ['A'],
        dateTime: '2020-04-22',
    },
    {
        value: '69.1',
        qualifiers: ['A'],
        dateTime: '2020-04-23',
    },
    {
        value: '77.8',
        qualifiers: ['A'],
        dateTime: '2020-04-24',
    },
    {
        value: '79.0',
        qualifiers: ['A'],
        dateTime: '2020-04-25',
    },
    {
        value: '82.8',
        qualifiers: ['A'],
        dateTime: '2020-04-26',
    },
    {
        value: '88.4',
        qualifiers: ['A'],
        dateTime: '2020-04-27',
    },
    {
        value: '107',
        qualifiers: ['A'],
        dateTime: '2020-04-28',
    },
    {
        value: '124',
        qualifiers: ['A'],
        dateTime: '2020-04-29',
    },
    {
        value: '145',
        qualifiers: ['A'],
        dateTime: '2020-04-30',
    },
    {
        value: '169',
        qualifiers: ['A'],
        dateTime: '2020-05-01',
    },
    {
        value: '210',
        qualifiers: ['A'],
        dateTime: '2020-05-02',
    },
    {
        value: '237',
        qualifiers: ['A'],
        dateTime: '2020-05-03',
    },
    {
        value: '245',
        qualifiers: ['A'],
        dateTime: '2020-05-04',
    },
    {
        value: '205',
        qualifiers: ['A'],
        dateTime: '2020-05-05',
    },
    {
        value: '195',
        qualifiers: ['A'],
        dateTime: '2020-05-06',
    },
    {
        value: '202',
        qualifiers: ['A'],
        dateTime: '2020-05-07',
    },
    {
        value: '200',
        qualifiers: ['A'],
        dateTime: '2020-05-08',
    },
    {
        value: '191',
        qualifiers: ['A'],
        dateTime: '2020-05-09',
    },
    {
        value: '191',
        qualifiers: ['A'],
        dateTime: '2020-05-10',
    },
    {
        value: '201',
        qualifiers: ['A'],
        dateTime: '2020-05-11',
    },
    {
        value: '196',
        qualifiers: ['A'],
        dateTime: '2020-05-12',
    },
    {
        value: '208',
        qualifiers: ['A'],
        dateTime: '2020-05-13',
    },
    {
        value: '224',
        qualifiers: ['A'],
        dateTime: '2020-05-14',
    },
    {
        value: '233',
        qualifiers: ['A'],
        dateTime: '2020-05-15',
    },
    {
        value: '241',
        qualifiers: ['A'],
        dateTime: '2020-05-16',
    },
    {
        value: '269',
        qualifiers: ['A'],
        dateTime: '2020-05-17',
    },
    {
        value: '337',
        qualifiers: ['A'],
        dateTime: '2020-05-18',
    },
    {
        value: '395',
        qualifiers: ['A'],
        dateTime: '2020-05-19',
    },
    {
        value: '441',
        qualifiers: ['A'],
        dateTime: '2020-05-20',
    },
    {
        value: '501',
        qualifiers: ['A'],
        dateTime: '2020-05-21',
    },
    {
        value: '425',
        qualifiers: ['A'],
        dateTime: '2020-05-22',
    },
    {
        value: '411',
        qualifiers: ['A'],
        dateTime: '2020-05-23',
    },
    {
        value: '414',
        qualifiers: ['A'],
        dateTime: '2020-05-24',
    },
    {
        value: '362',
        qualifiers: ['A'],
        dateTime: '2020-05-25',
    },
    {
        value: '324',
        qualifiers: ['A'],
        dateTime: '2020-05-26',
    },
    {
        value: '333',
        qualifiers: ['A'],
        dateTime: '2020-05-27',
    },
    {
        value: '388',
        qualifiers: ['A'],
        dateTime: '2020-05-28',
    },
    {
        value: '462',
        qualifiers: ['A'],
        dateTime: '2020-05-29',
    },
    {
        value: '564',
        qualifiers: ['A'],
        dateTime: '2020-05-30',
    },
    {
        value: '666',
        qualifiers: ['A'],
        dateTime: '2020-05-31',
    },
    {
        value: '723',
        qualifiers: ['A'],
        dateTime: '2020-06-01',
    },
    {
        value: '761',
        qualifiers: ['A'],
        dateTime: '2020-06-02',
    },
    {
        value: '733',
        qualifiers: ['A'],
        dateTime: '2020-06-03',
    },
    {
        value: '729',
        qualifiers: ['A'],
        dateTime: '2020-06-04',
    },
    {
        value: '732',
        qualifiers: ['A'],
        dateTime: '2020-06-05',
    },
    {
        value: '792',
        qualifiers: ['A'],
        dateTime: '2020-06-06',
    },
    {
        value: '800',
        qualifiers: ['A'],
        dateTime: '2020-06-07',
    },
    {
        value: '757',
        qualifiers: ['A'],
        dateTime: '2020-06-08',
    },
    {
        value: '704',
        qualifiers: ['A'],
        dateTime: '2020-06-09',
    },
    {
        value: '600',
        qualifiers: ['P'],
        dateTime: '2020-06-10',
    },
    {
        value: '554',
        qualifiers: ['P'],
        dateTime: '2020-06-11',
    },
    {
        value: '522',
        qualifiers: ['P'],
        dateTime: '2020-06-12',
    },
    {
        value: '520',
        qualifiers: ['P'],
        dateTime: '2020-06-13',
    },
    {
        value: '565',
        qualifiers: ['P'],
        dateTime: '2020-06-14',
    },
    {
        value: '567',
        qualifiers: ['P'],
        dateTime: '2020-06-15',
    },
    {
        value: '549',
        qualifiers: ['P'],
        dateTime: '2020-06-16',
    },
    {
        value: '555',
        qualifiers: ['P'],
        dateTime: '2020-06-17',
    },
    {
        value: '563',
        qualifiers: ['P'],
        dateTime: '2020-06-18',
    },
    {
        value: '652',
        qualifiers: ['P'],
        dateTime: '2020-06-19',
    },
    {
        value: '547',
        qualifiers: ['P'],
        dateTime: '2020-06-20',
    },
    {
        value: '481',
        qualifiers: ['P'],
        dateTime: '2020-06-21',
    },
    {
        value: '464',
        qualifiers: ['P'],
        dateTime: '2020-06-22',
    },
    {
        value: '473',
        qualifiers: ['P'],
        dateTime: '2020-06-23',
    },
    {
        value: '480',
        qualifiers: ['P'],
        dateTime: '2020-06-24',
    },
    {
        value: '494',
        qualifiers: ['P'],
        dateTime: '2020-06-25',
    },
    {
        value: '477',
        qualifiers: ['P'],
        dateTime: '2020-06-26',
    },
    {
        value: '468',
        qualifiers: ['P'],
        dateTime: '2020-06-27',
    },
    {
        value: '448',
        qualifiers: ['P'],
        dateTime: '2020-06-28',
    },
    {
        value: '421',
        qualifiers: ['P'],
        dateTime: '2020-06-29',
    },
    {
        value: '400',
        qualifiers: ['P'],
        dateTime: '2020-06-30',
    },
    {
        value: '368',
        qualifiers: ['P'],
        dateTime: '2020-07-01',
    },
    {
        value: '350',
        qualifiers: ['P'],
        dateTime: '2020-07-02',
    },
    {
        value: '335',
        qualifiers: ['P'],
        dateTime: '2020-07-03',
    },
    {
        value: '329',
        qualifiers: ['P'],
        dateTime: '2020-07-04',
    },
    {
        value: '331',
        qualifiers: ['P'],
        dateTime: '2020-07-05',
    },
    {
        value: '323',
        qualifiers: ['P'],
        dateTime: '2020-07-06',
    },
    {
        value: '314',
        qualifiers: ['P'],
        dateTime: '2020-07-07',
    },
    {
        value: '297',
        qualifiers: ['P'],
        dateTime: '2020-07-08',
    },
    {
        value: '275',
        qualifiers: ['P'],
        dateTime: '2020-07-09',
    },
    {
        value: '248',
        qualifiers: ['P'],
        dateTime: '2020-07-10',
    },
    {
        value: '233',
        qualifiers: ['P'],
        dateTime: '2020-07-11',
    },
    {
        value: '225',
        qualifiers: ['P'],
        dateTime: '2020-07-12',
    },
    {
        value: '221',
        qualifiers: ['P'],
        dateTime: '2020-07-13',
    },
    {
        value: '222',
        qualifiers: ['P'],
        dateTime: '2020-07-14',
    },
    {
        value: '226',
        qualifiers: ['P'],
        dateTime: '2020-07-15',
    },
    {
        value: '211',
        qualifiers: ['P'],
        dateTime: '2020-07-16',
    },
    {
        value: '200',
        qualifiers: ['P'],
        dateTime: '2020-07-17',
    },
    {
        value: '194',
        qualifiers: ['P'],
        dateTime: '2020-07-18',
    },
    {
        value: '181',
        qualifiers: ['P'],
        dateTime: '2020-07-19',
    },
    {
        value: '172',
        qualifiers: ['P'],
        dateTime: '2020-07-20',
    },
    {
        value: '162',
        qualifiers: ['P'],
        dateTime: '2020-07-21',
    },
    {
        value: '152',
        qualifiers: ['P'],
        dateTime: '2020-07-22',
    },
    {
        value: '147',
        qualifiers: ['P'],
        dateTime: '2020-07-23',
    },
    {
        value: '183',
        qualifiers: ['P'],
        dateTime: '2020-07-24',
    },
    {
        value: '226',
        qualifiers: ['P'],
        dateTime: '2020-07-25',
    },
    {
        value: '249',
        qualifiers: ['P'],
        dateTime: '2020-07-26',
    },
    {
        value: '211',
        qualifiers: ['P'],
        dateTime: '2020-07-27',
    },
    {
        value: '180',
        qualifiers: ['P'],
        dateTime: '2020-07-28',
    },
    {
        value: '174',
        qualifiers: ['P'],
        dateTime: '2020-07-29',
    },
    {
        value: '157',
        qualifiers: ['P'],
        dateTime: '2020-07-30',
    },
    {
        value: '152',
        qualifiers: ['P'],
        dateTime: '2020-07-31',
    },
    {
        value: '149',
        qualifiers: ['P'],
        dateTime: '2020-08-01',
    },
    {
        value: '143',
        qualifiers: ['P'],
        dateTime: '2020-08-02',
    },
    {
        value: '140',
        qualifiers: ['P'],
        dateTime: '2020-08-03',
    },
    {
        value: '135',
        qualifiers: ['P'],
        dateTime: '2020-08-04',
    },
    {
        value: '136',
        qualifiers: ['P'],
        dateTime: '2020-08-05',
    },
    {
        value: '138',
        qualifiers: ['P'],
        dateTime: '2020-08-06',
    },
    {
        value: '129',
        qualifiers: ['P'],
        dateTime: '2020-08-07',
    },
    {
        value: '125',
        qualifiers: ['P'],
        dateTime: '2020-08-08',
    },
    {
        value: '122',
        qualifiers: ['P'],
        dateTime: '2020-08-09',
    },
    {
        value: '119',
        qualifiers: ['P'],
        dateTime: '2020-08-10',
    },
    {
        value: '116',
        qualifiers: ['P'],
        dateTime: '2020-08-11',
    },
    {
        value: '119',
        qualifiers: ['P'],
        dateTime: '2020-08-12',
    },
    {
        value: '117',
        qualifiers: ['P'],
        dateTime: '2020-08-13',
    },
    {
        value: '109',
        qualifiers: ['P'],
        dateTime: '2020-08-14',
    },
    {
        value: '107',
        qualifiers: ['P'],
        dateTime: '2020-08-15',
    },
    {
        value: '103',
        qualifiers: ['P'],
        dateTime: '2020-08-16',
    },
    {
        value: '104',
        qualifiers: ['P'],
        dateTime: '2020-08-17',
    },
    {
        value: '101',
        qualifiers: ['P'],
        dateTime: '2020-08-18',
    },
    {
        value: '98.4',
        qualifiers: ['P'],
        dateTime: '2020-08-19',
    },
    {
        value: '97.0',
        qualifiers: ['P'],
        dateTime: '2020-08-20',
    },
    {
        value: '102',
        qualifiers: ['P'],
        dateTime: '2020-08-21',
    },
    {
        value: '94.0',
        qualifiers: ['P'],
        dateTime: '2020-08-22',
    },
    {
        value: '88.0',
        qualifiers: ['P'],
        dateTime: '2020-08-23',
    },
    {
        value: '86.8',
        qualifiers: ['P'],
        dateTime: '2020-08-24',
    },
    {
        value: '90.9',
        qualifiers: ['P'],
        dateTime: '2020-08-25',
    },
    {
        value: '103',
        qualifiers: ['P'],
        dateTime: '2020-08-26',
    },
    {
        value: '125',
        qualifiers: ['P'],
        dateTime: '2020-08-27',
    },
    {
        value: '125',
        qualifiers: ['P'],
        dateTime: '2020-08-28',
    },
    {
        value: '117',
        qualifiers: ['P'],
        dateTime: '2020-08-29',
    },
    {
        value: '106',
        qualifiers: ['P'],
        dateTime: '2020-08-30',
    },
    {
        value: '94.7',
        qualifiers: ['P'],
        dateTime: '2020-08-31',
    },
    {
        value: '96.0',
        qualifiers: ['P'],
        dateTime: '2020-09-01',
    },
    {
        value: '89.6',
        qualifiers: ['P'],
        dateTime: '2020-09-02',
    },
    {
        value: '83.1',
        qualifiers: ['P'],
        dateTime: '2020-09-03',
    },
    {
        value: '76.9',
        qualifiers: ['P'],
        dateTime: '2020-09-04',
    },
    {
        value: '74.9',
        qualifiers: ['P'],
        dateTime: '2020-09-05',
    },
    {
        value: '68.8',
        qualifiers: ['P'],
        dateTime: '2020-09-06',
    },
    {
        value: '68.1',
        qualifiers: ['P'],
        dateTime: '2020-09-07',
    },
    {
        value: '73.6',
        qualifiers: ['P'],
        dateTime: '2020-09-08',
    },
    {
        value: '80.4',
        qualifiers: ['P'],
        dateTime: '2020-09-09',
    },
    {
        value: '83.5',
        qualifiers: ['P'],
        dateTime: '2020-09-10',
    },
    {
        value: '86.7',
        qualifiers: ['P'],
        dateTime: '2020-09-11',
    },
    {
        value: '76.6',
        qualifiers: ['P'],
        dateTime: '2020-09-12',
    },
    {
        value: '76.6',
        qualifiers: ['P'],
        dateTime: '2020-09-13',
    },
    {
        value: '69.1',
        qualifiers: ['P'],
        dateTime: '2020-09-14',
    },
    {
        value: '66.4',
        qualifiers: ['P'],
        dateTime: '2020-09-15',
    },
    {
        value: '65.8',
        qualifiers: ['P'],
        dateTime: '2020-09-16',
    },
    {
        value: '69.2',
        qualifiers: ['P'],
        dateTime: '2020-09-17',
    },
    {
        value: '67.4',
        qualifiers: ['P'],
        dateTime: '2020-09-18',
    },
    {
        value: '64.2',
        qualifiers: ['P'],
        dateTime: '2020-09-19',
    },
    {
        value: '61.2',
        qualifiers: ['P'],
        dateTime: '2020-09-20',
    },
    {
        value: '62.7',
        qualifiers: ['P'],
        dateTime: '2020-09-21',
    },
    {
        value: '63.7',
        qualifiers: ['P'],
        dateTime: '2020-09-22',
    },
    {
        value: '61.4',
        qualifiers: ['P'],
        dateTime: '2020-09-23',
    },
    {
        value: '60.5',
        qualifiers: ['P'],
        dateTime: '2020-09-24',
    },
    {
        value: '59.8',
        qualifiers: ['P'],
        dateTime: '2020-09-25',
    },
    {
        value: '57.9',
        qualifiers: ['P'],
        dateTime: '2020-09-26',
    },
    {
        value: '57.1',
        qualifiers: ['P'],
        dateTime: '2020-09-27',
    },
    {
        value: '57.5',
        qualifiers: ['P'],
        dateTime: '2020-09-28',
    },
    {
        value: '61.1',
        qualifiers: ['P'],
        dateTime: '2020-09-29',
    },
    {
        value: '55.1',
        qualifiers: ['P'],
        dateTime: '2020-09-30',
    },
    {
        value: '57.1',
        qualifiers: ['P'],
        dateTime: '2020-10-01',
    },
    {
        value: '54.1',
        qualifiers: ['P'],
        dateTime: '2020-10-02',
    },
    {
        value: '52.2',
        qualifiers: ['P'],
        dateTime: '2020-10-03',
    },
    {
        value: '53.8',
        qualifiers: ['P'],
        dateTime: '2020-10-04',
    },
    {
        value: '55.5',
        qualifiers: ['P'],
        dateTime: '2020-10-05',
    },
    {
        value: '52.1',
        qualifiers: ['P'],
        dateTime: '2020-10-06',
    },
    {
        value: '51.7',
        qualifiers: ['P'],
        dateTime: '2020-10-07',
    },
    {
        value: '49.3',
        qualifiers: ['P'],
        dateTime: '2020-10-08',
    },
    {
        value: '49.2',
        qualifiers: ['P'],
        dateTime: '2020-10-09',
    },
    {
        value: '47.0',
        qualifiers: ['P'],
        dateTime: '2020-10-10',
    },
    {
        value: '48.0',
        qualifiers: ['P'],
        dateTime: '2020-10-11',
    },
    {
        value: '51.1',
        qualifiers: ['P'],
        dateTime: '2020-10-12',
    },
    {
        value: '50.3',
        qualifiers: ['P'],
        dateTime: '2020-10-13',
    },
    {
        value: '54.3',
        qualifiers: ['P'],
        dateTime: '2020-10-14',
    },
    {
        value: '50.8',
        qualifiers: ['P'],
        dateTime: '2020-10-15',
    },
    {
        value: '52.3',
        qualifiers: ['P'],
        dateTime: '2020-10-16',
    },
    {
        value: '51.2',
        qualifiers: ['P'],
        dateTime: '2020-10-17',
    },
    {
        value: '53.1',
        qualifiers: ['P'],
        dateTime: '2020-10-18',
    },
    {
        value: '55.3',
        qualifiers: ['P'],
        dateTime: '2020-10-19',
    },
    {
        value: '48.0',
        qualifiers: ['P'],
        dateTime: '2020-10-20',
    },
    {
        value: '53.1',
        qualifiers: ['P'],
        dateTime: '2020-10-21',
    },
    {
        value: '53.3',
        qualifiers: ['P'],
        dateTime: '2020-10-22',
    },
    {
        value: '51.6',
        qualifiers: ['P'],
        dateTime: '2020-10-23',
    },
    {
        value: '55.9',
        qualifiers: ['P'],
        dateTime: '2020-10-24',
    },
    {
        value: '44.3',
        qualifiers: ['P'],
        dateTime: '2020-10-25',
    },
    {
        value: '35.7',
        qualifiers: ['P'],
        dateTime: '2020-10-26',
    },
    {
        value: '29.8',
        qualifiers: ['P'],
        dateTime: '2020-10-27',
    },
]

export default class RechartLineGraph extends PureComponent {
    render() {
        return (
            <LineChart
                width={1200}
                height={300}
                data={riverData.map((d) => ({ ...d, value: +d.value }))}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="dateTime" />
                <Tooltip />
                <Legend />
                <YAxis />
            </LineChart>
        )
    }
}
