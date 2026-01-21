const campuses = [
  {
    id: 1,
    code: "AUB",
    name: "Auburn Campus",
    city: "Auburn",
    open: true,
    programs: ["CS", "IT", "Nursing"],
  },
  {
    id: 2,
    code: "KCC",
    name: "Kent Campus",
    city: "Kent",
    open: true,
    programs: ["CS", "Business"],
  },
  {
    id: 3,
    code: "SEA",
    name: "Seattle Center",
    city: "Seattle",
    open: false,
    programs: ["Continuing Ed"],
  },
  {
    id: 4,
    code: "TAC",
    name: "Tacoma Site",
    city: "Tacoma",
    open: true,
    programs: ["Trades", "IT"],
  },
  {
    id: 5,
    code: "REN",
    name: "Renton Annex",
    city: "Renton",
    open: false,
    programs: ["ESL", "GED"],
  },
];

export const home = (req, res) => {
  res.json({ campuses });
};

export const info = (req, res) => {
  res.status(200).json({
    message: "Server Routes",
    routes: ["GET /", "GET /about|info", "GET /:id", "GET /search?city=&open"],
  });
};

export const campusById = (req, res) => {
  const { id } = req.params;

  const campus = campuses.find((el) => el.id === parseInt(id));

  if (campus) {
    res.status(200).json(campus);
  } else {
    res.status(404).json({ messgae: "Campus not found" });
  }
};

export const search = (req, res) => {
  let results = campuses;

  const { city, open, program } = req.query;

  if (city) {
    results = results.filter(
      (el) => el.city.toLowerCase() === city.toLowerCase(),
    );
  }

  if (open != undefined) {
    const isOpen = open === "true";
    results = results.filter((el) => el.open === isOpen);
  }

  if (program) {
    results = results.filter((el) => el.programs.includes(program));
  }

  res.status(200).json(results);
};
