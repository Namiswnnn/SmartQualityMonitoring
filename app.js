const fountains = [
  {
    id: "Kamalayan-Fountain",
    title: "Kamalayan Fountain",
    location: "Kamalayan Building",
    description:
      "Kamalayan Fountain is positioned within a major academic building where students, faculty members, and campus personnel may regularly access drinking water throughout the day. Its location makes it a useful monitoring point for observing water quality in a highly visible and frequently used part of the campus.",
    concern: "High user exposure and immediate water quality visibility",
    priority: "pH, turbidity, TDS, conductivity, and flow rate monitoring",
    reason:
      "A frequently used fountain in a central building should be monitored closely because changes in water clarity, taste, dissolved solids, or flow performance can affect many users and should be recognized as early as possible.",
    tags: ["Central academic zone", "High foot traffic", "Routine quality monitoring"],
    x: 50.1,
    y: 57
  },
  {
    id: "St. Augustine-2nd Floor",
    title: "St. Augustine 2nd Floor",
    location: "St. Augustine Building",
    description:
      "This fountain represents upper-floor access within the St. Augustine Building, where students and teachers may need dependable drinking water between classes and daily academic activities. Including it in the map helps demonstrate building-level coverage beyond the most obvious ground-floor locations.",
    concern: "Upper-floor academic use and building coverage consistency",
    priority: "pH, conductivity, turbidity, and TDS monitoring",
    reason:
      "A second-floor fountain is important because it helps show whether water condition remains consistent across different levels of the same building and supports more complete monitoring coverage.",
    tags: ["Upper-floor coverage", "Academic building", "Consistency check"],
    x: 47.7,
    y: 81.7
  },
  {
    id: "Gregor-Fountain",
    title: "Gregor Fountain",
    location: "Gregor Mendel Science Center",
    description:
      "Gregor Fountain is located in the Gregor Mendel Science Center, where a science-oriented environment makes organized interpretation of water quality readings especially relevant. This fountain is a strong example of how the proposed system can present technical monitoring information in a clear and meaningful way.",
    concern: "Academic reliability and dissolved content awareness",
    priority: "TDS, conductivity, pH, and turbidity monitoring",
    reason:
      "A science-related location benefits from clear monitoring records because parameters such as conductivity and TDS can help indicate changes in dissolved substances and overall water condition.",
    tags: ["Science center", "Sensor interpretation", "Dissolved content review"],
    x: 63.8,
    y: 18.7
  },
  {
    id: "La Residencia I-Fountain",
    title: "La Residencia I Fountain",
    location: "La Residencia I",
    description:
      "This fountain represents a residential or extended-stay campus area where users may depend on safe and convenient drinking water beyond standard classroom movement. Its inclusion strengthens the presentation of campus-wide monitoring by covering locations tied to longer occupancy and daily comfort.",
    concern: "User comfort and continuous access in a residential area",
    priority: "Temperature, pH, turbidity, and flow rate monitoring",
    reason:
      "Residential or longer-stay areas benefit from consistent monitoring because water access may be needed at different times of the day, and both water quality and fountain reliability remain important.",
    tags: ["Residential area", "Continuous access", "User comfort"],
    x: 83.3,
    y: 67.4
  },
  {
    id: "St. Monica-Fountain",
    title: "St. Monica Fountain",
    location: "St. Monica Building",
    description:
      "St. Monica Fountain helps represent another important building-based access point within the campus. Monitoring this location supports broader institutional coverage and helps demonstrate how the system can compare water condition across multiple buildings rather than relying on only one or two central points.",
    concern: "Routine building use and cross-building comparison",
    priority: "pH, turbidity, conductivity, and ORP monitoring",
    reason:
      "This location is valuable because it helps determine whether changes in water quality are limited to a specific building or appear across several areas of the campus.",
    tags: ["Building coverage", "Cross-building comparison", "Preventive checking"],
    x: 39.7,
    y: 63.9
  },
  {
    id: "St. Augustine-1st Floor",
    title: "St. Augustine 1st Floor",
    location: "St. Augustine Building",
    description:
      "This fountain covers the first-floor area of the St. Augustine Building, where daily movement may be steadier and access is often more immediate. It provides a practical monitoring point for a reachable academic-space fountain that may experience frequent use across the school day.",
    concern: "Ground-floor accessibility and steady traffic",
    priority: "pH, turbidity, TDS, and flow rate monitoring",
    reason:
      "A first-floor fountain is often easier to access, which can increase its use and make timely monitoring important for both user safety and operational convenience.",
    tags: ["Ground-floor access", "Steady traffic", "Practical monitoring point"],
    x: 51.1,
    y: 80.7
  },
  {
    id: "La Residencia II-Fountain",
    title: "La Residencia II Fountain",
    location: "La Residencia II",
    description:
      "La Residencia II Fountain extends monitoring coverage to another non-central campus location and helps illustrate a more distributed monitoring concept. Its presence on the map supports the idea that water quality oversight should reach beyond the main academic core.",
    concern: "Distributed campus coverage and preventive maintenance",
    priority: "Conductivity, ORP, pH, and water level monitoring",
    reason:
      "A distributed monitoring point helps facilities personnel compare readings from central and non-central areas, which can improve judgment when identifying localized or wider concerns.",
    tags: ["Distributed coverage", "Preventive maintenance", "Non-central area"],
    x: 89.7,
    y: 47.3
  },
  {
    id: "Parking-Fountain",
    title: "Parking Fountain",
    location: "Administration Building",
    description:
      "Parking Fountain represents a more open and transitional access point near the Administration Building, where users may encounter the fountain while moving between campus spaces. It is useful for demonstrating how the monitoring system can also support fountains placed in circulation-oriented locations.",
    concern: "Open-access use and exposure to varying conditions",
    priority: "Turbidity, temperature, flow rate, and pH monitoring",
    reason:
      "A fountain in a transitional area should be monitored carefully because visibility, accessibility, and surrounding use conditions can affect both water safety perception and actual fountain performance.",
    tags: ["Transitional space", "Open access", "Visible monitoring point"],
    x: 77.1,
    y: 47.3
  }
];

const revealElements = document.querySelectorAll("[data-reveal]");
const navLinks = document.querySelectorAll(".site-nav a, .sticky-nav a");
const campusStage = document.querySelector(".campus-stage");
const stickyNav = document.querySelector(".sticky-nav");
const heroHeader = document.querySelector(".site-header");
const navSections = Array.from(
  new Map(
    Array.from(navLinks)
      .map((link) => link.getAttribute("href"))
      .filter((href) => href && href.startsWith("#"))
      .map((href) => [href, document.querySelector(href)])
  ).values()
).filter(Boolean);

const mapTitle = document.getElementById("mapTitle");
const mapLocation = document.getElementById("mapLocation");
const mapDescription = document.getElementById("mapDescription");
const mapConcern = document.getElementById("mapConcern");
const mapPriority = document.getElementById("mapPriority");
const mapReason = document.getElementById("mapReason");
const mapTags = document.getElementById("mapTags");

let selectedFountainId = fountains[0]?.id || "";

function setActiveLinksById(sectionId) {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = sectionId ? href === `#${sectionId}` : false;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function getNavScrollOffset() {
  const stickyHeight = stickyNav?.offsetHeight || 72;
  return stickyHeight + 44;
}

function scrollToSection(target, smooth = true) {
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - getNavScrollOffset();
  window.scrollTo({
    top: Math.max(0, top),
    behavior: smooth ? "smooth" : "auto"
  });
}

function setActiveNav() {
  if (!navSections.length) return;

  const heroThreshold = heroHeader
    ? Math.max(heroHeader.offsetHeight - getNavScrollOffset(), 0)
    : 0;

  if (window.scrollY < heroThreshold) {
    setActiveLinksById(null);
    return;
  }

  const boundary = getNavScrollOffset() + 20;
  let activeSection =
    navSections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= boundary && rect.bottom > boundary;
    }) || null;

  if (!activeSection && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    activeSection = navSections.at(-1) || null;
  }

  setActiveLinksById(activeSection?.id || null);
}

function toggleStickyNav() {
  if (!stickyNav) return;

  const triggerPoint = heroHeader ? Math.max(heroHeader.offsetHeight - 160, 220) : 420;
  stickyNav.classList.toggle("is-visible", window.scrollY >= triggerPoint);
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function findFountain(fountainId = selectedFountainId) {
  return fountains.find((fountain) => fountain.id === fountainId);
}

function renderEmptyMapDetails() {
  mapTitle.textContent = "No Fountain Selected";
  mapLocation.textContent = "Water Fountain Map";
  mapDescription.textContent =
    "The selected fountain details will appear here when a marker is chosen on the campus map.";
  mapConcern.textContent = "No active marker";
  mapPriority.textContent = "No monitoring point selected";
  mapReason.textContent = "Select a fountain marker to view its location-based monitoring explanation.";
  mapTags.innerHTML = "";
}

function updatePinSelection() {
  document.querySelectorAll(".map-pin").forEach((pin) => {
    const isSelected = pin.dataset.fountainId === selectedFountainId;
    pin.classList.toggle("active", isSelected);
    pin.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });
}

function renderMapDetails(fountainId = selectedFountainId) {
  const details = findFountain(fountainId);
  if (!details) {
    renderEmptyMapDetails();
    return;
  }

  selectedFountainId = details.id;
  mapTitle.textContent = details.title;
  mapLocation.textContent = details.location;
  mapDescription.textContent = details.description;
  mapConcern.textContent = details.concern;
  mapPriority.textContent = details.priority;
  mapReason.textContent = details.reason;
  mapTags.innerHTML = "";

  details.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    mapTags.appendChild(chip);
  });

  updatePinSelection();
}

function selectFountain(fountainId) {
  selectedFountainId = fountainId;
  renderMapDetails(fountainId);
}

function renderPins() {
  if (!campusStage) return;

  campusStage.querySelectorAll(".map-pin").forEach((pin) => pin.remove());

  fountains.forEach((fountain) => {
    const pin = document.createElement("button");
    pin.className = "map-pin";
    pin.type = "button";
    pin.dataset.fountainId = fountain.id;
    pin.style.setProperty("--x", `${fountain.x}%`);
    pin.style.setProperty("--y", `${fountain.y}%`);
    pin.setAttribute("aria-label", fountain.title);
    pin.setAttribute("aria-pressed", fountain.id === selectedFountainId ? "true" : "false");

    const image = document.createElement("img");
    image.src = "assets/fountain-pin.png";
    image.alt = "";

    const label = document.createElement("span");
    label.className = "pin-label";
    label.textContent = fountain.title;

    pin.append(image, label);
    pin.addEventListener("click", () => selectFountain(fountain.id));
    campusStage.appendChild(pin);
  });

  updatePinSelection();
}

function initMap() {
  renderPins();
  renderMapDetails(selectedFountainId);
}

function init() {
  revealOnScroll();
  initMap();
  setActiveNav();
  toggleStickyNav();

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      setActiveLinksById(targetId);
      history.pushState(null, "", `#${targetId}`);
      scrollToSection(target);
    });
  });

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) {
    const initialTarget = document.getElementById(initialHash);
    if (initialTarget) {
      setActiveLinksById(initialHash);
      setTimeout(() => {
        scrollToSection(initialTarget, false);
        toggleStickyNav();
        setActiveNav();
      }, 0);
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      setActiveNav();
      toggleStickyNav();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    setActiveNav();
    toggleStickyNav();
  });
}

init();
