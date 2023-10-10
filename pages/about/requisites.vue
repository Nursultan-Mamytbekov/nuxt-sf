<script setup lang="ts">
const requisites = [
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
  {
    number: 1,
    name: "г.Бишкек ЦА",
    address: "г. Бишкек ул. Радишева,62",
    inn: "02904199410050",
    okpo: "00613984",
    account: "1299002391200064",
    bank: "«РСК Банк»",
  },
];
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th>№</th>
        <th>Наименование структурного подразделения</th>
        <th>Местонахождение Соцфонда</th>
        <th>ИНН</th>
        <th>Код ОКПО</th>
        <th>Текущий счет</th>
        <th>Банки</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in requisites" :key="index">
        <td>{{ item.number }}</td>
        <td class="w-20">{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.inn }}</td>
        <td>{{ item.okpo }}</td>
        <td>{{ item.account }}</td>
        <td>{{ item.bank }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
