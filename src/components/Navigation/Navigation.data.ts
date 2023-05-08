interface ILinks {
  id: number;
  title: string;
  href: string;
  target?: string;
}

export const links: ILinks[] = [
  {
    id: 1,
    title: "General",
    href: "/general",
  },
  {
    id: 2,
    title: "Angular",
    href: "/angular",
  },
  {
    id: 3,
    title: "NodeJS",
    href: "/nodejs",
  },
  {
    id: 4,
    title: "Github",
    href: "https://github.com/ukrainiancustomer/test-task-it-artel",
    target: "__blank",
  },
];
