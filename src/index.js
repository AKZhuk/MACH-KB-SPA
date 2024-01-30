import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


window.__SERVER_DATA__ = window.__SERVER_DATA__ || {};
window.__SERVER_DATA__ = Object.assign(window.__SERVER_DATA__, {
  PERSONS: [
    {
      id: '4060741400009656919',
      email: 'Tatsiana_Polyn@epam.com',
      fullName: 'Tatsiana Polyn',
      title: 'Lead Business Analyst',
      avatar: 'd900aa75b0161fa90acd7b81d4d61a7a.jpg',
      city: 'Tbilisi',
      country: 'Georgia',
      reporterId: '4060741400007785905',
    },
  ],
  RECOGNITIONS: {
    totalPeopleAwarded: 1,
    totalTopContributors: 0,
    countries: ['Georgia'],
    employees: [
      {
        employeeId: '4060741400009656919',
        lastDateAssigned: '2024-01-08T09:13:55.186Z',
        comment: 'Thanks for creating R&D RACI Matrix and a relevant KB page!',
        badges: [{badgeId: 7599, count: 2}],
      },
      {
        employeeId: '4060741400009656919',
        lastDateAssigned: '2024-01-08T09:13:55.186Z',
        comment: 'Thanks for creating R&D RACI Matrix and a relevant KB page!',
        badges: [
          {badgeId: 7599, count: 2},
          {badgeId: 7208, count: 2},
          {badgeId: 9032, count: 5},
        ],
      },
      {
        employeeId: '4060741400009656919',
        lastDateAssigned: '2024-01-08T09:13:55.186Z',
        comment: 'Thanks for creating R&D RACI Matrix and a relevant KB page!',
        badges: [{badgeId: 7599, count: 2}],
      },
      {
        employeeId: '4060741400009656919',
        lastDateAssigned: '2024-01-08T09:13:55.186Z',
        comment: 'Thanks for creating R&D RACI Matrix and a relevant KB page!',
        badges: [{badgeId: 7599, count: 2}],
      },
      {
        employeeId: '4060741400009656919',
        lastDateAssigned: '2024-01-08T09:13:55.186Z',
        comment: 'Thanks for creating R&D RACI Matrix and a relevant KB page!',
        badges: [{badgeId: 7599, count: 2}],
      },
    ],
    badges: [
      {
        id: 7207,
        name: 'MACH CC Presale',
        comment: 'Thank you for your contribution to MACH CC pre-sale activities!',
        photo:
          'https://heroes.blob.core.windows.net/heroes-prod/prod/static-site/1000000/badge/7207/S220_220.png',
      },
      {
        id: 7208,
        name: 'MACH CC Consulting',
        comment: 'Thank you for your contribution to MACH CC consulting activities!',
        photo:
          'https://heroes.blob.core.windows.net/heroes-prod/prod/static-site/1000000/badge/7208/S220_220.png',
      },
      {
        id: 7220,
        name: 'MACH CC Helping Hands',
        comment: 'Thanks for your help and contribution to MACH CC!',
        photo:
          'https://heroes.blob.core.windows.net/heroes-prod/prod/static-site/1000000/badge/7220/S220_220.png',
      },
      {
        id: 7599,
        name: 'MACH CC R&D Contributor',
        comment:
          'Thank you for going the extra mile in Research and Development initiatives and continuously building MACH CC!',
        photo:
          'https://heroes.blob.core.windows.net/heroes-prod/prod/static-site/1000000/badge/7599/S220_220.png',
      },
      {
        id: 9032,
        name: 'MACH CC Top Contributor',
        comment:
          "Congratulations! Thanks to your commitment, you have become one of MACH Competency Center's Top Contributors! Thank you for helping to build and develop our competency center. Great results achieved! Without you this would have been impossible. You are giving a great performance! Keep it up!",
        photo:
          'https://heroes.blob.core.windows.net/heroes-prod/prod/static-site/1000000/badge/9032/S220_220.png',
      },
    ],
  },
  EVENTS: [
    {
      id: '23136',
      url: 'https://wearecommunity.io/events/mach-projects-how-to/talks/46136',
      title: 'MACH projects How to',
      event_type: 'Online only',
      event_format: 'internal',
      event_logo: null,
      event_image:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/MACH-event-example.png',
      start_date: '2023-10-02T07:00:00.000Z',
      end_date: '2023-10-07T14:00:00.000Z',
      location: null,
      country: null,
      city: null,
      street: null,
      language: 'en',
      languages: ['En'],
      community_ids: [959],
      date_range_formatted: '02 October 2023 - 07 October 2023',
    },
    {
      id: '21026',
      url: 'https://wearecommunity.io/events/how-to-write-unit-tests-for-drupal-five-times-faster-test-helpers',
      title: 'MACH Practice Introduction',
      event_type: 'Online only',
      event_format: 'internal',
      event_logo: null,
      event_image: null,
      start_date: '2023-05-19T10:30:00.000Z',
      end_date: '2023-05-19T11:30:00.000Z',
      location: null,
      country: null,
      city: null,
      street: null,
      language: 'en',
      languages: ['En'],
      community_ids: [959],
      date_range_formatted: '19 May 2023',
    },
    {
      id: '20176',
      url: 'https://wearecommunity.io/events/epam-drupal-contribution-week-12',
      title: "What's The MACH All About?",
      event_type: 'Online only',
      event_format: 'internal',
      event_logo: null,
      event_image: null,
      start_date: '2023-05-08T07:00:00.000Z',
      end_date: '2023-05-13T13:45:00.000Z',
      location: null,
      country: null,
      city: null,
      street: null,
      language: 'en',
      languages: ['En'],
      community_ids: [959],
      date_range_formatted: '08 May 2023 - 13 May 2023',
    },
  ],
  CERT_EMPLOYEES: [
    {
      personId: '4060741400438658799',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1703116800000, expiresAt: 1766275200000},
      ],
    },
    {
      personId: '8760000000000957923',
      certs: [
        {id: '4c4f3e9b-9afc-482f-97fc-6bfb91268a33', assignedAt: 1703116800000, expiresAt: 1766275200000},
        {id: '0a6b8137-0cdf-4619-9869-a5a2c11f414f', assignedAt: 1698278400000, expiresAt: 1766275200000},
      ],
    },
    {
      personId: '4060741400463355196',
      certs: [
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1702857600000, expiresAt: 1766016000000},
      ],
    },
    {
      personId: '4060741400451589080',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1702684800000, expiresAt: 1765843200000},
      ],
    },
    {
      personId: '4060741400463355178',
      certs: [
        {id: 'c92fca0c-4707-4251-a6ff-db96eee413cf', assignedAt: 1702425600000, expiresAt: 1765584000000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1582761600000, expiresAt: 1749254400000},
      ],
    },
    {
      personId: '4060741400392316725',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1702252800000, expiresAt: 1765411200000},
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1701302400000, expiresAt: 1764460800000},
      ],
    },
    {
      personId: '8760000000004170267',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1702166400000, expiresAt: 1765324800000},
      ],
    },
    {
      personId: '4060741400419641813',
      certs: [
        {id: 'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1', assignedAt: 1701907200000, expiresAt: 1765065600000},
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1638144000000, expiresAt: 1764288000000},
      ],
    },
    {
      personId: '8760000000000348870',
      certs: [
        {id: '93db0107-4d20-426f-b35f-929d9a5963e1', assignedAt: 1697673600000, expiresAt: 1760832000000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1697587200000, expiresAt: 1760745600000},
      ],
    },
    {
      personId: '4000741400012433932',
      certs: [
        {id: '65cda44b-fea2-41ae-9d14-0571fb644092', assignedAt: 1697500800000, expiresAt: 1760659200000},
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1695600000000, expiresAt: 1758758400000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1669420800000, expiresAt: 1732579200000},
      ],
    },
    {
      personId: '4060741400007810045',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1697414400000, expiresAt: 1760572800000},
      ],
    },
    {
      personId: '8400000000016975495',
      certs: [
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1697328000000, expiresAt: 1760486400000},
      ],
    },
    {
      personId: '8760000000000894437',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1696896000000, expiresAt: 1760054400000},
      ],
    },
    {
      personId: '4060741400009278082',
      certs: [
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1696550400000, expiresAt: 1759708800000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1598313600000, expiresAt: 1661385600000},
      ],
    },
    {
      personId: '4060741400463355317',
      certs: [
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1696204800000, expiresAt: 1759363200000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1632873600000, expiresAt: 1759363200000},
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1582070400000, expiresAt: 1759363200000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1568332800000, expiresAt: 1759363200000},
      ],
    },
    {
      personId: '4060741400463343216',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1695945600000, expiresAt: 1759104000000},
      ],
    },
    {
      personId: '8760000000000777314',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1694131200000, expiresAt: 1757289600000},
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1690848000000, expiresAt: 1754006400000},
        {id: 'c92fca0c-4707-4251-a6ff-db96eee413cf', assignedAt: 1690243200000, expiresAt: 1753401600000},
        {id: '73c5d132-b5cf-4e81-9f7f-0a721b82ae3e', assignedAt: 1687305600000, expiresAt: 1754006400000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1640304000000, expiresAt: 1758326400000},
      ],
    },
    {
      personId: '4060741400469273297',
      certs: [
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1693267200000, expiresAt: 1756425600000},
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1562544000000, expiresAt: 1756425600000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1550448000000, expiresAt: 1756425600000},
      ],
    },
    {
      personId: '8760000000000840526',
      certs: [
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1693008000000, expiresAt: 1756166400000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1600473600000, expiresAt: 1726531200000},
      ],
    },
    {
      personId: '8760000000000589613',
      certs: [
        {id: 'c427b876-4aae-46ce-aeaa-660cadbb0a8e', assignedAt: 1692489600000, expiresAt: 1755648000000},
      ],
    },
    {
      personId: '4060741400399829566',
      certs: [
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1692489600000, expiresAt: 1755648000000},
      ],
    },
    {
      personId: '4060741400420023845',
      certs: [
        {id: '87e2781a-c0b6-4e42-b065-31a7a2bd8fe4', assignedAt: 1691798400000, expiresAt: 1754956800000},
        {id: '94b413c2-89d0-48d5-8777-8a650ff4e584', assignedAt: 1684022400000, expiresAt: 1747180800000},
        {id: 'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1', assignedAt: 1667001600000, expiresAt: 1730160000000},
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1594684800000, expiresAt: 1719792000000},
        {id: '2eefcba5-1141-4484-84ea-ea5905eb8007', assignedAt: 1581120000000, expiresAt: 1644278400000},
        {id: '7f6407ee-fd22-4a22-a81a-f71e86b30eaf', assignedAt: 1574899200000, expiresAt: 1644278400000},
        {id: '93db0107-4d20-426f-b35f-929d9a5963e1', assignedAt: 1497916800000, expiresAt: 1655337600000},
      ],
    },
    {
      personId: '8760000000000803242',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1691712000000, expiresAt: 1754870400000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663891200000, expiresAt: 1727049600000},
      ],
    },
    {
      personId: '4060741400345921103',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1691020800000, expiresAt: 1754179200000},
      ],
    },
    {
      personId: '4060741400409709925',
      certs: [
        {id: '73c5d132-b5cf-4e81-9f7f-0a721b82ae3e', assignedAt: 1688774400000, expiresAt: 1751932800000},
      ],
    },
    {
      personId: '8760000000000187759',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1688169600000, expiresAt: 1751328000000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1654300800000, expiresAt: 1751328000000},
      ],
    },
    {
      personId: '4060741400390713126',
      certs: [
        {id: '2eefcba5-1141-4484-84ea-ea5905eb8007', assignedAt: 1687564800000, expiresAt: 1750723200000},
        {id: 'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1', assignedAt: 1685491200000, expiresAt: 1748649600000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1567814400000, expiresAt: 1630972800000},
      ],
    },
    {
      personId: '4060741400356739416',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1683763200000, expiresAt: 1746921600000},
      ],
    },
    {
      personId: '4060741400462576879',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1683244800000, expiresAt: 1746403200000},
      ],
    },
    {
      personId: '4060741400462559041',
      certs: [
        {id: '7f6407ee-fd22-4a22-a81a-f71e86b30eaf', assignedAt: 1682899200000, expiresAt: 1746057600000},
      ],
    },
    {
      personId: '8760000000000269545',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1681689600000, expiresAt: 1744848000000},
      ],
    },
    {
      personId: '8760000000000338693',
      certs: [
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1681430400000, expiresAt: 1744588800000},
      ],
    },
    {
      personId: '4060741400362315319',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1679097600000, expiresAt: 1742256000000},
      ],
    },
    {
      personId: '4060741400007504265',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1677974400000, expiresAt: 1741132800000},
      ],
    },
    {
      personId: '4060741400411923424',
      certs: [
        {id: '4c4f3e9b-9afc-482f-97fc-6bfb91268a33', assignedAt: 1677110400000, expiresAt: 1740268800000},
        {id: '0a6b8137-0cdf-4619-9869-a5a2c11f414f', assignedAt: 1677024000000, expiresAt: 1740268800000},
      ],
    },
    {
      personId: '4060741400396512177',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1677024000000, expiresAt: 1740182400000},
      ],
    },
    {
      personId: '4060741400470604623',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1676851200000, expiresAt: 1740009600000},
      ],
    },
    {
      personId: '4060741400470604614',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1676851200000, expiresAt: 1740009600000},
      ],
    },
    {
      personId: '8760000000000751544',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1674777600000, expiresAt: 1737936000000},
      ],
    },
    {
      personId: '4060741400369132241',
      certs: [
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1671926400000, expiresAt: 1735084800000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1496620800000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400483756244',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1671753600000, expiresAt: 1734912000000},
      ],
    },
    {
      personId: '4060741400462574845',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1671148800000, expiresAt: 1734307200000},
      ],
    },
    {
      personId: '4060741400465362022',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1671062400000, expiresAt: 1734220800000},
      ],
    },
    {
      personId: '4060741400470230512',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1670544000000, expiresAt: 1733702400000},
      ],
    },
    {
      personId: '4060741400470230502',
      certs: [
        {id: '5b1e302e-2016-4187-9abd-d3dee9c2db37', assignedAt: 1670544000000, expiresAt: 1733702400000},
      ],
    },
    {
      personId: '4060741400462557538',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1670457600000, expiresAt: 1733616000000},
      ],
    },
    {
      personId: '8760000000000576488',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1670198400000, expiresAt: 1733356800000},
      ],
    },
    {
      personId: '4060741400449373355',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1669507200000, expiresAt: 1732665600000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663459200000, expiresAt: 1726617600000},
        {id: 'c427b876-4aae-46ce-aeaa-660cadbb0a8e', assignedAt: 1662854400000, expiresAt: 1726617600000},
      ],
    },
    {
      personId: '8760000000006124920',
      certs: [
        {id: '280422fe-8ed5-48dc-86c8-bb1c1c7a0840', assignedAt: 1669420800000, expiresAt: 1732579200000},
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1661817600000, expiresAt: 1724976000000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1659657600000, expiresAt: 1722816000000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1559952000000, expiresAt: 1716249600000},
      ],
    },
    {
      personId: '4060741400379887739',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1668902400000, expiresAt: 1732060800000},
      ],
    },
    {
      personId: '8760000000000593455',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1668124800000, expiresAt: 1731283200000},
        {id: 'c92fca0c-4707-4251-a6ff-db96eee413cf', assignedAt: 1661212800000, expiresAt: 1731283200000},
      ],
    },
    {
      personId: '4060741400462558333',
      certs: [
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1667779200000, expiresAt: 1730937600000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1596499200000, expiresAt: 1714953600000},
      ],
    },
    {
      personId: '4060741400441817086',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1667606400000, expiresAt: 1730764800000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663372800000, expiresAt: 1730764800000},
      ],
    },
    {
      personId: '8760000000000006515',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1666483200000, expiresAt: 1729641600000},
      ],
    },
    {
      personId: '4060741400411703244',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1665964800000, expiresAt: 1729123200000},
      ],
    },
    {
      personId: '4060741400411703212',
      certs: [
        {id: '280422fe-8ed5-48dc-86c8-bb1c1c7a0840', assignedAt: 1665964800000, expiresAt: 1729123200000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1657411200000, expiresAt: 1762905600000},
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1637280000000, expiresAt: 1762905600000},
      ],
    },
    {
      personId: '8760000000000578274',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1665878400000, expiresAt: 1729036800000},
        {id: '0a051ec3-6374-4b47-a8c1-b438313e4624', assignedAt: 1586649600000, expiresAt: 1698537600000},
      ],
    },
    {
      personId: '8760000000000237318',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1665878400000, expiresAt: 1729036800000},
      ],
    },
    {
      personId: '4060741400382142312',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1665619200000, expiresAt: 1728777600000},
      ],
    },
    {
      personId: '8760000000000593908',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1664236800000, expiresAt: 1727395200000},
        {id: '4476ab88-a40b-4b1f-8eba-5cbb4681b8fb', assignedAt: 1593475200000, expiresAt: 1656547200000},
        {id: '0a051ec3-6374-4b47-a8c1-b438313e4624', assignedAt: 1592611200000, expiresAt: 1698537600000},
      ],
    },
    {
      personId: '4060741400301106354',
      certs: [
        {id: '4c4f3e9b-9afc-482f-97fc-6bfb91268a33', assignedAt: 1664064000000, expiresAt: 1727222400000},
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1577491200000, expiresAt: 1640649600000},
      ],
    },
    {
      personId: '4060741400412885948',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1663977600000, expiresAt: 1727136000000},
      ],
    },
    {
      personId: '8760000000000809342',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663977600000, expiresAt: 1727136000000},
      ],
    },
    {
      personId: '8760000000000760195',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663804800000, expiresAt: 1726963200000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1627257600000, expiresAt: 1747958400000},
      ],
    },
    {
      personId: '4060741400474012370',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1663459200000, expiresAt: 1726617600000},
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1637280000000, expiresAt: 1762819200000},
      ],
    },
    {
      personId: '4060741400383468062',
      certs: [
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1663027200000, expiresAt: 1751068800000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1562630400000, expiresAt: 1751068800000},
      ],
    },
    {
      personId: '4060741400438302485',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1662768000000, expiresAt: 1760572800000},
        {id: '4697a656-3623-4801-b5fd-a6f7f23ca129', assignedAt: 1647216000000, expiresAt: 1710374400000},
        {id: '0a051ec3-6374-4b47-a8c1-b438313e4624', assignedAt: 1625443200000, expiresAt: 1760572800000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1592611200000, expiresAt: 1760572800000},
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1592092800000, expiresAt: 1655164800000},
        {id: '68e3f0b6-c681-4137-b8e1-10daf7e2772e', assignedAt: 1591142400000, expiresAt: 1654214400000},
      ],
    },
    {
      personId: '8760000000000746074',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1662508800000, expiresAt: 1762560000000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1593216000000, expiresAt: 1762560000000},
      ],
    },
    {
      personId: '4060741400007012029',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1661731200000, expiresAt: 1724889600000},
      ],
    },
    {
      personId: '4060741400039050229',
      certs: [
        {id: '1b5eff4e-fe68-46a9-b4db-f3afc254f4f1', assignedAt: 1661212800000, expiresAt: 1724371200000},
        {id: '5b1e302e-2016-4187-9abd-d3dee9c2db37', assignedAt: 1650499200000, expiresAt: 1713657600000},
      ],
    },
    {
      personId: '4060741400464953315',
      certs: [
        {id: 'c427b876-4aae-46ce-aeaa-660cadbb0a8e', assignedAt: 1660003200000, expiresAt: 1723161600000},
      ],
    },
    {
      personId: '4060741400326759364',
      certs: [
        {id: 'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1', assignedAt: 1658880000000, expiresAt: 1722038400000},
      ],
    },
    {
      personId: '4060741400006630517',
      certs: [
        {id: '91b3c920-7593-41e8-b96c-e95a9edd988a', assignedAt: 1656374400000, expiresAt: 1719532800000},
        {id: '87e2781a-c0b6-4e42-b065-31a7a2bd8fe4', assignedAt: 1655251200000, expiresAt: 1718409600000},
        {id: '93db0107-4d20-426f-b35f-929d9a5963e1', assignedAt: 1654646400000, expiresAt: 1718409600000},
        {id: '2eefcba5-1141-4484-84ea-ea5905eb8007', assignedAt: 1653609600000, expiresAt: 1716768000000},
        {id: '7f6407ee-fd22-4a22-a81a-f71e86b30eaf', assignedAt: 1653350400000, expiresAt: 1716768000000},
        {id: 'de8ed648-d25c-4d12-ac3e-aa7e2013efb1', assignedAt: 1652745600000, expiresAt: 1715904000000},
        {id: '5a027ab8-2011-4f1f-b163-ab7f26f55c12', assignedAt: 1652313600000, expiresAt: 1715472000000},
        {id: 'ed29e4bb-e9da-4102-918d-01dd877f85c3', assignedAt: 1651276800000, expiresAt: 1715472000000},
        {id: '4c4f3e9b-9afc-482f-97fc-6bfb91268a33', assignedAt: 1648944000000, expiresAt: 1715904000000},
        {id: '3dfe1b4e-4e3d-407e-af93-cd6d83f8661c', assignedAt: 1637539200000, expiresAt: 1753920000000},
        {id: '280422fe-8ed5-48dc-86c8-bb1c1c7a0840', assignedAt: 1636848000000, expiresAt: 1753920000000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1606262400000, expiresAt: 1720396800000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1444348800000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400042811548',
      certs: [
        {id: '0a6b8137-0cdf-4619-9869-a5a2c11f414f', assignedAt: 1653955200000, expiresAt: 1717718400000},
        {id: '4c4f3e9b-9afc-482f-97fc-6bfb91268a33', assignedAt: 1593129600000, expiresAt: 1717718400000},
      ],
    },
    {
      personId: '8760000000000460198',
      certs: [
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1648857600000, expiresAt: 1712016000000},
      ],
    },
    {
      personId: '4060741400462558379',
      certs: [
        {id: '65cda44b-fea2-41ae-9d14-0571fb644092', assignedAt: 1647820800000, expiresAt: 1710979200000},
      ],
    },
    {
      personId: '4060741400007335642',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1643068800000, expiresAt: 1768608000000},
      ],
    },
    {
      personId: '4060741400462557810',
      certs: [
        {id: 'de8ed648-d25c-4d12-ac3e-aa7e2013efb1', assignedAt: 1640908800000, expiresAt: 1764374400000},
      ],
    },
    {
      personId: '4060741400477546223',
      certs: [
        {id: 'c427b876-4aae-46ce-aeaa-660cadbb0a8e', assignedAt: 1640736000000, expiresAt: 1703808000000},
      ],
    },
    {
      personId: '4060741400016121378',
      certs: [
        {id: '2eefcba5-1141-4484-84ea-ea5905eb8007', assignedAt: 1640563200000, expiresAt: 1765756800000},
      ],
    },
    {
      personId: '8760000000001121112',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1640131200000, expiresAt: 1765324800000},
      ],
    },
    {
      personId: '4060741400309597224',
      certs: [
        {id: '0a051ec3-6374-4b47-a8c1-b438313e4624', assignedAt: 1640131200000, expiresAt: 1763856000000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1639180800000, expiresAt: 1763856000000},
      ],
    },
    {
      personId: '4060741400382140925',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1639612800000, expiresAt: 1762992000000},
      ],
    },
    {
      personId: '8760000000000807001',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1638576000000, expiresAt: 1763683200000},
        {id: '4f35ed38-5106-4509-939a-ae6da98e885d', assignedAt: 1636761600000, expiresAt: 1763683200000},
      ],
    },
    {
      personId: '4060741400006937112',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1637452800000, expiresAt: 1761264000000},
      ],
    },
    {
      personId: '8760000000000283726',
      certs: [
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1636329600000, expiresAt: 1752105600000},
      ],
    },
    {
      personId: '8760000000000469045',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1634428800000, expiresAt: 1748563200000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1599264000000, expiresAt: 1748563200000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1555804800000, expiresAt: 1748563200000},
      ],
    },
    {
      personId: '8760000000000957767',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1633824000000, expiresAt: 1759622400000},
      ],
    },
    {
      personId: '4060741400330909054',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1633737600000, expiresAt: 1759363200000},
      ],
    },
    {
      personId: '4060741400049353477',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1630108800000, expiresAt: 1693180800000},
      ],
    },
    {
      personId: '4060741400380100278',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1628380800000, expiresAt: 1753920000000},
      ],
    },
    {
      personId: '4060741400383628842',
      certs: [
        {id: 'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1', assignedAt: 1627084800000, expiresAt: 1752624000000},
      ],
    },
    {
      personId: '4060741400037138801',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1626566400000, expiresAt: 1751500800000},
      ],
    },
    {
      personId: '8760000000000522054',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1618704000000, expiresAt: 1749859200000},
      ],
    },
    {
      personId: '4060741400325853196',
      certs: [
        {id: '49517524-f7ff-4ebc-bf04-dc90b1e68b25', assignedAt: 1616889600000, expiresAt: 1679961600000},
      ],
    },
    {
      personId: '4060741400374153907',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1614124800000, expiresAt: 1747008000000},
      ],
    },
    {
      personId: '4060741400339215857',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1612742400000, expiresAt: 1675814400000},
      ],
    },
    {
      personId: '4060741400041181152',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1612224000000, expiresAt: 1750982400000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1579219200000, expiresAt: 1750982400000},
      ],
    },
    {
      personId: '4060741400462574736',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1609372800000, expiresAt: 1734652800000},
      ],
    },
    {
      personId: '4060741400411009906',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1608854400000, expiresAt: 1743120000000},
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1549238400000, expiresAt: 1743120000000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1543795200000, expiresAt: 1743120000000},
      ],
    },
    {
      personId: '4060741400009367211',
      certs: [
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1607990400000, expiresAt: 1712275200000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1590624000000, expiresAt: 1714348800000},
        {id: 'b3e36dde-2d90-4e5d-9fe6-cd1215a633ec', assignedAt: 1567296000000, expiresAt: 1630454400000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1546560000000, expiresAt: 1714348800000},
      ],
    },
    {
      personId: '4060741400333685369',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1606089600000, expiresAt: 1669161600000},
      ],
    },
    {
      personId: '8760000000000400901',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1605484800000, expiresAt: 1750982400000},
      ],
    },
    {
      personId: '4060741400047511769',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1602028800000, expiresAt: 1665100800000},
      ],
    },
    {
      personId: '4060741400344641954',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1601424000000, expiresAt: 1664496000000},
      ],
    },
    {
      personId: '4060741400322487514',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1600473600000, expiresAt: 1663545600000},
      ],
    },
    {
      personId: '4060741400009407571',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1598745600000, expiresAt: 1661817600000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1510272000000, expiresAt: 1661817600000},
      ],
    },
    {
      personId: '4060741400342780768',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1598745600000, expiresAt: 1714262400000},
      ],
    },
    {
      personId: '8760000000000818429',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1596931200000, expiresAt: 1660003200000},
      ],
    },
    {
      personId: '4060741400343154412',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1594771200000, expiresAt: 1765756800000},
      ],
    },
    {
      personId: '4060741400382341121',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1593475200000, expiresAt: 1656547200000},
      ],
    },
    {
      personId: '4060741400008079978',
      certs: [
        {id: 'b3e36dde-2d90-4e5d-9fe6-cd1215a633ec', assignedAt: 1593475200000, expiresAt: 1656547200000},
      ],
    },
    {
      personId: '4060741400462576888',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1593475200000, expiresAt: 1715385600000},
      ],
    },
    {
      personId: '4060741400382853339',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1593129600000, expiresAt: 1719100800000},
      ],
    },
    {
      personId: '4060741400369875280',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1591920000000, expiresAt: 1654992000000},
      ],
    },
    {
      personId: '4060741400395877867',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1590969600000, expiresAt: 1656115200000},
      ],
    },
    {
      personId: '4000741400004815505',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1590624000000, expiresAt: 1653696000000},
      ],
    },
    {
      personId: '4060741400370135111',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1588982400000, expiresAt: 1737763200000},
        {id: '54747e2b-827d-4043-b647-8e79ad5b15a1', assignedAt: 1588982400000, expiresAt: 1652054400000},
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1572048000000, expiresAt: 1737763200000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1567296000000, expiresAt: 1737763200000},
      ],
    },
    {
      personId: '8760000000000342475',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1583107200000, expiresAt: 1750204800000},
      ],
    },
    {
      personId: '8760000000000440739',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1583107200000, expiresAt: 1688083200000},
      ],
    },
    {
      personId: '8760000000000989221',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1582588800000, expiresAt: 1747526400000},
      ],
    },
    {
      personId: '4060741400035195397',
      certs: [{id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1581984000000, expiresAt: null}],
    },
    {
      personId: '4060741400376730908',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1581984000000, expiresAt: 1743120000000},
      ],
    },
    {
      personId: '4060741400375294478',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1580428800000, expiresAt: 1746144000000},
        {id: '6d9187cb-4b47-4196-9afa-b46e5184f3eb', assignedAt: 1547078400000, expiresAt: 1746144000000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1522022400000, expiresAt: 1746144000000},
      ],
    },
    {
      personId: '4060741400050091151',
      certs: [
        {id: '54747e2b-827d-4043-b647-8e79ad5b15a1', assignedAt: 1580169600000, expiresAt: 1672444800000},
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1580169600000, expiresAt: 1738540800000},
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1520121600000, expiresAt: 1738540800000},
      ],
    },
    {
      personId: '4060741400328179521',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1579046400000, expiresAt: 1642204800000},
      ],
    },
    {
      personId: '4060741400411021910',
      certs: [
        {id: 'b3e36dde-2d90-4e5d-9fe6-cd1215a633ec', assignedAt: 1578873600000, expiresAt: 1642032000000},
      ],
    },
    {
      personId: '8760000000000089930',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1578441600000, expiresAt: 1749168000000},
      ],
    },
    {
      personId: '4060741400007012172',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1577664000000, expiresAt: 1640822400000},
      ],
    },
    {
      personId: '8760000000006419088',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1577059200000, expiresAt: 1745020800000},
      ],
    },
    {
      personId: '4060741400376211959',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1576800000000, expiresAt: 1639958400000},
      ],
    },
    {
      personId: '4060741400372065535',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1576540800000, expiresAt: 1639699200000},
      ],
    },
    {
      personId: '4060741400382205270',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1575936000000, expiresAt: 1750464000000},
      ],
    },
    {
      personId: '4060741400008979728',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1574812800000, expiresAt: 1750896000000},
      ],
    },
    {
      personId: '4060741400008839336',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1573689600000, expiresAt: 1738886400000},
      ],
    },
    {
      personId: '4060741400040421087',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1569196800000, expiresAt: 1632355200000},
      ],
    },
    {
      personId: '4060741400375421864',
      certs: [
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1568160000000, expiresAt: 1631318400000},
      ],
    },
    {
      personId: '4060741400323888039',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1561161600000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '8760000000000020642',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1561161600000, expiresAt: 1739750400000},
      ],
    },
    {
      personId: '4060741400047322630',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1559260800000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400415145485',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1553731200000, expiresAt: 1750550400000},
        {id: '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37', assignedAt: 1538438400000, expiresAt: 1750550400000},
      ],
    },
    {
      personId: '4060741400330908919',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1549497600000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400008845016',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1549497600000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400034256257',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1548892800000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400391818120',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1548720000000, expiresAt: 1625011200000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1500422400000, expiresAt: 1625011200000},
        {id: '4476ab88-a40b-4b1f-8eba-5cbb4681b8fb', assignedAt: 1476835200000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400410274606',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1545868800000, expiresAt: 1738195200000},
      ],
    },
    {
      personId: '8760000000000608369',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1544572800000, expiresAt: 1743724800000},
      ],
    },
    {
      personId: '4060741400462557389',
      certs: [
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1544486400000, expiresAt: 1749772800000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1482969600000, expiresAt: 1749772800000},
      ],
    },
    {
      personId: '4060741400417521390',
      certs: [
        {id: '20f9cbcc-5d80-4082-b48e-6d6774f3e829', assignedAt: 1543795200000, expiresAt: 1688083200000},
      ],
    },
    {
      personId: '4060741400462576951',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1543276800000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400035259145',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1542067200000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400007605115',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1541980800000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400462557398',
      certs: [
        {id: '9b818f47-4917-4356-b0db-8abcce54c514', assignedAt: 1541721600000, expiresAt: 1747440000000},
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1508457600000, expiresAt: 1747440000000},
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1471910400000, expiresAt: 1747440000000},
      ],
    },
    {
      personId: '4060741400374981777',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1541116800000, expiresAt: 1739577600000},
      ],
    },
    {
      personId: '4060741400008727347',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1539302400000, expiresAt: 1625011200000},
      ],
    },
    {
      personId: '4060741400387148487',
      certs: [
        {id: '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8', assignedAt: 1537228800000, expiresAt: 1748822400000},
      ],
    },
    {
      personId: '4060741400369120824',
      certs: [
        {id: 'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c', assignedAt: 1535328000000, expiresAt: 1741910400000},
      ],
    },
    {
      personId: '4060741400034996470',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1493942400000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400008009837',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1485475200000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4000741400004898396',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1468886400000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400035302197',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1468368000000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4000741400011615635',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1466726400000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400009621379',
      certs: [
        {id: '19f2ef7e-f1f5-4929-a30f-e7157b160355', assignedAt: 1465776000000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4000741400012770984',
      certs: [
        {id: '82a16159-a73e-49f8-9aea-2e1fa7c46e94', assignedAt: 1445990400000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400006259725',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1441324800000, expiresAt: 1601424000000},
      ],
    },
    {
      personId: '4060741400034572831',
      certs: [
        {id: 'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3', assignedAt: 1421625600000, expiresAt: 1601424000000},
      ],
    },
  ],
});

if (
  window.__SERVER_DATA__.RECOGNITIONS &&
  window.__SERVER_DATA__.RECOGNITIONS.employees &&
  window.__SERVER_DATA__.PERSONS
) {
  window.__SERVER_DATA__.RECOGNITIONS.employees = window.__SERVER_DATA__.RECOGNITIONS.employees.map(
    (badgesData) => {
      const person = window.__SERVER_DATA__.PERSONS.find((p) => p.id === badgesData.employeeId);

      if (!person) return badgesData;

      const location = [];
      if (person.country) {
        location.push(person.country);
      }
      if (person.city) {
        location.push(person.city);
      }

      return {
        id: person.id,
        employeeId: person.id,
        fullName: person.fullName,
        email: person.email,
        title: person.title,
        city: person.city,
        country: person.country,
        locationCityName: person.city,
        locationCountryName: person.country,
        location: location.join(', '),
        avatar: person.avatar,
        badges: badgesData.badges,
        comment: badgesData.comment,
        isTopContributor: badgesData.isTopContributor,
        lastDateAssigned: badgesData.lastDateAssigned,
        employeePhoto: 'https://static.cdn.epam.com/avatar/' + person.avatar,
        profileLink: 'https://telescope.epam.com/who/key/upsaId/' + person.id,
      };
    },
  );
}

if (window.__SERVER_DATA__.CERT_EMPLOYEES && window.__SERVER_DATA__.PERSONS) {
  window.__SERVER_DATA__.CERT_EMPLOYEES = window.__SERVER_DATA__.CERT_EMPLOYEES.map((certificatesData) => {
    const person = (window.__SERVER_DATA__.PERSONS || []).find((p) => p.id === certificatesData.personId);

    if (!person) return certificatesData;

    const location = [];
    if (person.city) {
      location.push(person.city);
    }
    if (person.country) {
      location.push(person.country);
    }

    return {
      id: person.id,
      fullName: person.fullName,
      email: person.email,
      title: person.title,
      city: person.city,
      country: person.country,
      location: location.join(', '),
      avatar: person.avatar,
      personId: person.id,
      certs: certificatesData.certs,
    };
  });
}