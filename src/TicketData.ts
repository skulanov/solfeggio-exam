export interface AudioItem {
  label: string;
  file: string;
}

export interface TicketSection {
  title: string;
  image?: string;
  subItems?: {
    text?: string;
    audio?: string;
    image?: string;
    label?: string;
  }[];
  audio?: string;
}

export interface Ticket {
  id: number;
  title: string;
  sections: TicketSection[];
}

export const TICKET_DATA: Ticket[] = [
  {
    id: 1,
    title: "Билет №1. Ре минор",
    sections: [
      {
        title: "1. Гамма ре минор: ре-ми-фа-соль-ля-сиb-до-ре",
        subItems: [
          { text: "натуральный", audio: "b1-01-01 Dm-natural.mp3" },
          { text: "гармонический", audio: "b1-01-02 Dm-harm.mp3" },
          { text: "мелодический", audio: "b1-01-03 Dm-melod.mp3" },
        ],
      },
      {
        title: "2. Цепочка ступеней: I III V VI V VII+ I",
        image: "b1-02-00 steps.png",
        audio: "b1-02-00 steps.mp3",
      },
      {
        title: "3. Цепочка аккордов: t 53 - s 64 - D 6 - t 53",
        image: "b1-03-00 t53.png",
        subItems: [
          { label: "t 53", audio: "b1-03-01 t53.mp3" },
          { label: "s 64", audio: "b1-03-02 s64.mp3" },
          { label: "D 6", audio: "b1-03-03 D6.mp3" },
          { label: "t 53", audio: "b1-03-04 t53.mp3" },
        ],
      },
      {
        title: "4. Одноголосный номер",
        image: "b1-04-00 single.png",
        audio: "b1-04-00 single.mp3",
      },
      {
        title: "5. Двуголосный номер",
        image: "b1-05-01 duo-all.png",
        subItems: [
          { label: "дуэт", audio: "b1-05-01 duo-all.mp3" },
          { label: "голос 1", audio: "b1-05-02 duo-1.mp3" },
          { label: "голос 2", audio: "b1-05-03 duo-2.mp3" },
        ],
      },
    ],
  },
  // Placeholders for other tickets
  {
    id: 2,
    title: "Билет №2. Соль минор",
    sections: [
      {
        title: "1. Гамма соль минор: соль-ля-сиb-до-ре-миb-фа-соль",
        subItems: [
          { text: "натуральная", audio: "b2-01-01 Gm-natural.mp3" },
          { text: "гармоническая", audio: "b2-01-02 Gm-harm.mp3" },
          { text: "мелодическая", audio: "b2-01-03 Gm-melod.mp3" },
        ],
      },
      {
        title: "2. Цепочка ступеней",
        image: "b2-02-00 steps.png",
        audio: "b2-02-00 steps.mp3",
      },
      {
        title: "3. Цепочка аккордов",
        image: "b2-03-00 t53.png",
        subItems: [
          { label: "t 53", audio: "b2-03-01 t53.mp3" },
          { label: "t 64", audio: "b2-03-02 t64.mp3" },
          { label: "D 7", audio: "b2-03-03 D7.mp3" },
          { label: "t 53", audio: "b2-03-04 t53.mp3" },
        ],
      },
      {
        title: "4. Одноголосный номер",
        image: "b2-04-00 single.png",
        audio: "b2-04-00 single.mp3",
      },
      {
        title: "5. Двуголосный номер",
        image: "b2-05-01 duo-all.png",
        subItems: [
          { label: "дуэт", audio: "b2-05-01 duo-all.mp3" },
          { label: "голос 1", audio: "b2-05-02 duo-1.mp3" },
          { label: "голос 2", audio: "b2-05-03 duo-2.mp3" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Билет №3. Си минор",
    sections: [
      {
        title: "1. Гамма си минор: си-до#-ре-ми-фа#-соль-ля-си",
        subItems: [
          { text: "натуральная", audio: "b3-01-01 Hm-natural.mp3" },
          { text: "гармоническая", audio: "b3-01-02 Hm-harm.mp3" },
          { text: "мелодическая", audio: "b3-01-03 Hm-melod.mp3" },
        ],
      },
      {
        title: "2. Цепочка ступеней",
        image: "b3-02-00 steps.png",
        audio: "b3-02-00 steps.mp3",
      },
      {
        title: "3. Цепочка аккордов",
        image: "b3-03-00 t53.png",
        subItems: [
          { label: "t 53", audio: "b3-03-01 t53.mp3" },
          { label: "t 6", audio: "b3-03-02 t6.mp3" },
          { label: "s 53", audio: "b3-03-03 s53.mp3" },
          { label: "t 6", audio: "b3-03-04 t6.mp3" },
        ],
      },
      {
        title: "4. Одноголосный номер",
        image: "b3-04-00 single.png",
        audio: "b3-04-00 single.mp3",
      },
      {
        title: "5. Двуголосный номер",
        image: "b3-05-01 duo-all.png",
        subItems: [
          { label: "дуэт", audio: "b3-05-01 duo-all.mp3" },
          { label: "голос 1", audio: "b3-05-02 duo-1.mp3" },
          { label: "голос 2", audio: "b3-05-03 duo-2.mp3" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Билет №4. Ре мажор",
    sections: [
      {
        title: "1. Гамма Ре мажор: ре-ми-фа#-соль-ля-си-до#-ре",
        audio: "b4-01-01 D-maj.mp3",
      },
      {
        title: "2. Цепочка ступеней",
        image: "b4-02-00 steps.png",
        audio: "b4-02-00 steps.mp3",
      },
      {
        title: "3. Цепочка аккордов",
        image: "b4-03-00 t53.png",
        subItems: [
          { label: "T 53", audio: "b4-03-01 T53.mp3" },
          { label: "T 6", audio: "b4-03-02 T6.mp3" },
          { label: "S 53", audio: "b4-03-03 S53.mp3" },
          { label: "T 53", audio: "b4-03-04 T53.mp3" },
        ],
      },
      {
        title: "4. Одноголосный номер",
        image: "b4-04-00 single.png",
        audio: "b4-04-00 single.mp3",
      },
      {
        title: "5. Двуголосный номер",
        image: "b4-05-01 duo-all.png",
        subItems: [
          { label: "дуэт", audio: "b4-05-00 duo-all.mp3" },
          { label: "голос 1", audio: "b4-05-01 duo-1.mp3" },
          { label: "голос 2", audio: "b4-05-02 duo-2.mp3" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Билет №5. Фа мажор",
    sections: [
      {
        title: "1. Гамма Фа мажор: фа-соль-ля-сиb-до-ре-ми-фа",
        audio: "b5-01-00 F-maj.mp3",
      },
      {
        title: "2. Цепочка ступеней",
        image: "b5-02-00 steps.png",
        audio: "b5-02-00 steps.mp3",
      },
      {
        title: "3. Цепочка аккордов",
        image: "b5-03-00 t53.png",
        subItems: [
          { label: "T 53", audio: "b5-03-01 T53.mp3" },
          { label: "S 64", audio: "b5-03-02 S64.mp3" },
          { label: "D 6", audio: "b5-03-03 D6.mp3" },
          { label: "T 53", audio: "b5-03-04 T53.mp3" },
        ],
      },
      {
        title: "4. Одноголосный номер",
        image: "b5-04-00 single.png",
        audio: "b5-04-00 single.mp3",
      },
      {
        title: "5. Двуголосный номер",
        image: "b5-05-00 duo-all.png",
        subItems: [
          { label: "дуэт", audio: "b5-05-00 duo-all.mp3" },
          { label: "голос 1", audio: "b5-05-01 duo-1.mp3" },
          { label: "голос 2", audio: "b5-05-02 duo-2.mp3" },
        ],
      },
    ],
  },
];
