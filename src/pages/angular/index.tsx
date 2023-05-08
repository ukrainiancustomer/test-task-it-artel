import Head from "next/head";
import { NextPage } from "next";
import {
  ANGULAR_05_SOURCE_CODE,
  ANGULAR_06_SOURCE_CODE,
  ANGULAR_07_FILLED_BLANKS,
  ANGULAR_07_SOURCE_CODE,
  ANGULAR_Q3_SOURCE_CODES,
  ANGULAR_Q4_SOURCE_CODE,
} from "@/constants";
import { AccordionItem, Code, PageTitle } from "@/components";
import {
  Accordion,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";

const AngularPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Test Task • Angular</title>
      </Head>
      <Stack spacing={4}>
        <PageTitle>Angular Page</PageTitle>
        <Accordion allowToggle>
          <AccordionItem title="1. Яка різниця між *ngIf і [hidden]?">
            <Text>
              *ngIf і [hidden] використовуються для умовного показу або
              приховування елементів. Різниця між ними полягає у:
            </Text>
            <Text>
              *ngIf — це структурна директива, яка додає або видаляє елементи з
              DOM на основі умови. Якщо умова виконується, елемент додається до
              DOM. Якщо умова хибна, елемент видаляється з DOM. Це означає, що
              елемент і всі його дочірні елементи повністю видаляються з DOM, що
              може мати наслідки для продуктивності, якщо елемент складний або
              містить багато дочірніх елементів.
            </Text>
            <Text>
              [hidden] — це прив’язка атрибута яка приховує елемент,
              встановлюючи display у значення none. Елемент залишається в DOM,
              але він прихований. Це означає, що елемент і всі його дочірні
              елементи все ще присутні в DOM, що може мати переваги в
              продуктивності, якщо елемент складний або містить багато дочірніх
              елементів.
            </Text>
          </AccordionItem>

          <AccordionItem title="2. Що таке Observable?">
            <Text>
              <b>Observable</b> - це потік даних, який можна використовувати для
              представлення послідовності значень, які видаються з часом.
              Observable може видавати нуль або більше значень, та також може
              видавати помилку або сигнал завершення.
            </Text>
            <Text>
              Observable можна використовувати для обробки асинхронних операцій,
              таких як створення HTTP-запитів, дозволяючи підписатися на потік
              значень і виконувати дії у відповідь на ці значення. Наприклад,
              Observable можно використовувати, щоб зробити HTTP-запит до
              сервера, а потім підписатися на потік відповіді, щоб отримати
              дані, коли вони надходять.
            </Text>
            <Text>
              Observables є фундаментальною частиною бібліотеки RxJS -
              бібліотеки для реактивного програмування в JavaScript. Angular
              використовує RxJS для обробки асинхронних операцій і надає з
              коробки багато різних вбудованих Observables.
            </Text>
          </AccordionItem>

          <AccordionItem title="3. Розглянемо наступний компонент:">
            <Code language="typescript">{ANGULAR_Q3_SOURCE_CODES}</Code>
            <Text>
              Виберіть правильні твердження про його використання (в іншому
              шаблоні компонента або модулі).
            </Text>
            <Text>(Виберіть усі прийнятні відповіді.)</Text>
            <OrderedList px={8}>
              <ListItem>
                <b>TRUE</b>:&nbsp;
                {
                  '<welcome name="TestDome"></welcome> відображатиме: "Welcome to TestDome!".'
                }
              </ListItem>
              <ListItem>
                <b>FALSE</b>:&nbsp;
                {"<welcome></welcome> нічого не відображатиме."}
              </ListItem>
              <ListItem>
                <b>TRUE</b>:&nbsp;
                {
                  "@NgModule({ declarations: [ WelcomeComponent ] }) export class WelcomeModule {} повідомляє, що компонент привітання належить модулю привітання."
                }
              </ListItem>
              <ListItem>
                <b>FALSE</b>:&nbsp;
                {
                  '<hello name="{{ name }}"></hello> відображатиме: "Welcome to name!".'
                }
              </ListItem>
            </OrderedList>
          </AccordionItem>

          <AccordionItem title="4. Розглянемо наступний компонент, який можна використовувати для моделювання тварини та її шуму.">
            <Code language="typescript">{ANGULAR_Q4_SOURCE_CODE}</Code>
            <OrderedList px={8}>
              <ListItem>
                <b>FALSE</b>: Component, Input і Output всі необхідні імпорти
                цього компонента.
              </ListItem>
              <ListItem>
                <b>TRUE</b>: При включенні компонента AnimalNoise у шаблон мають
                бути вказані вхідні дані як тварин, так і шуму.
              </ListItem>
              <ListItem>
                <b>TRUE</b>: Параметр &quot;animal&quot; у оголошенні @Input
                (&quot;animal&quot;) не змінює інтерфейс компонента.
              </ListItem>
              <ListItem>
                <b>FALSE</b>: При включенні до шаблону компонентів компонент
                AnimalNoise створює діапазон, що містить інтерполіроване
                ім&apos;я тварин і кнопку, прив&apos;язану до makeNoise().
              </ListItem>
              <ListItem>
                <b>TRUE</b>: Компонент AnimalNoise може бути включений в інший
                шаблон за допомогою тега {"<AnimalNoise>"}.
              </ListItem>
            </OrderedList>
          </AccordionItem>

          <AccordionItem title="5. Розглянемо наступний модуль програми:">
            <Code language="typescript">{ANGULAR_05_SOURCE_CODE}</Code>
            <Text>
              Які з таких тверджень щодо поведінки маршрутизаторів є
              правильними?
            </Text>
            <Text>(Виберіть усі прийнятні відповіді.)</Text>
            <OrderedList px={8}>
              <ListItem>
                <b>FALSE</b>: Доступ до домашнього компонента можливий лише
                через перенаправлення кореневої URL-адреси.
              </ListItem>
              <ListItem>
                <b>TRUE</b>: Параметр id не є обов&apos;язковим, коли
                виконується виклик / detail / URL.
              </ListItem>
              <ListItem>
                <b>TRUE</b>: Необов&apos;язкові параметри можуть бути передані
                до будь-якого компонента через параметри запиту ActivatedRoute.
              </ListItem>
              <ListItem>
                <b>TRUE</b>: /detail/100 використовуватиме{" "}
                {"<router-outlet name='route1'>"} для визначення позиції виду.
              </ListItem>
              <ListItem>
                <b>FALSE</b>: Route, який перенаправляє на HomeComponent,
                активується на тих самих маршрутах, якщо властивість pathMatch:
                &quot;full&quot; була видалена.
              </ListItem>
            </OrderedList>
          </AccordionItem>

          <AccordionItem title="6. Розглянемо наступні два базові класи, Positionable і Rotatable, і похідний клас MovingObject:">
            <Code language="typescript">{ANGULAR_06_SOURCE_CODE}</Code>
            <Text>Виберіть правильні твердження.</Text>
            <Text>(Виберіть усі прийнятні відповіді.)</Text>
            <OrderedList px={8}>
              <ListItem>
                <b>TRUE</b>: Функція applyMixins застосовує реалізації
                Positionable і Rotatable до MovingObject.
              </ListItem>
              <ListItem>
                <b>FALSE</b>: Компілятор TypeScript підкреслить, що властивість
                &quot;align&quot; відсутня для типу MovingObject.
              </ListItem>
              <ListItem>
                <b>FALSE</b>: Оскільки MovingObject реалізує Rotatable, виклик
                mover.rotate(30) нічого не зробить.
              </ListItem>
              <ListItem>
                <b>TRUE</b>:Клас Positionable можна змінити на інтерфейс без
                помилок компілятора.
              </ListItem>
              <ListItem>
                <b>FALSE</b>: Властивості MovingObject необхідні як резервні для
                задоволення компілятора TypeScript.
              </ListItem>
            </OrderedList>
          </AccordionItem>

          <AccordionItem title="7. Розглянемо такі компоненти:">
            <Code language="typescript">{ANGULAR_07_SOURCE_CODE}</Code>

            <Text>
              Нижче наведено файл address-list.component.html. Заповніть
              пробіли, щоб шаблон відображав один елемент li на адресу, і
              коректно пов&apos;язував кожну адресу з полем AddressComponent.
            </Text>
            <Code language="typescript">{ANGULAR_07_FILLED_BLANKS}</Code>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
};

export default AngularPage;
