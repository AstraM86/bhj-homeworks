// Исправленное решение
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    // Проверяем, что статус ответа успешный (200-299)
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const request = xhr.response;
        const pullTitle = document.querySelector('.poll__title');
        const pullAnswers = document.querySelector('.poll__answers');
        pullTitle.textContent = request.data.title;
        request.data.answers.forEach(answer => {
          pullAnswers.appendChild(createAnswer(answer));
        });
      } catch (error) {
        console.error('Ошибка обработки данных:', error);
        pullTitle.textContent = 'Произошла ошибка при загрузке опроса';
      }
    } else {
      // Обработка ошибок HTTP
      console.error('Ошибка HTTP:', xhr.status, xhr.statusText);
      const pullTitle = document.querySelector('.poll__title');
      pullTitle.textContent = `Ошибка загрузки опроса (${xhr.status})`;
    }
  }
})

function createAnswer(question) {
  const answer = document.createElement('button');
  answer.setAttribute('class', 'poll__answer');
  answer.textContent = question;
  answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
  return answer;
}
/* Первое решение
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const request = xhr.response;
    const pullTitle = document.querySelector('.poll__title');
    const pullAnswers = document.querySelector('.poll__answers');
    pullTitle.textContent = request.data.title;
    request.data.answers.forEach(button => {
      pullAnswers.appendChild(createAnswer(button));
    });
  }
})

function createAnswer(question) {
  const answer = document.createElement('button');
  answer.setAttribute('class', 'poll__answer');
  answer.textContent = question;
  answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
  return answer;
}*/

/* Решение с обработкой различных сценариев ошибок
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.timeout = 10000; // Таймаут 10 секунд

// Обработчик ошибок сети
xhr.addEventListener('error', () => {
  console.error('Ошибка сети');
  showError('Ошибка сети. Проверьте подключение к интернету.');
});

// Обработчик таймаута
xhr.addEventListener('timeout', () => {
  console.error('Таймаут запроса');
  showError('Время ожидания ответа истекло.');
});

xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    // Проверяем статус ответа
    if (xhr.status === 0) {
      // Обычно означает ошибку CORS или сетевую ошибку
      console.error('Статус 0 - вероятно, ошибка CORS или сети');
      showError('Не удалось выполнить запрос. Возможно, проблема с CORS.');
      return;
    }
    
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const request = xhr.response;
        
        // Дополнительная проверка структуры данных
        if (!request || !request.data || !Array.isArray(request.data.answers)) {
          throw new Error('Неверный формат данных опроса');
        }
        
        const pullTitle = document.querySelector('.poll__title');
        const pullAnswers = document.querySelector('.poll__answers');
        
        // Очищаем предыдущие ответы (если были)
        pullAnswers.innerHTML = '';
        
        pullTitle.textContent = request.data.title;
        request.data.answers.forEach(answer => {
          pullAnswers.appendChild(createAnswer(answer));
        });
      } catch (error) {
        console.error('Ошибка обработки данных:', error);
        showError('Произошла ошибка при обработке данных опроса.');
      }
    } else {
      // Обработка HTTP-ошибок
      handleHttpError(xhr.status);
    }
  }
});

function createAnswer(question) {
  const answer = document.createElement('button');
  answer.setAttribute('class', 'poll__answer');
  answer.textContent = question;
  answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
  return answer;
}

function handleHttpError(status) {
  console.error(`HTTP ошибка: ${status}`);
  const pullTitle = document.querySelector('.poll__title');
  
  switch(status) {
    case 404:
      pullTitle.textContent = 'Опрос не найден (404)';
      break;
    case 500:
      pullTitle.textContent = 'Ошибка сервера (500)';
      break;
    case 403:
      pullTitle.textContent = 'Доступ запрещен (403)';
      break;
    case 401:
      pullTitle.textContent = 'Требуется авторизация (401)';
      break;
    default:
      pullTitle.textContent = `Ошибка загрузки опроса (${status})`;
  }
}

function showError(message) {
  const pullTitle = document.querySelector('.poll__title');
  pullTitle.textContent = message;
}*/