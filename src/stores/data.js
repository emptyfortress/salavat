const inbox = [
	{ id: 0, label: 'Входящие', badge: 3 },
	{ id: 1, label: 'В работе' },
	{ id: 2, label: 'На контроле' },
	{ id: 3, label: 'Ответственное исполнение' },
	{ id: 4, label: 'Завершено' },
]

const outbox = [
	{ id: 0, label: 'Исходящие' },
	{ id: 1, label: 'Делегировано' },
	{ id: 2, label: 'Завершено' },
]

const mydoc = [
	{ id: 0, label: 'Я создал' },
	{ id: 1, label: 'Я готовил' },
	{ id: 2, label: 'Поиск документов' },
]

const indoc = [
	{ id: 0, label: 'Входящие документы' },
	{ id: 1, label: 'На регистрацию' },
	{ id: 2, label: 'Не отправленные на рассмотрение' },
	{ id: 3, label: 'На рассмотрении' },
	{ id: 4, label: 'Рассмотренные' },
	{ id: 5, label: 'Резолюции на отправку' },
	{ id: 6, label: 'Поиск входящих документов' },
	{ id: 7, label: 'Зарегистрированные сегодня' },
]

const outdoc = [
	{ id: 0, label: 'Исходящие документы' },
	{ id: 1, label: 'На регистрацию' },
	{ id: 2, label: 'Поиск входящих документов' },
]
const ord = [
	{ id: 0, label: 'На проверку' },
	{ id: 1, label: 'Документы на согласовании' },
	{ id: 2, label: 'Документы на подписании' },
	{ id: 3, label: 'Действующие' },
	{ id: 4, label: 'На регистрацию' },
]

export { inbox, outbox, mydoc, indoc, outdoc, ord }
