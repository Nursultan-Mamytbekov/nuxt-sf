<script setup lang="ts">
const persons = [
  {
    name: "Алиев Бактияр Дженишбекович",
    position: "Председатель Социального фонда КР",
    day: "Пятница",
    time: "с 16:00 по 18:00",
    phone: "0(312) 54-45-29",
  },
  {
    name: "Абжапаров Теңизбек Жусупбекович",
    position: "Первый заместитель председателя Социального фонда КР",
    day: "Вторник",
    time: "с 16:00 по 18:00",
    phone: "0(312) 54-52-25",
  },
  {
    name: "Джуматаева Гульнура Муратовна",
    position: "аместитель председателя Социального фонда КР",
    day: "Четверг",
    time: "с 16:00 по 18:00",
    phone: "0(312) 54-52-25",
  },
  {
    name: "Жума уулу Улан",
    position: "Заместитель председателя Социального фонда КР",
    day: "Среда",
    time: "с 16:00 по 18:00",
    phone: "0(312) 54-15-54",
  },
  {
    name: "Бообеков Бактияр Таласович",
    position: "Руководитель аппарата Социального фонда КР",
    day: "Понедельник",
    time: "с 16:00 по 18:00",
    phone: "0(312) 54-73-58",
  },
];
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Должность</th>
        <th>Приемный день</th>
        <th>Время приема</th>
        <th>Телефон</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in persons" :key="index">
        <td class="w-60">{{ item.name }}</td>
        <td class="w-80">{{ item.position }}</td>
        <td>{{ item.day }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
