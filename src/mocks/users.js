import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// const getMaxUserId = async () => {
//   try {
//     const response = await axios.get('/api/data');
//     const users = response.data.data;
//     return Math.max(...users.map(user => user.id), 0);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };

// Имитация GET-запроса
mock.onGet('/api/data').reply(200, {
  data: [
    {
      "id": 0,
      "fullname": "Иванов Иван Иванович",
      "created_at": "2023-01-18T12:30:00Z",
      "phone": "12345678901",
      "region": "Москва",
      "status": "Активен"
    },
    {
      "id": 1,
      "fullname": "Петров Петр Петрович",
      "created_at": "2023-02-05T15:45:00Z",
      "phone": "23456789012",
      "region": "Санкт-Петербург",
      "status": "Неактивен"
    },
    {
      "id": 2,
      "fullname": "Смирнова Анна Игоревна",
      "created_at": "2023-03-12T09:20:00Z",
      "phone": "34567890123",
      "region": "Новосибирск",
      "status": "Активен"
    },
    {
      "id": 3,
      "fullname": "Кузнецов Сергей Александрович",
      "created_at": "2023-04-28T18:00:00Z",
      "phone": "45678901234",
      "region": "Екатеринбург",
      "status": "Неактивен"
    },
    {
      "id": 4,
      "fullname": "Александрова Мария Владимировна",
      "created_at": "2023-05-15T14:10:00Z",
      "phone": "56789012345",
      "region": "Казань",
      "status": "Приостановлен"
    },
    {
      "id": 5,
      "fullname": "Николаев Игорь Анатольевич",
      "created_at": "2023-06-03T07:55:00Z",
      "phone": "67890123456",
      "region": "Челябинск",
      "status": "Активен"
    },
    {
      "id": 6,
      "fullname": "Борисова Екатерина Дмитриевна",
      "created_at": "2023-07-19T20:30:00Z",
      "phone": "78901234567",
      "region": "Самара",
      "status": "Неактивен"
    },
    {
      "id": 7,
      "fullname": "Медведев Артем Валентинович",
      "created_at": "2023-08-24T11:45:00Z",
      "phone": "89012345678",
      "region": "Омск",
      "status": "Приостановлен"
    },
    {
      "id": 8,
      "fullname": "Козлова Ольга Александровна",
      "created_at": "2023-09-10T16:25:00Z",
      "phone": "90123456789",
      "region": "Воронеж",
      "status": "Активен"
    },
    {
      "id": 9,
      "fullname": "Тимофеев Андрей Петрович",
      "created_at": "2023-10-27T22:05:00Z",
      "phone": "01234567890",
      "region": "Ростов-на-Дону",
      "status": "Неактивен"
    },
    {
      "id": 10,
      "fullname": "Полякова Анастасия Сергеевна",
      "created_at": "2023-11-15T13:40:00Z",
      "phone": "10987654321",
      "region": "Уфа",
      "status": "Приостановлен"
    },
    {
      "id": 11,
      "fullname": "Григорьев Владимир Николаевич",
      "created_at": "2023-12-02T08:15:00Z",
      "phone": "98765432109",
      "region": "Пермь",
      "status": "Активен"
    },
    {
      "id": 12,
      "fullname": "Сергеева Людмила Игоревна",
      "created_at": "2024-01-18T05:50:00Z",
      "phone": "87654321098",
      "region": "Владивосток",
      "status": "Неактивен"
    },
    {
      "id": 13,
      "fullname": "Васильев Дмитрий Валерьевич",
      "created_at": "2024-02-04T19:35:00Z",
      "phone": "76543210987",
      "region": "Ярославль",
      "status": "Приостановлен"
    },
    {
      "id": 14,
      "fullname": "Комарова Елена Станиславовна",
      "created_at": "2024-03-21T10:00:00Z",
      "phone": "65432109876",
      "region": "Иркутск",
      "status": "Активен"
    },
    {
      "id": 15,
      "fullname": "Захаров Павел Васильевич",
      "created_at": "2024-04-06T17:20:00Z",
      "phone": "54321098765",
      "region": "Тольятти",
      "status": "Неактивен"
    },
    {
      "id": 16,
      "fullname": "Андреева Алина Владимировна",
      "created_at": "2024-05-23T21:55:00Z",
      "phone": "43210987654",
      "region": "Красноярск",
      "status": "Приостановлен"
    },
    {
      "id": 17,
      "fullname": "Игнатьев Игнат Семенович",
      "created_at": "2024-06-09T14:45:00Z",
      "phone": "32109876543",
      "region": "Тюмень",
      "status": "Активен"
    },
    {
      "id": 18,
      "fullname": "Кудрявцева Татьяна Михайловна",
      "created_at": "2024-07-26T08:10:00Z",
      "phone": "21098765432",
      "region": "Сочи",
      "status": "Неактивен"
    },
    {
      "id": 19,
      "fullname": "Федоров Максим Артемович",
      "created_at": "2024-08-12T18:30:00Z",
      "phone": "10987654321",
      "region": "Калининград",
      "status": "Приостановлен"
    }
  ],
});

// Имитация POST-запроса
mock.onPost('/api/users').reply(async (config) => {
  const users = JSON.parse(config.data);
  const newUserId = Math.floor(Math.max((Math.random() * 100), 19));
  const newUser = {
    ...users,
    id: newUserId + 1,
    created_at: new Date().toISOString(),
  };
  return [201, {data: newUser}];
});

export default axios;
