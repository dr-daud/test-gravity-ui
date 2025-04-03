import type { TableColumnConfig } from '@gravity-ui/uikit';

export interface ILandmarksData {
    id: string;
    name: string;
    description: string;
    time: string;
    rating: number;
    photo: string;
    location: string;
    coordinates: [number, number];
    mapLink: string;
    status: string;
}

export const columns: TableColumnConfig<ILandmarksData>[] = [
    { id: 'id', name: 'ID' },
    { id: 'name', name: 'Название' },
    { id: 'description', name: 'Описание' },
    { id: 'time', name: 'Время'},
    { id: 'rating', name: 'Рейтинг' },
    { id: 'photo', name: 'Фото' },
    { id: 'location', name: 'Локация' },
    { id: 'coordinates', name: 'Координаты' },
    { id: 'mapLink', name: 'Ссылка на карте' },
    { id: 'status', name: 'Статус' },
];

export const data: ILandmarksData[] = [
    {
        id: '1',
        name: 'Эйфелева башня',
        description:
            'Одна из самых известных достопримечательностей мира, символ Парижа и Франции.',
        time: '2023-06-15',
        rating: 4.9,
        photo: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/f02bf9e6-3603-4476-afa6-4b5dcd94cb7b/-/format/webp/-/resize/1300x/',
        location: 'Париж, Франция',
        coordinates: [48.8584, 2.2945],
        mapLink: 'https://maps.google.com/?q=48.8584,2.2945',
        status: 'В планах',
    },
    {
        id: '2',
        name: 'Великая Китайская стена',
        description: 'Огромное сооружение, построенное для защиты Китая от нашествий.',
        time: '2023-05-10',
        rating: 4.8,
        photo: 'https://resize.tripster.ru/cfg2LXOlIGk3LKmDxa96O3RWogI=/fit-in/1200x1000/filters:no_upscale()/https://cdn.tripster.ru/photos/9584623d-28d9-4d6d-bd50-41fb1fbbf189.jpg',
        location: 'Китай',
        coordinates: [40.4319, 116.5704],
        mapLink: 'https://maps.google.com/?q=40.4319,116.5704',
        status: 'В планах',
    },
    {
        id: '3',
        name: 'Статуя Свободы',
        description: 'Знаменитый символ свободы и демократии, подарок Франции США.',
        time: '2023-04-05',
        rating: 4.7,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/280px-Statue_of_Liberty_7.jpg',
        location: 'Нью-Йорк, США',
        coordinates: [40.6892, -74.0445],
        mapLink: 'https://maps.google.com/?q=40.6892,-74.0445',
        status: 'В планах',
    },
    {
        id: '4',
        name: 'Колизей',
        description: 'Античный амфитеатр, одна из главных достопримечательностей Рима.',
        time: '2023-07-20',
        rating: 4.9,
        photo: 'https://moj-tur.com/images/dost/KolizejRim.jpg',
        location: 'Рим, Италия',
        coordinates: [41.8902, 12.4922],
        mapLink: 'https://maps.google.com/?q=41.8902,12.4922',
        status: 'Осмотрена',
    },
    {
        id: '5',
        name: 'Мачу-Пикчу',
        description: 'Древний город инков, расположенный в горах Перу.',
        time: '2023-03-18',
        rating: 4.8,
        photo: 'https://rg.ru/uploads/images/214/53/01/Machu-Pikchu.jpg',
        location: 'Перу',
        coordinates: [-13.1631, -72.545],
        mapLink: 'https://maps.google.com/?q=-13.1631,-72.5450',
        status: 'Осмотрена',
    },
    {
        id: '6',
        name: 'Гранд-Каньон',
        description: 'Огромное ущелье в Аризоне, одно из самых впечатляющих природных чудес мира.',
        time: '2024-01-10',
        rating: 4.9,
        photo: 'https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/grand-canyon-2.jpg',
        location: 'Аризона, США',
        coordinates: [36.1069, -112.1129],
        mapLink: 'https://maps.google.com/?q=36.1069,-112.1129',
        status: 'Осмотрена',
    },
    {
        id: '7',
        name: 'Каппадокия',
        description:
            'Регион в Турции, известный своими уникальными скальными образованиями и воздушными шарами.',
        time: '2024-02-05',
        rating: 4.8,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mtREsX2Mb_Jxn2U7XzS3Z2xrkUyoBUna5g&s',
        location: 'Турция',
        coordinates: [38.645, 34.823],
        mapLink: 'https://maps.google.com/?q=38.645,34.823',
        status: 'В планах',
    },
];
