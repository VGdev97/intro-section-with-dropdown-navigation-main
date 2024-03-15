import todoList from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";

export const navLinks = [
  {
    id: 1,
    name: "Features",
    subLinks: [
      { name: "Todo List", icon: todoList },
      { name: "Calendar", icon: calendar },
      { name: "Reminders", icon: reminders },
      { name: "Planning", icon: planning },
    ],
  },
  {
    id: 2,
    name: "Company",
    subLinks: [{ name: "History" }, { name: "Our Team" }, { name: "Blog" }],
  },
  {
    id: 3,
    name: "Careers",
  },
  {
    id: 4,
    name: "About",
  },
];
