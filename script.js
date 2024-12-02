document.addEventListener('DOMContentLoaded', function () {
  // Функция для переключения отображения списка слов
  const categories = document.querySelectorAll('.category-title');

  categories.forEach(category => {
    category.addEventListener('click', function () {
      const wordList = this.nextElementSibling; // Список слов в категории
      wordList.style.display = wordList.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Функция для отображения значения слова и картинки
  const words = document.querySelectorAll('.word-item');
  const definitionBox = document.getElementById('word-definition');
  const wordText = document.getElementById('word-text');
  const wordImage = document.getElementById('word-image');

  words.forEach(word => {
    word.addEventListener('click', function () {
      const definition = this.getAttribute('data-definition');
      const imageUrl = this.getAttribute('data-image');

      // Отображаем текстовое определение
      wordText.textContent = definition;

      // Отображаем изображение
      wordImage.src = imageUrl;
      wordImage.style.display = 'block'; // Убедимся, что изображение видно

      definitionBox.style.display = 'block'; // Показываем поле с объяснением
    });
  });
});
