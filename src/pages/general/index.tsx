import Head from "next/head";
import { NextPage } from "next";
import {
  GENERAL_Q1_EXAMPLE_CODE_CSS,
  GENERAL_Q1_EXAMPLE_CODE_HTML,
  GENERAL_Q1_EXAMPLE_CODE_JS,
  GENERAL_Q3_SOLUTION_ABSOLUTE_POSITION,
  GENERAL_Q3_SOLUTION_FLEXBOX,
  GENERAL_Q3_SOLUTION_FLOAT,
  GENERAL_Q3_SOLUTION_GRID,
  GENERAL_Q3_SOLUTION_HTML,
  GENERAL_Q3_SOLUTION_INLINE_BLOCK,
  GENERAL_Q3_SOLUTION_TABLE_CELL,
  GENERAL_Q3_IMAGE,
  GENERAL_Q4_SOURCE_UNSORTED_ARRAY,
  GENERAL_Q4_SOLUTION_SORTED_ARRAY,
  GENERAL_Q5_SOURCE_CODE_HTML,
  GENERAL_Q5_SOLUTION_JS,
} from "@/constants";
import { AccordionItem, Code, PageTitle } from "@/components";
import { Accordion, Image, Stack, Text } from "@chakra-ui/react";

const GeneralPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Test Task • General</title>
      </Head>
      <Stack spacing={4}>
        <PageTitle>Верстка та Загальне</PageTitle>
        <Accordion allowToggle>
          <AccordionItem title=" 1. Чи можна з js змінювати значення before, after?">
            <Text>Цілком це можливо. Але це воркераунд.</Text>
            <Code language="html">{GENERAL_Q1_EXAMPLE_CODE_HTML}</Code>
            <Code language="css">{GENERAL_Q1_EXAMPLE_CODE_CSS}</Code>
            <Code language="javascript">{GENERAL_Q1_EXAMPLE_CODE_JS}</Code>
            <Text>
              Напряму міняти ::before та ::after за допомогою JavaScript
              <Text as="span" fontWeight="bold">
                &nbsp;неможливо
              </Text>
              . Цей підхід є не дуже добрим бо він може не працювати в старих
              браузерах, можливі перформанс іщюс, та можливі проблеми з
              анімуванням цих псевдо елементів.
            </Text>
          </AccordionItem>

          <AccordionItem title='2. Що вказує значення "1em" і якого параметра він?'>
            <Text>
              У CSS &quot;1em&quot; - це відносна одиниця вимірювання, яка
              зазвичай пов&apos;язана з розміром шрифту елемента. Значення
              &quot;1em&quot; представляє розмір шрифту елемента, в якому воно
              використовується.
            </Text>
            <Text>
              Наприклад, якщо розмір шрифту батьківського елемента становить 16
              пікселів, тоді &quot;1em&quot; дорівнюватиме 16 пікселям. Якщо
              розмір шрифту батьківського елемента змінено на 24 пікселя, тоді
              &quot;1em&quot; дорівнюватиме 24 пікселям.
            </Text>
            <Text>
              Одиниця &quot;em&quot; також використовується для визначення інших
              властивостей, таких як поля та відступи. У цих випадках значення
              &quot;1em&quot; базується на розмірі шрифту елемента, до якого
              застосовано поле або відступ.
            </Text>
          </AccordionItem>

          <AccordionItem title="3. Вмістити три блоки 20X20px в ряд, блок шириною 60px, при цьому у блоків повинні бути межі. Реалізуйте всі варіанти, які знаєте.">
            <Image
              w={{ md: "50%", sm: "75%" }}
              src={GENERAL_Q3_IMAGE}
              alt="Image for question 3"
            />
            <Stack spacing={8}>
              <Code language="html">{GENERAL_Q3_SOLUTION_HTML}</Code>
              <Stack>
                <Text fontWeight="bold">1. Flexbox:</Text>
                <Code language="css">{GENERAL_Q3_SOLUTION_FLEXBOX}</Code>
              </Stack>
              <Stack>
                <Text fontWeight="bold">2. CSS Grid:</Text>
                <Code language="css">{GENERAL_Q3_SOLUTION_GRID}</Code>
              </Stack>
              <Stack>
                <Text fontWeight="bold">3. Inline-block:</Text>
                <Code language="css">{GENERAL_Q3_SOLUTION_INLINE_BLOCK}</Code>
              </Stack>
              <Stack>
                <Text fontWeight="bold">4. Float:</Text>
                <Code language="css">{GENERAL_Q3_SOLUTION_FLOAT}</Code>
              </Stack>
              <Stack>
                <Text fontWeight="bold">5. Absolute position:</Text>
                <Code language="css">
                  {GENERAL_Q3_SOLUTION_ABSOLUTE_POSITION}
                </Code>
              </Stack>
              <Stack>
                <Text fontWeight="bold">6. Table cell:</Text>
                <Code language="css">{GENERAL_Q3_SOLUTION_TABLE_CELL}</Code>
              </Stack>
            </Stack>
          </AccordionItem>

          <AccordionItem title=" 4. Є масив, де лежать об'єкти з датами, відсортуйте його за датами.">
            <Stack spacing={6}>
              <Stack>
                <Code language="javascript">
                  {GENERAL_Q4_SOURCE_UNSORTED_ARRAY}
                </Code>
              </Stack>
              <Stack>
                <Code language="javascript">
                  {GENERAL_Q4_SOLUTION_SORTED_ARRAY}
                </Code>
              </Stack>
            </Stack>
          </AccordionItem>

          <AccordionItem title="  5. Напишіть код, який при натисканні на будь-який div всередині root буде виводити в консоль його id.">
            <Code language="html">{GENERAL_Q5_SOURCE_CODE_HTML}</Code>
            <Code language="javascript">{GENERAL_Q5_SOLUTION_JS}</Code>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
};

export default GeneralPage;
