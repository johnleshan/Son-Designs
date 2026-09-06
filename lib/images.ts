const p = (n: string) => `/images/IMG-20260830-WA${n}.jpg`;

export const IMG = {
  hero: p("0001"),
  philosophy: p("0002"),
  project1: p("0003"),
  project2: p("0004"),
  project3: p("0005"),
  project4: p("0006"),
  project5: p("0007"),
  project6: p("0008"),
  project7: p("0009"),
  project8: p("0010"),
  project9: "/images/project9.jpg",
  project10: "/images/project10.jpg",
  project11: "/images/project11.jpg",
  teamOsmoa: "/images/team-osmoa.jpg",
  teamAron: "/images/team-aron-rotich.jpg",
  teamJoram: "/images/team-joram-mwakaba.jpg",
} as const;