const inbox = [
	{ id: 0, label: 'Входящие', badge: 3 },
	{ id: 1, label: 'В работе' },
	{ id: 2, label: 'На контроле' },
	{ id: 3, label: 'Ответственное исполнение' },
	{ id: 4, label: 'Завершено' },
]

const outbox = [
	{ id: 0, label: 'Исходящие', badge: undefined },
	{ id: 1, label: 'Делегировано' },
	{ id: 2, label: 'Завершено' },
]

const mydoc = [
	{ id: 0, label: 'Я создал', badge: undefined },
	{ id: 1, label: 'Я готовил' },
	{ id: 2, label: 'Поиск документов' },
]

const indoc = [
	{ id: 0, label: 'Входящие документы', badge: undefined },
	{ id: 1, label: 'На регистрацию' },
	{ id: 2, label: 'Не отправленные на рассмотрение' },
	{ id: 3, label: 'На рассмотрении' },
	{ id: 4, label: 'Рассмотренные' },
	{ id: 5, label: 'Резолюции на отправку' },
	{ id: 6, label: 'Поиск входящих документов' },
	{ id: 7, label: 'Зарегистрированные сегодня' },
]

const outdoc = [
	{ id: 0, label: 'Исходящие документы', badge: undefined },
	{ id: 1, label: 'На регистрацию' },
	{ id: 2, label: 'Поиск входящих документов' },
]
const ord = [
	{ id: 0, label: 'На проверку', badge: undefined },
	{ id: 1, label: 'Документы на согласовании' },
	{ id: 2, label: 'Документы на подписании' },
	{ id: 3, label: 'Действующие' },
	{ id: 4, label: 'На регистрацию' },
]

const rows = [
	{
		id: 0,
		name: 'ОРД Тема',
		changed: '31.08.2022 10:22',
		type: 'На ознакомление',
		author: 'Орлов П.',
		unread: true,
	},
	{
		id: 1,
		name: 'Задание на проверку',
		changed: '30.08.2022 12:22',
		type: 'На ознакомление',
		author: 'Уткина Г.',
		unread: true,
	},
	{
		id: 2,
		name: 'ОРД Тестирование приказов по ОД',
		changed: '29.08.2022 14:12',
		type: 'На ознакомление',
		author: 'Соловьев С.',
		unread: true,
	},
	{
		id: 3,
		name: 'ОРД О проведении опытной эксплуатации в системе Docsvision 5.5 АХУ',
		changed: '29.08.2022 12:50',
		type: 'На ознакомление',
		author: 'Воробьева А.',
		unread: true,
	},
	{
		id: 4,
		name: 'Приказ по филиалу № 223-5',
		changed: '28.08.2022 14:12',
		type: 'На исполнение',
		author: 'Гусев И.',
		unread: true,
	},
	{
		id: 5,
		name: 'Заказ канцелярии на 3 кв.',
		changed: '28.08.2022 12:19',
		type: 'На согласование',
		author: 'Гусев И.',
		unread: true,
	},
]

export { inbox, outbox, mydoc, indoc, outdoc, ord, rows }
