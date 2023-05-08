import Head from "next/head";
import { NextPage } from "next";
import {
  NODEJS_Q4_SOURCE_CODE,
  NODEJS_Q5_SOURCE_CODE,
  NODEJS_Q5_SOLUTION_CODE,
  NODEJS_Q6_CODE_EXAMPLE_EXPORT,
  NODEJS_Q6_CODE_EXAMPLE_REQUIRE,
} from "@/constants";
import { AccordionItem, Code, PageTitle } from "@/components";
import {
  Accordion,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const NodejsPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Test Task • Node.JS</title>
      </Head>

      <Stack spacing={4}>
        <PageTitle>NodeJS Page</PageTitle>
        <Accordion allowToggle>
          <AccordionItem title="1. Що таке файл package.json?">
            <Text>
              <b>package.json</b> - це файл, який використовується в Node.js
              проектах для визначення метаданих і інформації про конфігурацію
              проекту. Він містить інформацію, необхідну для створення,
              тестування та розгортання проекту. Наприклад:
            </Text>

            <UnorderedList px={8}>
              <ListItem>
                <b>name</b>: назва проекту
              </ListItem>
              <ListItem>
                <b>version</b>: версія проекту
              </ListItem>
              <ListItem>
                <b>private</b>: відповідає за публікацію пакета за допомогою
                команди npm publish
              </ListItem>
              <ListItem>
                <b>description</b>: опис проекту
              </ListItem>
              <ListItem>
                <b>author</b>: ім&apos;я та контактна інформація автора проекту
              </ListItem>
              <ListItem>
                <b>license</b>: ліцензія, за якою випускається проект
              </ListItem>
              <ListItem>
                <b>scripts</b>: набір команд, за допомогою яких можна запускати
                проект для створення, тестування та розгортання
              </ListItem>
              <ListItem>
                <b>dependencies</b>: список залежностей проекту
              </ListItem>
              <ListItem>
                <b>devDependencies</b>: список пакетів, необхідних для розробки,
                але не для продакшена
              </ListItem>
            </UnorderedList>

            <Text>
              package.json зазвичай знаходиться в кореневому каталозі проекту
              Node.js і керується за допомогою npm cli.
            </Text>
          </AccordionItem>

          <AccordionItem title="2. Які є типи запитів HTTP?">
            <UnorderedList px={4}>
              <ListItem>
                <b>GET</b>: використовується для отримання даних із сервера
                (HTML-сторінки, зображення, відео, тощо)
              </ListItem>
              <ListItem>
                <b>POST</b>: використовується для надсилання даних на сервер для
                створення ресурсу.
              </ListItem>
              <ListItem>
                <b>PUT</b>: використовується для оновлення існуючого ресурсу на
                сервері. Він замінює весь ресурс новими даними, наданими в
                запиті.
              </ListItem>
              <ListItem>
                <b>PATCH</b>: використовується для оновлення ресурсу на сервері.
                На відміну від методу PUT, метод PATCH використовується для
                оновлення лише зазначених полів або властивостей ресурсу.
              </ListItem>
              <ListItem>
                <b>DELETE</b>: використовується для видалення ресурсу на
                сервері.
              </ListItem>
              <ListItem>
                <b>HEAD</b>: схожий на запит GET, але він отримує лише заголовки
                відповіді, а не вміст.
              </ListItem>
              <ListItem>
                <b>OPTIONS</b>: використовується для отримання підтримуваних
                методів HTTP та інших параметрів, доступних для ресурсу.
              </ListItem>
              <ListItem>
                <b>CONNECT</b>: встановіть мережеве підключення до ресурсу
                (зазвичай для HTTPS)
              </ListItem>
            </UnorderedList>
          </AccordionItem>

          <AccordionItem title="3. Поясніть різницю між локальним і глобальним встановленням пакетів npm.">
            <Stack spacing={4}>
              <Text>
                Встановлення пакета локально означає, що пакет встановлено в
                папку node_modules поточного каталогу. Зазвичай це спосіб
                інсталяції пакетів, які є специфічними для конкретного проекту.
                Локально встановленний пакет доступний лише в каталозі, де його
                встановлено, і в будь-яких сабкаталогах під ним. Це тому, що
                Node.js спочатку шукає модулі в локальному каталозі node_modules
                під час вирішення залежностей.
              </Text>
              <Text>
                Глобальне встановлення пакета означає, що пакет встановлено у
                глобальному місці системи, а не в конкретному проекту. Це робить
                пакет доступним для будь-якого проекту Node.js, який працює у
                вашій системі. Це зручно для встановлення пакетів, які надають
                інструменти CLI або інші утиліти, які використовуються в кількох
                проектах.
              </Text>
            </Stack>
          </AccordionItem>

          <AccordionItem title="4. Поясніть порядок виконання прослуховувачів подій у Node.js. Що буде результатом цього коду і чому?">
            <Text>Розглянемо цей код:</Text>
            <Code language="javascript">{NODEJS_Q4_SOURCE_CODE}</Code>
            <Text>
              У Node.js слухачі подій виконуються в тому порядку, в якому вони
              були зареєстровані. Це означає, що якщо зареєструвати кілька
              листенерів для однієї події, вони виконуватимуться в тому порядку,
              в якому їх було додано.
            </Text>
            <Text>
              У цьому коді перший листенер подій реєструється за допомогою
              методу on, а за ним іде оператор console.log, який виводить
              &quot;Statement A&quot; у консоль. Потім для тієї самої події
              реєструється другий листенер подій, за яким слідує виклик методу
              emit, який ініціює подію та передає рядок &quot;Emitted
              Statement&quot; як дату листенерам.
            </Text>
            <Text>
              Коли подія емітиться, перший листенер, зареєстрований для події,
              буде виконаний першим, виводячі до консолі &quot;Emitted Statement
              - FIRST&quot;. Потім другий листенер, зареєстрований для події,
              буде виконаний наступним, виводячі до консолі &quot;Emitted
              Statement - SECOND&quot;. Наприкінці до консолі буде виведено
              &quot;Statement B&quot;.
            </Text>
          </AccordionItem>

          <AccordionItem title="5. Поясніть, що не так із використанням async/await у циклі forEach. Чи працює він належним чином? Ви можете це виправити?">
            <Text>Розглянемо цей код:</Text>
            <Code language="javascript">{NODEJS_Q5_SOURCE_CODE}</Code>
            <Text>
              Якщо в async/await використати цикл forEach то це може призвести
              до неочікуваних результатів, оскільки forEach не чекає завершення
              промісів, перш ніж перейти до наступного елемента циклу. Це
              означає, що проміс ініціюються, але не обов&apos;язково
              резолвиться в тому порядку, в якому вони були викликані. Дані
              консолі можуть бути невпорядкованими або неповними.
            </Text>
            <Text>
              Аби виправити це, можно використати цикл for...of замість циклу
              forEach. Це дозволить використовувати await для кожного проміса
              перед переходом до наступного елемента в циклі. Це гарантує, що
              проміси будуть вирішуватись в очікуваному порядку.
            </Text>
            <Code language="javascript">{NODEJS_Q5_SOLUTION_CODE}</Code>
          </AccordionItem>

          <AccordionItem title="6. Що саме робить module.exports у Node.js і яким би був простий приклад?">
            <Text>
              У Node.js module.exports - це об&apos;єкт, який використовується
              для визначення того, що модуль має експортувати як свій публічний
              API. Коли призначається значення або функцію до module.exports, то
              вони становляться доступними для інших модулів, яким потрібен цей
              модуль.
            </Text>
            <Text>Наприклад:</Text>
            <Code language="typescript">{NODEJS_Q6_CODE_EXAMPLE_EXPORT}</Code>
            <Code language="typescript">{NODEJS_Q6_CODE_EXAMPLE_REQUIRE}</Code>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
};

export default NodejsPage;
